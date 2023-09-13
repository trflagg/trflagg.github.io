import * as React from "react";
import { ImFilePdf } from "react-icons/im";

import ParagraphHeader from "./ParagraphHeader";
import Well from "./well";

export default function Skills() {
  return (
    <div>
      <h2 className="mb-3">My Skills</h2>
      <div className="lg:flex lg:space-x-10 flex-row">
        <div className="">
          <ParagraphHeader>Languages & Specializations</ParagraphHeader>
          <p>
            TypeScript, JavaScript, HTML, CSS, React, React Native, Tailwind
            CSS, NodeJS
          </p>
          <ParagraphHeader>Libraries and Technologies</ParagraphHeader>
          <p className="">
            MongDB, GraphQL, React Query, Apollo Client, Bluetooth, Hasura,
            Redux, Google Maps, Styled Components, PostgreSQL, Docker, Git,
            Jira, Google Cloud Platform, NHost, SerenityJS, Playwright, Jest,
            Google Cloud Platform, XCode, Android Studio
          </p>
        </div>
        <Well>
          <>
            <h3 className="mb-5">My Resume</h3>
            <div className="flex space-x-4">
              <div className="text-7xl">
                <ImFilePdf />
              </div>
              <div>
                <a href="/resume.html">
                  <p className="text-lg link mb-0">View my resume</p>
                </a>
                <a href="/Taylor%20Flagg%20Resume.pdf">
                  <p className="text-lg link">PDF Version</p>
                </a>
              </div>
            </div>
          </>
        </Well>
      </div>
    </div>
  );
}
