import React from "react";
import BigBanner from "./components/BigBanner";
import SmallBanner from "./components/SmallBanner";

function index() {
  return (
    <main className="team" id="main">
      <section>
        <div className="container">
          <div className="top">
            <h2 className="main-title">cfd team</h2>
            <p className="top-des">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam
              tincidunt elementum sem non luctus
            </p>
          </div>
          <div className="list row">
            <BigBanner
              name="trần nghĩa"
              info="Founder &amp; Creative Front-End Developer"
            />
            <BigBanner
              name="đặng thuyền vương"
              info="Co-Founder &amp; Fullstack Developer"
            />
            <BigBanner
              name="đặng thuyền quân"
              info="Co-Founder &amp; Back-End Developer"
            />
            <BigBanner
              name="nguyễn đức huy"
              info="Founder &amp; Front-End Developer"
            />
            <SmallBanner student_name="Diệp anh thy" course="CFD1-Offline" />
            <SmallBanner student_name="Diệp anh thy" course="CFD1-Offline" />
            <SmallBanner student_name="Diệp anh thy" course="CFD1-Offline" />
            <SmallBanner student_name="Diệp anh thy" course="CFD1-Offline" />
            <SmallBanner student_name="Diệp anh thy" course="CFD1-Offline" />
            <SmallBanner student_name="Diệp anh thy" course="CFD1-Offline" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default index;
