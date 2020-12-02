import React, { useState, useEffect } from 'react';

export const HookLearning = () => {
   const [notes, setNotes] = useState([]);
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');

   useEffect(() => {
      const notesData = JSON.parse(localStorage.getItem('notes3'));
      setNotes(notesData || []);
   }, []);

   useEffect(() => {
      localStorage.setItem("notes3", JSON.stringify(notes));
   }, [JSON.stringify(notes)])

   const setTitleText = (e) => {
      setTitle(e.target.value);
   }

   const setBodyText = (e) => {
      setBody(e.target.value);
   }


   const addNote = (e) => {
      e.preventDefault();
      setNotes([
         ...notes,
         {
            title,
            body
         }
      ]);
      setTitle("");
      setBody("");
   }

   const removeNote = (title) => {
      setNotes(notes.filter(note => note.title !== title));
   }

   return (
      <div>
         <h1>Notes</h1>
         {notes.map(note => (
            <Note key={note.title} note={note} removeNote={removeNote} />
         ))}
         <p>Add note</p>
         <form onSubmit={addNote}>
            <input type="text" value={title} onChange={setTitleText}/>
            <input type="text" value={body} onChange={setBodyText}/>
            <button>add note</button>
         </form>
      </div>
   );
};

const Note = ({ note, removeNote }) => {
   useEffect(() => {
      console.log('useEffect Note');

      return () => {
         console.log('Cleaning up effect!')
      }
   }, [])

   return (
      <div>
         <h3>{note.title}</h3>
         <p>{note.body}</p>
         <button onClick={() => removeNote(note.title)}>x</button>
      </div>
   )
}

// export const HookLearning = (props) => {
//    const [count, setCount] = useState(props.count)
//    const [text, setText] = useState('');

//    useEffect(() => {
//       console.log('run once');
//    }, []);

//    useEffect(() => {
//       console.log('useeffect ran');
//       document.title = count;
//    }, [text]);

//    const increment = () => {
//       setCount(count + 1);
//    };

//    const decrement = () => {
//       setCount(count - 1);
//    };

//    const reset = () => {
//       setCount(0);
//    };

//    const changeText = (e) => {
//       setText(e.target.value);
//    }

//    return (
//       <div>
//             <input type="text" value={text} onChange={changeText} /><br/>
//             <p>the current {text || 'count'}  is {count}</p>
//             <button onClick={increment}>+1</button>
//             <button onClick={decrement}>-1</button>
//             <button onClick={reset}>reset</button>
            
//       </div>
//    )
// };

HookLearning.defaultProps = {
   count: 0
};

export default HookLearning;