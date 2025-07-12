import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import ClassCard from "./components/ClassCard";
import { Clock, CalendarDays, Calendar, ClockFading, Hourglass, BellElectric, SearchIcon, RefreshCcw, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const errorMessages = {
  404: "Classes not found. Please check the teacher ID or try again later.",
  500: "Server error. Please try again later.",
  "default": "An unexpected error occurred. Please try again later.",
};

const fetchCategorizedClasses = async (teacherId, searchQuery = "") => {
  const url = new URL(`http://localhost:3000/api/classes/teacher/${teacherId}/categorized`);
  if (searchQuery.trim()) {
    url.searchParams.append('search', searchQuery.trim());
  }

  const response = await fetch(url);

  if (!response.ok) {
    const errorStatus = response.status.toString();
    const errorMessage = errorMessages[errorStatus] || errorMessages["default"];
    throw new Error(errorMessage);
  }

  return response.json();
};

// Debounce hook for search optimization
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Client-side search filtering function
const filterClassesBySearch = (classesData, searchQuery) => {
  if (!searchQuery.trim()) return classesData;

  const query = searchQuery.toLowerCase();
  
  const filterCategory = (classes) => {
    return classes.filter(cls => 
      cls.searchableText?.toLowerCase().includes(query) ||
      cls.name?.toLowerCase().includes(query) ||
      cls.curriculum?.title?.toLowerCase().includes(query) ||
      cls.curriculum?.program_type?.toLowerCase().includes(query) ||
      cls.location?.name?.toLowerCase().includes(query)
    );
  };

  return {
    ongoing: filterCategory(classesData.ongoing || []),
    today: filterCategory(classesData.today || []),
    tomorrow: filterCategory(classesData.tomorrow || []),
    thisWeek: filterCategory(classesData.thisWeek || []),
    beyond: filterCategory(classesData.beyond || []),
    noUpcoming: filterCategory(classesData.noUpcoming || []),
    metadata: classesData.metadata
  };
};

const Classes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const debounceTimeoutRef = useRef(null);
  const teacherId = import.meta.env.VITE_TEACHER_ID;

  // Custom debounce with immediate local filtering
  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    if (searchQuery.trim()) {
      debounceTimeoutRef.current = setTimeout(() => {
        setDebouncedSearchQuery(searchQuery);
      }, 500); // 500ms delay for server requests
    } else {
      setDebouncedSearchQuery("");
    }

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [searchQuery]);

  const {
    data: baseClassesData = {
      ongoing: [],
      today: [],
      tomorrow: [],
      thisWeek: [],
      beyond: [],
      noUpcoming: [],
      metadata: { total: 0, calculatedAt: Date.now() }
    },
    isLoading: loading,
    isRefetching: refetching,
    error,
    refetch,
  } = useQuery({
    queryKey: ["categorizedClasses", teacherId],
    queryFn: () => fetchCategorizedClasses(teacherId),
    staleTime: 1 * 60 * 1000,
    gcTime: 3 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: 2 * 60 * 1000,
  });

  // Fetch search results only when debounced search query changes
  const {
    data: searchResultsData,
    isLoading: searchLoading,
  } = useQuery({
    queryKey: ["categorizedClasses", teacherId, debouncedSearchQuery],
    queryFn: () => fetchCategorizedClasses(teacherId, debouncedSearchQuery),
    enabled: debouncedSearchQuery.trim().length > 0,
    staleTime: 30 * 1000,
    gcTime: 1 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  // Use search results if available, otherwise filter base data locally
  const displayData = useMemo(() => {
    if (debouncedSearchQuery.trim() && searchResultsData) {
      // Use server-filtered results for longer queries
      return searchResultsData;
    } else if (searchQuery.trim()) {
      // Use client-side filtering for immediate feedback
      return filterClassesBySearch(baseClassesData, searchQuery);
    } else {
      // Show all classes when no search
      return baseClassesData;
    }
  }, [baseClassesData, searchResultsData, searchQuery, debouncedSearchQuery]);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleRefresh = useCallback(() => {
    refetch();
    if (debouncedSearchQuery.trim()) {
      // Also refresh search results if there's an active search
      setDebouncedSearchQuery(prev => prev + " "); // Trigger refetch
      setTimeout(() => setDebouncedSearchQuery(debouncedSearchQuery), 0);
    }
  }, [refetch, debouncedSearchQuery]);

  // Render class cards with a category header
  const renderCategorySection = (classes, title, icon) => {
    if (!classes || classes.length === 0) return null;

    return (
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4 border-b pb-2">
          {icon}
          <h2 className="text-lg font-medium">{title}</h2>
          <span className="text-muted-foreground text-sm">({classes.length})</span>
        </div>
        <div className="space-y-3">
          {classes.map((classData) => (
            <ClassCard key={classData.id} classData={classData} curriculum={classData.curriculum} />
          ))}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex flex-col gap-4 max-w-5xl w-full mx-auto bg-background p-5">
        <div className="flex justify-between items-end">
          <h1>Classes</h1>
          <Button variant="link" className="h-fit px-0! gap-2" disabled>
            <RefreshCcw size={16} className="mr-1" /> Refresh
          </Button>
        </div>
        <hr />
        <Input icon={SearchIcon} placeholder="Search classes..." className="w-full" disabled />
        <div className="mt-4">
          <div className="w-40 h-6 bg-muted rounded animate-pulse" />
          <hr className="mb-4 mt-3" />
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="w-full h-24 rounded-md bg-muted animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const totalClasses = [
    ...displayData.ongoing,
    ...displayData.today,
    ...displayData.tomorrow,
    ...displayData.thisWeek,
    ...displayData.beyond,
    ...displayData.noUpcoming,
  ].length;

  return (
    <div className="flex flex-col gap-4 max-w-5xl w-full mx-auto bg-background p-5">
      <div className="flex justify-between items-end">
        <h1>Classes</h1>
        <Button 
          variant="link" 
          className="h-fit px-0! gap-2" 
          onClick={handleRefresh} 
          disabled={loading}
        >
          <RefreshCcw size={16} className={`mr-1 ${refetching ? 'animate-spin' : ''}`} /> 
          Refresh
        </Button>
      </div>
      <hr />

      <div className="relative">
        <Input 
          icon={SearchIcon} 
          placeholder="Search classes..." 
          className="w-full" 
          value={searchQuery} 
          onChange={handleSearchChange}
          // Never disable the input
        />
        {searchLoading && debouncedSearchQuery.trim() && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <RefreshCcw size={16} className="animate-spin text-muted-foreground" />
          </div>
        )}
      </div>

      {error ? (
        <div className="mt-8 text-center text-red-500">
          <p className="text-lg">Error loading classes</p>
          <p className="text-sm">{error.message}</p>
        </div>
      ) : totalClasses > 0 ? (
        <div className="mt-4">
          {renderCategorySection(displayData.ongoing, "Ongoing", <BellElectric size={18} className="text-primary-button" />)}
          {renderCategorySection(displayData.today, "Today", <Hourglass size={18} className="text-success" />)}
          {renderCategorySection(displayData.tomorrow, "Tomorrow", <Clock size={18} className="text-warning" />)}
          {renderCategorySection(displayData.thisWeek, "This Week", <CalendarDays size={18} className="text-info" />)}
          {renderCategorySection(displayData.beyond, "Beyond This Week", <Calendar size={18} className="text-secondary" />)}
          {renderCategorySection(displayData.noUpcoming, "No Upcoming Sessions", <ClockFading size={18} className="text-destructive" />)}
          
          {/* Search feedback */}
          {searchQuery.trim() && (
            <div className="mt-6 text-center text-sm text-muted-foreground">
              {debouncedSearchQuery !== searchQuery ? (
                <p>Typing... (server search in {Math.max(0, 500 - (Date.now() % 1000))}ms)</p>
              ) : (
                <p>
                  Found {totalClasses} result{totalClasses !== 1 ? 's' : ''} for "{searchQuery}"
                  {searchLoading && <span> • Updating...</span>}
                </p>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="mt-8 text-center text-muted-foreground">
          <CalendarCheck size={48} className="mx-auto mb-4 opacity-50" />
          <p className="text-lg">No classes found</p>
          <p className="text-sm">
            {searchQuery.trim() ? `No classes match "${searchQuery}"` : "You don't have any classes assigned yet."}
          </p>
          {displayData.metadata?.total > 0 && (
            <p className="text-xs mt-2">
              Showing results from {displayData.metadata.total} total classes • Last updated: {new Date(displayData.metadata.calculatedAt).toLocaleTimeString()}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Classes;
