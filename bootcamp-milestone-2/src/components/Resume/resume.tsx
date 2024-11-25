import React from "react";
import style from "./resume.module.css";

export default function Resume() {
  return (
    <div className={style.resume}>
      <a className={style.link} href="/Nickaan Jahadi Resume.pdf" download>
        Download Resume
      </a>
      <section className={style.section}>
        <h2 className={style.sectionTitle}>Education</h2>
        <div className={style.entry}>
          <h3 className={style.entryTitle}>
            Bachelor of Science in Computer Engineering
          </h3>
          <p className={style.entryInfo}>
            California Polytechnic State University, San Luis Obispo | Expected
            Graduation June 2026
            <br />
            <strong>GPA: 3.92</strong>
          </p>
        </div>
      </section>
      <section className={style.section}>
        <h2 className={style.sectionTitle}>Coursework</h2>
        <ul className={style.courseList}>
          <li>Data Structures</li>
          <li>Systems Programming</li>
          <li>Microcontrollers and Embedded Applications</li>
          <li>Intro to Software Engineering</li>
          <li>Project-Based Object Oriented Programming and Design</li>
          <li>Computer Architecture</li>
          <li>Computer Design and Assembly Language</li>
          <li>Continuous-Time Signals and Systems</li>
          <li>Electrical and Electronic Circuits Series</li>
          <li>Digital Design</li>
          <li>Discrete Structures</li>
        </ul>
      </section>
      <section className={style.section}>
        <h2 className={style.sectionTitle}>Skills</h2>
        <p className={style.category}>
          <strong>Software</strong>
        </p>
        <ul className={style.skillList}>
          <li>Java</li>
          <li>C</li>
          <li>Python</li>
          <li>HTML/CSS</li>
          <li>Javascript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>REST API</li>
          <li>SystemVerilog/Verilog</li>
          <li>Linux/UNIX</li>
          <li>RISC-V Assembly</li>
          <li>Git</li>
        </ul>
        <p className={style.category}>
          <strong>Hardware</strong>
        </p>
        <ul className={style.skillList}>
          <li>Raspeberry Pi</li>
          <li>Oscilloscope</li>
          <li>FPGA</li>
          <li>Digital Multimeter</li>
          <li>Waveform Generator</li>
          <li>DC Power Supply</li>
        </ul>
        <p className={style.category}>
          <strong>Applications</strong>
        </p>
        <ul className={style.skillList}>
          <li>Xilinx Vivado</li>
          <li>LTspice</li>
          <li>STM32CubeIDE</li>
          <li>Arduino</li>
          <li>Autodesk Inventor</li>
          <li>Autodesk Fusion 360</li>
          <li>Microsoft Office</li>
        </ul>
      </section>
      <section className={style.section}>
        <h2 className={style.sectionTitle}>Projects</h2>
        <div className={style.entry}>
          <h3 className={style.entryTitle}>Raspberry Pi Intelligent Camera</h3>
          <p className={style.entryInfo}>Raspberry Pi | TensorFlow | Python</p>
          <ul className={style.entryDescription}>
            <li>
              Developed an intelligent imaging device, combining Raspberry Pi
              with Vision Bonnet, camera, buzzer, LED, and push-button
              components
            </li>
            <li>
              Implemented TensorFlow machine learning framework to enhance
              camera functionality, facilitating seamless object and facial
              recognition
            </li>
          </ul>
          <h3 className={style.entryTitle}>
            Raspberry Pi Natural Language Processor
          </h3>
          <p className={style.entryInfo}>
            Raspberry Pi | Google Cloud Platform | Python
          </p>
          <ul className={style.entryDescription}>
            <li>
              Assembled an intelligent speaker comprising Raspberry Pi with
              Voice Bonnet and push-button
            </li>
            <li>
              Integrated the Google Assistant API to enable advanced voice
              recognition and natural language processing capabilities
            </li>
          </ul>
          <h3 className={style.entryTitle}>Arduino Glitter Security Package</h3>
          <p className={style.entryInfo}>Autodesk Fusion 360 | Arduino</p>
          <ul className={style.entryDescription}>
            <li>
              Engineered and optimized a package security solution utilizing an
              Arduino Uno microcontroller, 3D-printed components, DC and Servo
              motors, LED/photoresistor technology, and an integrated speaker
            </li>
          </ul>
        </div>
      </section>
      <section className={style.section}>
        <h2 className={style.sectionTitle}>Experience</h2>
        <div className={style.entry}>
          <h3 className={style.entryTitle}>Orientation Leader</h3>
          <p className={style.entryInfo}>
            Cal Poly Slo | San Luis Obispo, CA | April 2023 - Sept. 2023
          </p>
          <ul className={style.entryDescription}>
            <li>
              Completed 3 months of extensive leadership training to perform a
              week long role
            </li>
            <li>
              Guided 20+ incoming freshmen through a dynamic collection of
              activities, events, and programs tailored to engage new students
              with campus life and resources
            </li>
          </ul>
          <h3 className={style.entryTitle}>Warehouse Associate</h3>
          <p className={style.entryInfo}>
            Halo Headband | Poway, CA | May 2022 - Sept. 2022
          </p>
          <ul className={style.entryDescription}>
            <li>
              Processed over 150,000 products through strong collaboration,
              fulfilling multiple orders daily to meet increasing demand
            </li>
            <li>
              Oversaw work environment after promotion, maximizing efficiency
              and organization among self and peers
            </li>
          </ul>
          <h3 className={style.entryTitle}>Front End Associate</h3>
          <p className={style.entryInfo}>
            Walmart | Poway, CA | May 2021 - Nov. 2021
          </p>
          <ul className={style.entryDescription}>
            <li>
              Executed product transactions, operating cash register and
              self-checkout kiosks
            </li>
            <li>
              Coached 30 new team members in register operation and stock
              procedures
            </li>
            <li>
              Collaborated with a team of 15 colleagues for 25+ hours in the
              customer service center to uphold an exceptional reputation of
              satisfying customers
            </li>
          </ul>
        </div>
      </section>
      <section className={style.section}>
        <h2 className={style.sectionTitle}>Honors/Awards</h2>
        <ul className={style.honorsList}>
          <li>
            Member, Computer Engineering Society - Cal Poly | 2022 - Present
          </li>
          <li>President's Honors List (x2) - Cal Poly | 2022 - Present</li>
          <li>Dean's Honors List (x6) - Cal Poly | 2022 - Present</li>
        </ul>
      </section>
    </div>
  );
}
