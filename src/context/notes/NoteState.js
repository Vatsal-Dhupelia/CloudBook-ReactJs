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

    
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;