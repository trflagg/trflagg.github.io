import * as React from "react";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
TimeAgo.addDefaultLocale(en);

import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import PostCard from "../components/PostCard";
import { getAllPosts } from "../utils/posts";

import BannerWithImage from "../components/BannerWithImage";
import Wrdie from "../components/Wrdie";
import Blog from "../components/Blog";
import Skills from "../components/Skills";
import Faqs from "../components/Faqs";
import Instagram from "../components/instagram";
import StuffIMake from "../components/StuffIMake";

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

interface OwnProps {
  posts?: Post[];
}

const InBetweenText = ({ children }) => (
  <p className="text-lg mb-20 font-medium">{children}</p>
);

const Section = ({ children }) => <div className="mb-20">{children}</div>;

export default function Home({ posts }: OwnProps) {
  return (
    <div>
      <BannerWithImage />
      <main className="max-w-6xl min-w-6xl my-7 mx-auto px-5">
        <div className="mb-20">
          <h2>Hi! I'm Taylor.</h2>
          <p>I'm a programmer and I make things.</p>
        </div>

        <h2 className="mb-3">Stuff I've made</h2>

        <Section>
          <Wrdie />
        </Section>

        <Section>
          <StuffIMake />
        </Section>

        <Section>
          <Skills />
        </Section>

        <Section>
          <Faqs />
        </Section>

        <Section>
          <Instagram />
        </Section>
      </main>
    </div>
  );
}
