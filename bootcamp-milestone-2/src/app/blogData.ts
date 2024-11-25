export type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

//list of blogs
const blogs: Blog[] = [
  {
    title: "Learning TypeScript",
    date: "10/20/2024",
    description:
      "This is my first blog ever. I am in the process of completing Milestone 1 for the Hack4Impact bootcamp. To do that, I am learning how to use TypeScript, which will make me a better software developer and improve my ability to code within a team.",
    image: "/typescript.png",
    imageAlt: "picture of TypeScript logo",
    slug: "learning"
  },
  {
    title: "Studying for my STAT 350 midterm",
    date: "10/20/2024",
    description:
      "On Monday, I have my second STAT 350 midterm. I am trying to be as efficient as possible with all my work tonight, so I can have enough time to effectively study for it tomorrow. I did well on my first midterm, so now it's time to do it again.",
    image: "/statstextbook.jpeg",
    imageAlt: "picture of my STAT 350 textbook",
    slug: "midterm"
  }
];

export default blogs;
