import { Link } from "react-router";

const NoPage = () => {
  return (
    <div className={"flex flex-col max-w-5xl mx-auto"}>
      <h1 className={"font-bold text-4xl"}>404</h1>
      <p>
        The page you are looking for does not exist. Would you like to 
        <Link to="/" class={"rounded-lg font-bold underline-offset-4 hover:underline ms-1.5"}>
          go back home
        </Link>
        ?
      </p>
    </div>
  );
};

export default NoPage;
