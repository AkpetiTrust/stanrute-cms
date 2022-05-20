import React, { useState } from "react";
import style from "./index.module.css";
import { Number, Table } from "./components";

function Analytics() {
  const [viewsInSevenDays, setViewsInSevenDays] = useState(20);
  const [viewsInThirtyDays, setViewsInThirtyDays] = useState(74);
  const [learnersInSevenDays, setLearnersInSevenDays] = useState(5);
  const [learnersInThirtyDays, setLearnersInThirtyDays] = useState(25);
  const [courseStats, setCourseStats] = useState([
    {
      title: "Crypto Terminologies",
      published: "25/8/2022",
      views: 4,
      graduates: 10,
    },
    {
      title: "Crypto Terminologies",
      published: "25/8/2022",
      views: 4,
      graduates: 10,
    },
    {
      title: "Crypto Terminologies",
      published: "25/8/2022",
      views: 4,
      graduates: 10,
    },
    {
      title: "Crypto Terminologies",
      published: "25/8/2022",
      views: 4,
      graduates: 10,
    },
    {
      title: "Crypto Terminologies",
      published: "25/8/2022",
      views: 4,
      graduates: 10,
    },
  ]);

  return (
    <div className={style.analytics}>
      <p className={style.title}>Analytics</p>
      <div className={style.inner}>
        <div className={style.grid}>
          <div>
            <p className={style.subtitle}>Views</p>
            <p className={style.text}>
              This is the number of page visits (both consistent visits and one
              time visits)
            </p>
            <div className={style.subgrid}>
              <Number
                caption={"No of views (7 days)"}
                color="#00CC75"
                number={viewsInSevenDays}
              />
              <Number
                caption={"No of views (30 days)"}
                color="#00CC75"
                number={viewsInThirtyDays}
              />
            </div>
          </div>
          <div>
            <p className={style.subtitle}>Learners</p>
            <p className={style.text}>
              This is the number of consistent visits and course takers
            </p>
            <div className={style.subgrid}>
              <Number
                caption={"No of learners (7 days)"}
                color="#FFC01E"
                number={learnersInSevenDays}
              />
              <Number
                caption={"No of learners (30 days)"}
                color="#FFC01E"
                number={learnersInThirtyDays}
              />
            </div>
          </div>
          <div></div>
        </div>

        <div className={style.course_stats}>
          <p className={style.title}>Course Stats</p>
          <Table courseStats={courseStats} />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
