import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

/**
 * Category component for displaying labeled icons with tooltips
 * @param {Object} props
 * @param {string} props.name - Name label for the tooltip
 * @param {string} props.value - Value text to display
 * @param {JSX.Element} props.icon - Icon element to display
 */
const Category = ({ name, value, icon }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex items-center gap-2 font-light text-sm text-muted-foreground">
            {icon}
            {value && `${value}`}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Category;