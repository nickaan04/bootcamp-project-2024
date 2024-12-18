import mongoose, { Schema } from "mongoose";

export type Project = {
  name: string;
  slug: string;
  description: string;
  image: string;
  image_alt: string;
};

const projectSchema = new Schema<Project>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    image_alt: { type: String, required: true }
  },
  { collection: "projects" }
);

const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
