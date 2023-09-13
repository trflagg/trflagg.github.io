type Category = "Ingrastructure" | "React";

interface Post {
  slug?: string;
  title?: string;
  author?: string;
  category?: Category;
  date?: string;
  excerpt?: string;
  content?: string;
  link?: string;
  imageUrl?: string;
}

interface Author {
  name?: string;
  avatarURL?: string;
  title?: string;
}
