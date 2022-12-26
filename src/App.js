import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First Note!",
      date: "21/12/2022",
    },
    {
      id: nanoid(),
      text: "Second Note!",
      date: "22/12/2022",
    },
    {
      id: nanoid(),
      text: "Third Note!",
      date: "23/12/2022",
    },
    {
      id: nanoid(),
      text: "Fourth Note!",
      date: "24/12/2022",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() =>{
    const savedNotes = JSON.parse(localStorage.getItem('sticky_notes-data'));

    if(savedNotes){
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() =>{
    localStorage.setItem('sticky_notes-data', JSON.stringify(notes));
  }, [notes]);

  function addNote(text) {
    const newNote = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  function deleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`App ${darkMode ? "dark-mode":""}`}>
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText.toLowerCase())
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
