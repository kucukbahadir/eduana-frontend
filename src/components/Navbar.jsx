import { Link } from "react-router";
import { Input } from "./ui/input";
import { Bell, Blocks, Menu, Moon, Search } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="py-1.5 border-b bg-background w-full">
      <div className="flex justify-between items-center mx-auto px-5">
        <div className="flex gap-1.5">
          <Button size={"icon"} variant={"ghost"}><Menu /></Button>
          <Link to="/" className={buttonVariants({ variant: "link" })}>
            Home
          </Link>
          {/* <Link to="/login" className={buttonVariants({ variant: "link" })}>
            Login
          </Link> */}
          <Link to="/classes" className={buttonVariants({ variant: "link" })}>
            Classes
          </Link>
        </div>
        <div className="flex items-center gap-0">
          <Input icon={Search} placeholder="Search" wrapperClassName={"hidden lg:block mr-2"} className={"h-11"} />
          <Button size={"icon"} variant={"ghost"} className={"flex lg:hidden shadow-transparent"}>
            <Search />
          </Button>
          <Link to="/notifications" className={buttonVariants({ variant: "ghost", size: "icon" }) + " shadow-transparent"}>
            <Bell />
          </Link>
          <Button size={"icon"} variant={"ghost"} className={"shadow-transparent"}>
            <Blocks />
          </Button>
          <Button size={"icon"} variant={"ghost"} className={"shadow-transparent"}>
            <Moon />
          </Button>
          <img
            className="aspect-square size-11 ml-2 rounded-md"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
