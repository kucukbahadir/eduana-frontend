import { SearchIcon, Notebook, Brain } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

/**
 * Component for filtering and searching classes
 * @param {Object} props
 * @param {string} props.filterType - Current filter value for class type
 * @param {Function} props.setFilterType - Function to update filter type
 * @param {string} props.searchQuery - Current search query
 * @param {Function} props.setSearchQuery - Function to update search query
 */
const ClassFilter = ({ filterType, setFilterType, searchQuery, setSearchQuery }) => {
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
    </div>
  );
};

export default ClassFilter;
