import { Link } from "react-router";
import { buttonVariants } from "@/components/ui/button";
import { MapPinned, Notebook, BarChart, Calendar, Brain, Activity } from "lucide-react";
import Category from "./Category";

/**
 * Component for displaying a class card with relevant information
 * @param {Object} props
 * @param {Object} props.classData - Class data object
 * @param {Object} props.curriculum - Curriculum data object
 */
const ClassCard = ({ classData, curriculum }) => {

  return (
    <div className="flex flex-col gap-2">
      <Link to={`${classData.id}`} className={buttonVariants({ variant: "outline" }) + " flex flex-col items-start h-fit p-4 gap-2! rounded-xl"}>
        <h3>{classData.name}</h3>
        <div className="flex gap-4 items-center text-sm text-muted-foreground">
          <Category name="Location" value={classData.location} icon={<MapPinned size={16} />} />
          <Category name="Curriculum" value={curriculum?.name} icon={<Notebook size={16} />} />
          <Category name="Level" value={curriculum?.level} icon={<BarChart size={16} />} />
          <Category name="Period" value={classData.period} icon={<Calendar size={16} />} />
        </div>
      </Link>
    </div>
  );
};

export default ClassCard;
