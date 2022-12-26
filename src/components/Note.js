import { MdDeleteForever } from "react-icons/md";

function Note({ note, handleDeleteNote }) {
  function deleteNote(event) {
    handleDeleteNote(note.id);
  }

  return (
    <div className="note">
      <span>{note.text}</span>
      <div className="note-footer">
        <small>{note.date}</small>
        <MdDeleteForever
          className="delete-icon"
          onMouseOver={({ target }) => (target.style.color = "red")}
          onMouseOut={({ target }) => (target.style.color = "black")}
          size="1.3em"
          
          onClick={deleteNote}
        />
      </div>
    </div>
  );
}

export default Note;
