import { useState } from "react";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  function handleChange(event) {
    if (event.target.value.length <= characterLimit) {
      setNoteText(event.target.value);
    }
  }

  function handleSaveClick() {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
    }
    setNoteText("");
  }

  return (
    <div className="note new-note">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add new note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="button" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
