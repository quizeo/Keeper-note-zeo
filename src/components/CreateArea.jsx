import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState("");
  const [textArea, setTextArea] = useState("");

  function handeInputChange(event) {
    const { name, value } = event.target;
    if (name === "title") {
      setInput(value);
    } else if (name === "content") {
      setTextArea(value);
    }
    console.log(name);
    console.log(value);
  }

  return (
    <div>
      <form>
        <input
          onChange={handeInputChange}
          name="title"
          value={input}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={textArea}
          placeholder="Take a note..."
          rows="3"
          onChange={handeInputChange}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.onSumbit(input, textArea);
            setInput("");
            setTextArea("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
