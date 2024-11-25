import React from "react";
import style from "./portfolio.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div>
        <div className={style.project}>
          <Link href="/">
            <Image
              className={style.projectImage}
              src="/homepage.png"
              alt="Picture of the home page"
              layout="intrinsic"
              width={600}
              height={500}
            />
          </Link>
          <div className={style.projectDetails}>
            <p className={style.projectName}>
              <strong>Hack4Impact Starter Pack Personal Website</strong>
            </p>
            <p className={style.projectDescription}>
              This is my version of the Hack4Impact Starter Pack, which is a
              step by step guide on getting started with web development and
              understanding what it's like to be a software developer in
              Hack4Impact. I learned the fundamentals of Git, HTML, and CSS, and
              gained new skills to build my very own personal website.
            </p>
            <Link href="/">Learn more</Link>
          </div>
        </div>
    </div>
  );
}
