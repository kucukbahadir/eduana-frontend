import { buttonVariants } from "@/components/ui/button";
import { MoveDown } from "lucide-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className={"flex flex-col items-center text-center m-auto"}>
      <h1 className="text-5xl mb-4">404</h1>
      <span>It seems the page you are looking for doesn't exist...</span>
      <span>Would you like to go back home?</span>
      <MoveDown className="mt-4 mb-[-0.5rem] animate-bounce" />
      <Link to="/" class={buttonVariants({ variant: "link" }) + " text-md!"}>
        Yes, please!
      </Link>
    </div>
  );
};

export default NotFound;
