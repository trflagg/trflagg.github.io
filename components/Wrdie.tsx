import * as React from "react";

import Well from "./well";

export default function Wrdie() {
  return (
    <Well>
      <div className="w-full mb-5">
        <a href="https://wrdie.com">
          <img
            src="/ButtonLogo.svg"
            className="inline object-contain h-[90px]"
          />
        </a>
      </div>
      <div className="lg:flex lg:space-x-7">
        <div>
          <p>
            Wrdie is an online platform for creating and sharing interactive
            stories. It has a drag-and-drop editor that allows anyone to build
            an interactive world without coding. If you can use Google Docs, you
            can make a text adventure.
          </p>
          <p>
            Wrdie is mostly written in <b>TypeScript</b>. It uses <b>React</b>,{" "}
            <b>Tailwind</b>, <b>GraphQL</b>, <b>Hasura</b>, and{" "}
            <b>PostgreSQL</b> among others.
          </p>
          <p>
            <a href="https://wrdie.com">https://wrdie.com</a>
          </p>
        </div>
      </div>
    </Well>
  );
}
