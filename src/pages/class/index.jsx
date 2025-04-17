import { useState, useEffect, useMemo } from "react";
import { classesData, curriculumData } from "./data";
import ClassFilter from "./components/ClassFilter";
import ClassCard from "./components/ClassCard";
import { FilterX } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "classManagement";

/**
 * Main Classes component that lists all available classes
 */
const Classes = () => {
  const [classes, setClasses] = useState(() => {
    const savedClasses = localStorage.getItem(STORAGE_KEY);
    return savedClasses ? JSON.parse(savedClasses) : classesData;
  });
  const [filterType, setFilterType] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Check if any filters are active
  const hasActiveFilters = filterType || sortBy || searchQuery;
  
  // Function to clear all filters
  const clearAllFilters = () => {
    setFilterType("");
    setSortBy("");
    setSearchQuery("");
  };
  
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(classes));
  }, [classes]);
  
  // Filter and sort classes based on search query, filter selection, and sort selection
  const filteredAndSortedClasses = useMemo(() => {
    let result = [...classesData];
    
    // Apply search filter if query exists
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(classData => 
        classData.name.toLowerCase().includes(query) || 
        classData.location.toLowerCase().includes(query) || 
        classData.period.includes(query) ||
        // Search in curriculum names
        curriculumData.find(c => c.id === classData.curriculumId)?.name.toLowerCase().includes(query)
      );
    }
    
    // Apply type filter if selected
    if (filterType) {
      switch (filterType) {
        case "regular":
          // Only show regular courses (non-camp)
          result = result.filter(classData => 
            !classData.type.toLowerCase().includes("camp"));
          break;
        case "camp":
          // Only show camp courses
          result = result.filter(classData => 
            classData.type.toLowerCase().includes("camp"));
          break;
        default:
          break;
      }
    }
    
    // Apply sorting if selected
    if (sortBy) {
      const [field, direction] = sortBy.split('-');
      const isAscending = direction === 'asc';
      
      switch (field) {
        case "name":
          result = result.sort((a, b) => {
            const comparison = a.name.localeCompare(b.name);
            return isAscending ? comparison : -comparison;
          });
          break;
          
        case "location":
          result = result.sort((a, b) => {
            const comparison = a.location.localeCompare(b.location);
            return isAscending ? comparison : -comparison;
          });
          break;
          
        case "period":
          result = result.sort((a, b) => {
            // Try to convert to numbers first if possible
            const numA = parseInt(a.period);
            const numB = parseInt(b.period);
            
            if (!isNaN(numA) && !isNaN(numB)) {
              return isAscending ? numA - numB : numB - numA;
            } else {
              const comparison = a.period.localeCompare(b.period);
              return isAscending ? comparison : -comparison;
            }
          });
          break;
          
        default:
          break;
      }
    }
    
    return result;
  }, [searchQuery, filterType, sortBy]);

  return (
    <div className="flex flex-col gap-4 max-w-5xl w-full mx-auto bg-background p-5">
      <div className="flex justify-between items-end">
        <h1>Classes</h1>
        <Button 
          variant="link" 
          className="h-fit px-0! gap-2" 
          onClick={clearAllFilters}
          disabled={!hasActiveFilters}
        >
          <FilterX size={16} className="mr-1" /> Clear Filters
        </Button>
      </div>
      <hr />
      
      <ClassFilter 
        filterType={filterType}
        setFilterType={setFilterType}
        sortBy={sortBy}
        setSortBy={setSortBy}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      {filteredAndSortedClasses.length > 0 ? (
        filteredAndSortedClasses.map((classData) => (
          <ClassCard 
            key={classData.id} 
            classData={classData}
            curriculum={curriculumData.find((curriculum) => curriculum.id === classData.curriculumId)}
          />
        ))
      ) : (
        <p className="text-muted-foreground text-center py-4">
          No classes found matching your criteria
        </p>  
      )}
    </div>
  );
};

export default Classes;
