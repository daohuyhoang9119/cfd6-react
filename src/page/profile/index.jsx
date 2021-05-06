import React, { useState } from "react";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";
import Tab4 from "./components/Tab4";
import Tab5 from "./components/Tab5";
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
                <Tab1 />
              ) : tab === 1 ? (
                <Tab2 />
              ) : tab === 2 ? (
                <Tab3 />
              ) : tab === 3 ? (
                <Tab4 />
              ) : (
                <Tab5 />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
