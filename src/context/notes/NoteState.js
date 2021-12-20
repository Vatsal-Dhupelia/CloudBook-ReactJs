import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes  
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiZTUwODdjMmE2ZjdiMzI1MGI0NWJhIn0sImlhdCI6MTYzOTg2MzQ2NH0.aYmhHiJZp_S0UxHgECQLtEH0Jzd6AqqrDlv23FzCHJM"
      },
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

  //Add a Note
  const addNote = async (title, description, tag) => {
    //TODO: API Call
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiZTUwODdjMmE2ZjdiMzI1MGI0NWJhIn0sImlhdCI6MTYzOTg2MzQ2NH0.aYmhHiJZp_S0UxHgECQLtEH0Jzd6AqqrDlv23FzCHJM"
      },
      body: JSON.stringify({title, description, tag})
    });

    console.log("Adding a new Note")
    const note = {
      "_id": "61bf873fe8c490f238faad4e",
      "user": "61be5087c2a6f7b3250b45ba",
      "title": title,
      "description": description,
      "tag": tag,
      "__v": 0
    };
    setNotes(notes.concat(note))
  }

  //Delete a Note
  const deleteNote = (id) => {
    //TODO: API Call
    console.log("Deleted" + id)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiZTUwODdjMmE2ZjdiMzI1MGI0NWJhIn0sImlhdCI6MTYzOTg2MzQ2NH0.aYmhHiJZp_S0UxHgECQLtEH0Jzd6AqqrDlv23FzCHJM"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();

    //Edit Notes Logic
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;