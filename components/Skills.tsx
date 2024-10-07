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
            TypeScript, JavaScript, HTML, CSS, React, React Native, NodeJS,
            Docker, Tailwind CSS
          </p>
          <ParagraphHeader>Libraries and Technologies</ParagraphHeader>
          <p className="">
            MongDB, GraphQL, React Query, OAuth 2.0, Apollo Client, Bluetooth,
            Hasura, Redux, Google Maps, Styled Components, PostgreSQL, Git,
            Jira, Google Cloud Platform, NHost, SerenityJS, Playwright, Jest,
            Google Cloud Platform, XCode, Android Studio
          </p>
        </div>
        <Well>
          <div className="text-center">
            <h3 className="mb-5">My Resume</h3>
            <div className="">
              <a href="/Taylor%20Flagg%20Resume.pdf">
                <div className="text-7xl mx-auto w-fit">
                  <ImFilePdf />
                </div>
                <div>
                  <p className="text-lg link">View my resume</p>
                </div>
              </a>
            </div>
          </div>
        </Well>
      </div>
    </div>
  );
}
