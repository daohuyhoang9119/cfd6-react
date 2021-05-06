import React, { useState } from "react";
import Info from "./components/Info";
import Course from "./components/Course";
import Project from "./components/Project";
import History from "./components/History";
import Coin from "./components/Coin";
import TabTitle from "./components/TabTitle";
import TopInfo from "./components/TopInfo";

function Profile(props) {
  const [tab, setTab] = useState(0);

  function changeTab(e, index) {
    e.preventDefault();
    setTab(index);
  }

  return (
    <main className="profile" id="main">
      <section>
        <TopInfo />
        <div className="container">
          <div className="tab">
            <TabTitle changeTab={changeTab} tab={tab} />
            <div className="tab-content">
              {tab === 0 ? (
                <Info />
              ) : tab === 1 ? (
                <Course />
              ) : tab === 2 ? (
                <Project />
              ) : tab === 3 ? (
                <History />
              ) : (
                <Coin />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
