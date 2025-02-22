import { Link } from "react-router";
import { Input } from "./ui/input";
import { Bell, Blocks, Moon, Search } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="p-1.5 border-b bg-background w-full">
      <div className="flex justify-between items-center mx-auto max-w-6xl">
        <div className="flex">
          <Link to="/" className={buttonVariants({ variant: "link" })}>
            Home
          </Link>
          <Link to="/login" className={buttonVariants({ variant: "link" })}>
            Login
          </Link>
        </div>
        <div className="flex items-center gap-1.5">
          <Input icon={Search} className={"max-w-96 text-sm shadow-none"} placeholder="Search" />
          <Link to="/notifications" className={buttonVariants({ variant: "outline", size: "icon" }) + " shadow-transparent"}>
            <Bell />
          </Link>
          <Button size={"icon"} variant={"outline"} className={"shadow-transparent"}>
            <Blocks />
          </Button>
          <Button size={"icon"} variant={"outline"} className={"shadow-transparent"}>
            <Moon />
          </Button>
          <img
            className="aspect-square size-11 rounded-md"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
