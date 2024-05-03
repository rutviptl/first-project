import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const App = () => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addNote = () => {
    if (inputValue.trim() !== '') {
      const newNote = {
        id: Date.now(),
        text: inputValue,
        timestamp: new Date().toLocaleString() // Timestamp
      };
      setNotes([...notes, newNote]);
      setInputValue('');
    }
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Simple Note App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Write your note..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <div className="notes-container">
        {notes.map(note => (
          <div key={note.id} className="note">
            <p>{note.text}</p>
            <p className="timestamp">Created at: {note.timestamp}</p>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
