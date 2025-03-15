import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([
    {
      title: "lets Rock",
      content: "Rock n' Roll",
    },
    {
      title: "Embrace the Process",
      content: " Growth takes time. Don't rush the journey—every challenge teaches you something valuable. Stay patient, keep learning, and trust yourself.",
    },
    {
      title: "Stay Focused",
      content: " Small steps lead to big progress. Stay consistent and keep going!",
    },
    {
      title: "Keep Moving Forward",
      content: "Setbacks are part of the process. Learn from mistakes, adjust your approach, and keep pushing. Progress, no matter how small, is still progress.",
    },
  ]);

  function onSubmit(input, textArea) {
    setNote((prevValue) => {
      return [...prevValue, { title: input, content: textArea }];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onSumbit={onSubmit} />
      {note.map((notes, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={notes.title}
            content={notes.content}
            note={note}
            setNote={setNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
