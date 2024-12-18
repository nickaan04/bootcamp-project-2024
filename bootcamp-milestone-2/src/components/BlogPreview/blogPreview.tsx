import React from "react";
import type { Blog } from "../../database/blogSchema";
import Image from "next/image";
import style from "./blogPreview.module.css";

export default function BlogPreview(props: Blog) {
  //format the date
  const formattedDate = new Date(props.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className={style.blogContainer}>
      <div className={style.blogPost}>
        <h3 className={style.blogTitle}> {props.title} </h3>
        <div className={style.blogContent}>
          <Image
            className={style.blogImage}
            src={props.image}
            alt={props.image_alt}
            layout="responsive"
            width={400}
            height={500}
          />
          <p className={style.blogDescription}>{props.description}</p>
          <p className={style.blogDate}>{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}
