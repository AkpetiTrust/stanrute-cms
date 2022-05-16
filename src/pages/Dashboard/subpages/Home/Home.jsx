import React, { useState } from "react";
import style from "./index.module.css";
import { TabButton, PublishedCourses, Drafts, Editor } from "./components";
import { CategoryBar } from "../../../../components";

function Home() {
  const [activeTab, setActiveTab] = useState("Course posts");
  const [editorShown, setEditorShown] = useState(false);

  return (
    <section className={style.home}>
      <CategoryBar
        showButton
        onClick={() => {
          setEditorShown(true);
        }}
      />
      <div className={style.btn_group}>
        <TabButton
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H10.586C11.1164 2.00011 11.625 2.2109 12 2.586L15.414 6C15.7891 6.37499 15.9999 6.88361 16 7.414V16C16 16.5304 15.7893 17.0391 15.4142 17.4142C15.0391 17.7893 14.5304 18 14 18H6C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16V4ZM6 10C6 9.73478 6.10536 9.48043 6.29289 9.29289C6.48043 9.10536 6.73478 9 7 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10C14 10.2652 13.8946 10.5196 13.7071 10.7071C13.5196 10.8946 13.2652 11 13 11H7C6.73478 11 6.48043 10.8946 6.29289 10.7071C6.10536 10.5196 6 10.2652 6 10ZM7 13C6.73478 13 6.48043 13.1054 6.29289 13.2929C6.10536 13.4804 6 13.7348 6 14C6 14.2652 6.10536 14.5196 6.29289 14.7071C6.48043 14.8946 6.73478 15 7 15H13C13.2652 15 13.5196 14.8946 13.7071 14.7071C13.8946 14.5196 14 14.2652 14 14C14 13.7348 13.8946 13.4804 13.7071 13.2929C13.5196 13.1054 13.2652 13 13 13H7Z"
                fill="white"
              />
            </svg>
          }
          name={"Course posts"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabButton
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.586 3.58598C13.7705 3.39496 13.9912 3.24259 14.2352 3.13778C14.4792 3.03296 14.7416 2.97779 15.0072 2.97548C15.2728 2.97317 15.5361 3.02377 15.7819 3.12434C16.0277 3.2249 16.251 3.3734 16.4388 3.56119C16.6266 3.74897 16.7751 3.97228 16.8756 4.21807C16.9762 4.46386 17.0268 4.72722 17.0245 4.99278C17.0222 5.25834 16.967 5.52078 16.8622 5.76479C16.7574 6.0088 16.605 6.22949 16.414 6.41398L15.621 7.20698L12.793 4.37898L13.586 3.58598ZM11.379 5.79298L3 14.172V17H5.828L14.208 8.62098L11.378 5.79298H11.379Z"
                fill="#808080"
              />
            </svg>
          }
          name={"Draft"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      {activeTab === "Course posts" ? (
        <PublishedCourses setEditorShown={setEditorShown} />
      ) : (
        <Drafts setEditorShown={setEditorShown} />
      )}
      {editorShown && <Editor setEditorShown={setEditorShown} />}
    </section>
  );
}

export default Home;
