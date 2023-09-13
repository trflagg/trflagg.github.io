import * as React from "react";
import Image from "next/image";

export const PostHeader = (author: Author) => (
  <address className="flex items-center mb-8 not-italic">
    <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
      {author?.avatarURL && (
        <div className="mr-5 w-16 h-16 relative">
          <Image
            unoptimized
            layout="fill"
            className="mr-4 w-16 h-16 rounded-full"
            src={author?.avatarURL}
            alt="avatar"
          />
        </div>
      )}
      <div>
        <a
          href="#"
          rel="author"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          {author?.name}
        </a>
        <p className="text-base font-light text-gray-500 dark:text-gray-400">
          {author?.title}
        </p>
      </div>
    </div>
  </address>
);
