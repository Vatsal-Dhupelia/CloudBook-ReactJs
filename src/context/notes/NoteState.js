import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
      {
        "_id": "61bf873fe8c490f238faad4e",
        "user": "61be5087c2a6f7b3250b45ba",
        "title": "My Title",
        "description": "Hello World",
        "tag": "personal",
        "__v": 0
      },
      {
        "_id": "61bf873fe8c490f238faad4e",
        "user": "61be5087c2a6f7b3250b45ba",
        "title": "My Title",
        "description": "Hello World",
        "tag": "personal",
        "__v": 0
      },
      {
        "_id": "61bf873fe8c490f238faad4e",
        "user": "61be5087c2a6f7b3250b45ba",
        "title": "My Title",
        "description": "Hello World",
        "tag": "personal",
        "__v": 0
      }

    ]

      const [notes, setNotes] = useState(notesInitial)

      //Add a Note
      const addNote = (title, description, tag) =>{
        //TODO: API Call
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
      const deleteNote = (id) =>{
        //TODO: API Call
        console.log("Deleted" + id)
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }

      //Edit a Note
      const editNote = (id, title, description, tag) =>{
        
      }
    
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;