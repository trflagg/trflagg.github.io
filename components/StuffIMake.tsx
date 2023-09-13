import * as React from "react";
import ParagraphHeader from "./ParagraphHeader";
import Well from "./well";

const StuffIMake = () => {
  return (
    <div>
      <h2 className="mb-3">Stuff I've made</h2>
      <ParagraphHeader>A loyalty app for a major New York hotel chain.</ParagraphHeader>
      <p>
        Arlo hotels needed a way for its best customers to get rewarded for their stays and for enticing others to stay with them. I was the main engineer on the front-end side, putting together a <b>React Native</b> app from scratch that tracked referrals, stays, and points. I also used <b>React-admin</b> and the <b>MUI library</b> to build an administration dashboard that let them invite and approve users, modify their property data, redeem credits, and more. The app and admin site were both made with <b>TypeScript</b>. The back-end was made with <b>Ruby on Rails</b> and we used <b>React Query</b> to manage the communication.
      </p>
      <ParagraphHeader>An e-commerce app for a rapid delivery startup.</ParagraphHeader>
      <p>FASTAF wanted to get its products to its customers in two hours or less and I helped the build the app to do it. We were a small team, but we put together a <b>React Native</b> app that presented hundreds of products to our thousands of users. The app had all of the usual e-commerce features (browse by category, previous orders, quick add to shopping bag) but when you checked out, you picked a delivery window for the very same day and we tracked the delivery person as they left the warehouse and drove to your door. Some of the tech we used included <b>TypeScript</b> along with <b>styled-components</b>, <b>Algolia</b>, <b>Google Maps</b>, <b>Ruby on Rails</b>, and <b>React Query</b>.
      </p>
      <ParagraphHeader>An app for managing a fleet of scooters.</ParagraphHeader>
      <p>
        You know those electric scooters you see on city sidewalks? The kind where you scan a QR code and rent for a few minutes while you zoom off to that business meeting or whatever? Well, turns out that every night the company that manages them needs to find and collect every one of them, charge them, and then redestribute them in the morning. It also turns out that the existing tools to manage this process were awful, and it was Zagster's idea to optimize everything with a <b>React Native</b> fleet management app. I was the senior engineer on the project and my co-workers and I used <b>Google maps</b> to map all of the scooters in the city, <b>NodeJS</b> and <b>MongoDB</b> to track their locations and charge levels, and <b>GraphQL</b> and <b>React Query</b> to handle to communications.
      </p>
      <p>Oh yeah, and before that I was a senior engineer on Zagster's bike sharing <b>React Native</b> app (also known as Pace bikes).  We used <b>NodeJS</b> and <b>MongoDB</b> to store the locations of thousands of bikes in a hundred different cities, <b>Redux</b> to handle the data on the front-end, <b>Google Maps</b> to show them to the user, and <b>Bluetooth</b> to let the phones talk to the bike locks and open them up. Together we were able to offer a dockless bike rental service to thousands of users in cities all across the US.</p>

      <ParagraphHeader>And then there's my sideproject Wrdie...</ParagraphHeader>
      <p>For <i>years</i> I've been working by myself on a no-code web platform that lets you build your own text adventures. It's called <a className="link">Wrdie</a> it's written entirely in <b>TypeScript</b> with <b>React</b>, <b>TailwindCSS</b>, and <b>Hasura</b>. Does that sound cool? Well there's <a className="link">a whole section on it below</a>.</p>

      <Well>
        <ParagraphHeader>But that's not all!</ParagraphHeader>
        <p>I've also worked on software for video advertising, healthcare systems, and more!
        </p>
        <p>If you want to see all that I've done, check out my <a className="link" href="/resume.html">complete resume</a>.</p>
      </Well>
    </div>
  )
}

export default StuffIMake;
