const DATA_FOR_AUTHOR_NAME = {
  "Taylor Flagg": {
    name: "Taylor Flagg",
    avatarURL: "/CroppedMeAtBadlands.jpeg",
    title: "Creator and programmer of Wrdie",
  },
};

export function authorForName(authorName: string): Author | undefined {
  return DATA_FOR_AUTHOR_NAME[authorName];
}
