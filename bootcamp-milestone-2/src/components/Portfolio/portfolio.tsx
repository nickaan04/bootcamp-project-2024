import React from "react";
import style from "./portfolio.module.css";
import Image from "next/image";
import type { Project } from "../../database/projectSchema";

export default function Portfolio(props: Project) {
  return (
    <div>
      <div className={style.project}>
        <Image
          className={style.projectImage}
          src={props.image}
          alt={props.image_alt}
          layout="responsive"
          width={600}
          height={500}
        />
        <div className={style.projectDetails}>
          <p className={style.projectName}>
            <strong>{props.name}</strong>
          </p>
          <p className={style.projectDescription}>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
