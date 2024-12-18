import React from "react";
import style from "./contact.module.css";

export default function Contact() {
  return (
    <form id="contact-form" className={style.contactForm}>
      <label htmlFor="name" className={style.label}>
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        required
        className={style.input}
      />

      <label htmlFor="email" className={style.label}>
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        required
        className={style.input}
      />

      <label htmlFor="message" className={style.label}>
        Message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        required
        className={style.textarea}
      />

      <input type="submit" value="Submit" className={style.submitButton} />
    </form>
  );
}
