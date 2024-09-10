import { useState } from "react";

import "./form.scss";

const priorityStatus = ["high", "medium", "low"];
const maxWordAllowed = 300;

function Form({ onSubmitList }) {
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");
  const [wordCount, setWordCount] = useState(0);

  function handleText(e) {
    setText(e.target.value);
    setWordCount(e.target.value.length);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (heading.length === 0) {
      alert("Please add the heading for your notes");
      return;
    }

    const newList = {
      id: Date.now(),
      heading,
      text,
      date: Date.now(),
      priority,
      isCompleted: false,
    };

    setHeading("");
    setText("");
    setWordCount(0);

    onSubmitList(newList);
  }

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="headingContainer">
          <label htmlFor="heading">Title</label>
          <input
            className="input-heading"
            id="heading"
            type="text"
            placeholder="Add your task heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>

        <div className="textContainer">
          <label htmlFor="listText">List</label>
          <textarea
            id="listText"
            cols="50"
            rows="5"
            type="text"
            placeholder="Type here..."
            value={text}
            onChange={handleText}
          ></textarea>
        </div>

        {wordCount > maxWordAllowed ? (
          <span className="word-limit limit-exceed">
            Word Limit Exceeded {maxWordAllowed}/{wordCount}
          </span>
        ) : (
          <span className="word-limit">
            Word Limit {maxWordAllowed}/{wordCount}
          </span>
        )}

        <div className="priorityContainer">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            {priorityStatus.map((priority) => {
              return <option value={priority}>{priority} Priority</option>;
            })}
          </select>
        </div>

        <button disabled={wordCount > maxWordAllowed}>
          {wordCount > maxWordAllowed ? "Diabled" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Form;
