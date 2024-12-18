import Port from "@/components/Portfolio/portfolio";
import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema";

async function getProjects() {
  await connectDB();

  try {
    const projects = await ProjectModel.find().orFail();
    return projects;
  } catch (err) {
    return null;
  }
}

export default async function Portfolio() {
  const projects = await getProjects();

  return (
    <main>
      <h1 className="page-title">Blogs</h1>
      {projects && projects.length > 0 ? (
        projects.map((project) => <Port key={project._id} {...project} />)
      ) : (
        <p>No projects available at the moment. Please check back later!</p>
      )}
    </main>
  );
}
