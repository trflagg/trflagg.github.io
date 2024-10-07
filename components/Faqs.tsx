import * as React from "react";
import { FaChevronRight } from "react-icons/fa";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const faqs = [
  {
    question: "What got you into programming?",
    answer: (
      <>
        <p>Simply put: I love making things.</p>
      </>
    ),
  },
  {
    question: "What tools do you use?",
    answer: (
      <>
        <p>NeoVim.</p>
        <p>And tmux, and the Firefox debugger.</p>
        <p>And Flipper, and XCode, and Android Studio.</p>
        <p>And Sketch, and Figma, and Trello, and Github.</p>
        <p>But mostly NeoVim.</p>
      </>
    ),
  },
  {
    question: "Why did you choose to specialize in front-end?",
    answer: (
      <>
        <p>
          I'm a visual person and I love making things beautiful and effective.
        </p>
        <p>
          For whatever reason, it is very satisfying for me to work on things
          that interact directly with the user. I enjoy thinking about the
          user's experience and working to improve it, whether its big things
          like navigation and content organization or little details like margin
          widths and transition lengths.
        </p>
        <p>
          I also love the technology and how it's changed over the years. From
          the early static HTML pages, to AJAX and template systems, to the
          fully reactive single page applications we have now, I love how much
          of a challenge it is to use these new technologies while writing code
          that is readable and maintainable.
        </p>
      </>
    ),
  },
  {
    question: "What are you working on now",
    answer: (
      <>
        <p>
          <b>Wrdie</b> takes up most of my time outside of work.
        </p>
        <p>
          It's an online platform for creating and sharing interactive fiction.
        </p>
        <p>
          The previous version was all typescript with React, NodeJS, and
          MongoDB, but now I'm in the process of rewriting it to use NextJS and
          Hasura and it's going really well. You should ask me about because I
          really enjoy talking about it.
        </p>
      </>
    ),
  },
  {
    question: "Can I hire you?",
    answer: (
      <>
        <p>Sure!</p>
        <p>
          I'm currently looking for full-time remote roles as well as short-term
          or long term-contracts.
        </p>
        <p>
          The easiest way to get in touch is via{" "}
          <a className="link" href="https://www.linkedin.com/in/trflagg/">
            my LinkedIn profile
          </a>
          . Just send me a connection request with some details of what you're
          looking for and I'll get right back to you.
        </p>
      </>
    ),
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="w-full space-y-4">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => {
        const isOpen = index === openIndex;
        return (
          <div key={index} className="w-full">
            <div
              className={classNames(
                "w-full bg-gray-100 p-5 flex justify-between hover:cursor-pointer",
                isOpen ? "rounded-t-lg" : "rounded-lg",
              )}
              onClick={() =>
                !isOpen ? setOpenIndex(index) : setOpenIndex(null)
              }
            >
              <p className="text-md mb-0 font-bold text-gray-700 ">
                {faq.question}
              </p>
              <FaChevronRight
                className={classNames(
                  "transition-all",
                  isOpen ? "rotate-90" : "",
                )}
              />
            </div>
            <div
              className={classNames(
                "px-10 pt-5 border rounded-b-lg",
                isOpen ? "" : "hidden",
              )}
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
