import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let readTime = "";
  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    readTime = "☕️".repeat(cups);
  } else {
    const boxes = Math.ceil(minutes / 10);
    readTime = "🍱".repeat(boxes);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {readTime} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
