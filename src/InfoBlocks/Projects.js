import SectionHeader from "../UI/SectionHeader";

function Projects({ block, list, tags }) {
  return (
    <div className={block}>
      <SectionHeader header="Projects" />
      <div className={list}>
        <ol>
          <li>
            <p>
              "Cat-Pinterest":{" "}
              <a href="https://lastllegacy.github.io/frontend-trainee/">
                https://lastllegacy.github.io/frontend-trainee/
              </a>{" "}
              (Link to project)
              <p> 
              <a href="https://github.com/Lastllegacy/frontend-trainee">
                https://github.com/Lastllegacy/frontend-trainee
              </a>
              {" "}
              (Source-code)
              </p>
            </p>
              <p>
                In this project i learnt how to work with external api using fetch and load content using react and react-hooks.
              </p>
              <p className={tags}>
                 HTML, CSS, Javascript, Json, Open Api, React, React-hooks, Webpack
              </p>
          </li>
          <li>
          <p>
              "Sign-up form":{" "}
              <a href="https://lastllegacy.github.io/Frontend-task/">
              https://lastllegacy.github.io/Frontend-task/
              </a>{" "}
              (Link to project)
              <p> 
              <a href="https://github.com/Lastllegacy/Frontend-task">
              https://github.com/Lastllegacy/Frontend-task
              </a>
              {" "}
              (Source-code)
              </p>
            </p>
              <p>
                 By doing this page sign-up, i learnt how to work with form and validation, also how to make adaptive and responsive design
              </p>
              <p className={tags}>
                 HTML, CSS, Javascript, Json Api, async
              </p>
          </li>
          <li>
          <p>
              "Superfood-helper":{" "}
              <a href="https://github.com/Lastllegacy/Frontend-task">
              https://github.com/Lastllegacy/Frontend-task
              </a>
              {" "}
              (Only Source-code)
            </p>
              <p>
                 This is the project that i'm currently working on, im learning here deeper react. It's not done yet (but you can view the source code)
              </p>
              <p className={tags}>
                 HTML, CSS, Javascript, Json Api, async, React, React Hooks
              </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Projects;
