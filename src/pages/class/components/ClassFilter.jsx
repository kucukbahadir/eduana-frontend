import { SearchIcon, Notebook, Brain, MapPin, Book, BarChart, Calendar, ArrowUpDown, Filter, Tag, ArrowUpAZ, ArrowDownAZ, ArrowDown01, ArrowUp01, ArrowDownZA, ArrowDown10 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select";

/**
 * Component for filtering, sorting, and searching classes
 * @param {Object} props
 * @param {string} props.filterType - Current filter value for class type
 * @param {Function} props.setFilterType - Function to update filter type
 * @param {string} props.sortBy - Current sort value
 * @param {Function} props.setSortBy - Function to update sort value
 * @param {string} props.searchQuery - Current search query
 * @param {Function} props.setSearchQuery - Function to update search query
 */
const ClassFilter = ({ filterType, setFilterType, sortBy, setSortBy, searchQuery, setSearchQuery }) => {
  return (
    <div className="flex w-full gap-2 flex-wrap md:flex-nowrap">
      <Input icon={SearchIcon} placeholder="Search classes..." className="w-full" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

      {/* Filter dropdown - dedicated to filtering by class type */}
      <Select value={filterType || ""} onValueChange={(value) => setFilterType(value)}>
        <SelectTrigger className={"w-fit md:min-w-50 gap-2 whitespace-nowrap"}>
          <SelectValue placeholder="Filter by type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Class Type</SelectLabel>
            <SelectItem value="regular">
              <div className="flex items-center gap-2">
                <Notebook size={16} />
                <span>Regular Course</span>
              </div>
            </SelectItem>
            <SelectItem value="camp">
              <div className="flex items-center gap-2">
                <Brain size={16} />
                <span>Coder Camps</span>
              </div>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Sort dropdown - dedicated to sorting classes */}
      <Select value={sortBy || ""} onValueChange={(value) => setSortBy(value)}>
        <SelectTrigger className={"w-fit md:min-w-50 gap-2 whitespace-nowrap"}>
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Name</SelectLabel>
            <SelectItem value="name-asc">
              <ArrowDownAZ size={16} />
              <span>From A to Z</span>
            </SelectItem>
            <SelectItem value="name-desc">
              <ArrowDownZA size={16} />
              <span>From Z to A</span>
            </SelectItem>
            <SelectSeparator />
            <SelectLabel>Location</SelectLabel>
            <SelectItem value="location-asc">
              <ArrowDownAZ size={16} />
              <span>From A to Z</span>
            </SelectItem>
            <SelectItem value="location-desc">
              <ArrowDownZA size={16} />
              <span>From Z to A</span>
            </SelectItem>
            <SelectSeparator />
            <SelectLabel>Period</SelectLabel>
            <SelectItem value="period-asc">
              <ArrowDown01 size={16} />
              <span>Lowest to Highest</span>
            </SelectItem>
            <SelectItem value="period-desc">
              <ArrowDown10 size={16} />
              <span>Highest to Lowest</span>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ClassFilter;
