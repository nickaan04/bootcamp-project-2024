import React from "react";
import type { Blog } from "../../app/blogData";
import Image from "next/image";
import style from "./blogPreview.module.css";

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.blogContainer}>
      <div className={style.blogPost}>
        <h3 className={style.blogTitle}> {props.title} </h3>
        <div className={style.blogContent}>
          <Image
            className={style.blogImage}
            src={props.image}
            alt={props.imageAlt}
            layout="intrinsic"
            width={400}
            height={500} />
          <p className={style.blogDescription}>{props.description}</p>
          <p className={style.blogDate}>{props.date}</p>
        </div>
      </div>
    </div>
  );
}
