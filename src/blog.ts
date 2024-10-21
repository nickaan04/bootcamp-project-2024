type Blog = {
    title: string,
    date: string,
    description: string,
    image: string,
    imageAlt: string,
    slug: string
}

//list of blogs
const blogs: Blog[] = [
    {
        title: "Learning TypeScript",
        date: "10/20/2024",
        description: "This is my first blog ever. I am in the process of completing Milestone 1 for the Hack4Impact bootcamp. To do that, I am learning how to use TypeScript, which will make me a better software developer and improve my ability to code within a team.",
        image: "./images/typescript.png",
        imageAlt: "picture of TypeScript logo",
        slug: "learning-typescript"
    },
    {
        title: "Studying for my STAT 350 midterm",
        date: "10/20/2024",
        description: "On Monday, I have my second STAT 350 midterm. I am trying to be as efficient as possible with all my work tonight, so I can have enough time to effectively study for it tomorrow. I did well on my first midterm, so now it's time to do it again.",
        image: "./images/statstextbook.png",
        imageAlt: "picture of my STAT 350 textbook",
        slug: "studying-for-my-stat-350-midterm"
    }
]

const blogPosts = document.getElementById('blog-posts');

if (blogPosts) {
    blogs.forEach(blog => {
        //create the blog container div
        const blogDiv = document.createElement('div');
        blogDiv.classList.add('blog-post'); //add a class

        //create the title element (h1)
        const titleElement = document.createElement('h1');
        titleElement.textContent = blog.title;
        titleElement.classList.add('blog-title');

        //create the image element (img)
        const imgElement = document.createElement('img');
        imgElement.src = blog.image;
        imgElement.alt = blog.imageAlt;
        imgElement.classList.add('blog-image');

        //create the description element (p)
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = blog.description;
        descriptionElement.classList.add("blog-description");

        //append the title, image, and description to the blogDiv
        blogDiv.appendChild(titleElement);
        blogDiv.appendChild(imgElement);
        blogDiv.appendChild(descriptionElement);

        //append the blogDiv to the main blog container
        blogPosts.appendChild(blogDiv);
    });
} else {
    console.error("Blog container element not found");
}