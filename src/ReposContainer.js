import { Route } from "react-router-dom";
import Overview from "./Overview";
import Repos from "./Repos";
import Followers from "./Followers";

const ReposContainer = () => {
  return (
    <div className="reposContainer">
      <Route path="/overview" component={Overview} />
      <Route path="/repositories" component={Repos} />
      <Route path="/followers" component={Followers} />
    </div>
  );
};

export default ReposContainer;
