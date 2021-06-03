import { useContext } from "react";
import { GithubContext } from "./GithubContext";

const Form = () => {
  const { search, setSearch, getSearch } = useContext(GithubContext);
  return (
    <form onSubmit={getSearch}>
      <input
        type="text" // eslint-disable-next-line
        autoFocus
        placeholder="Search for a Github User"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Form;
