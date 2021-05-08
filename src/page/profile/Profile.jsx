import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import Info from "./components/Info";
import Course from "./components/Course";
import Project from "./components/Project";
import History from "./components/History";
import Coin from "./components/Coin";
import TabTitle from "./components/TabTitle";
import TopInfo from "./components/TopInfo";

function Profile() {
  let { path } = useRouteMatch();

  // let check = true;

  // check && <Redirect path="/" />;

  return (
    <main className="profile" id="main">
      <section>
        <TopInfo />
        <div className="container">
          <div className="tab">
            <TabTitle path={path} />
            <div className="tab-content">
              <Switch>
                <Route path={`${path}/course`} component={Course} />
                <Route path={`${path}/project`} component={Project} />
                <Route path={`${path}/history`} component={History} />
                <Route path={`${path}/coin`} component={Coin} />
                <Route component={Info} />
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
