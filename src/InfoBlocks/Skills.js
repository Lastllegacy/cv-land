import SectionHeader from "../UI/SectionHeader";

function Skills({ block, list }) {
  return (
    <div className={block}>
      <SectionHeader header="Tech Stack" />
      <div className={list}>
        <ul>
          <li> HTML5, CSS3</li>
          <li> Javascript, ES5+ </li>
          <li> React, hooks </li>
          <li> NPM </li>
          <li> Git, Github </li>
          <li> JSON , external APIs</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
