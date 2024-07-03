import React, { useState, useEffect } from "react";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";

const CustomTextField = ({ items, noteDataId, initialNoteData }) => {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  useEffect(() => {
    const updatedNotes = items.map((item) => ({
      id: item.id,
      note: noteDataId === item.id ? initialNoteData : item.add_note || ""
    }));
    setNotes(updatedNotes);
  }, [items, noteDataId, initialNoteData]);

  const handleNoteChange = (id, newNote) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, note: newNote } : note))
    );
  };

  const handleButtonClick = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, note: "New Note Data" } : note
      )
    ); // Replace 'New Note Data' with actual new data
  };

  return (
    <Paper component={Box} width="50%" mx="auto" p={4}>
      <Typography>Notes</Typography>
      <Box component="form" mt={2} p={3}>
        {items.map((item, index) => (
          <div key={item.id}>
            <TextField
              fullWidth
              placeholder="Your placeholder"
              variant="outlined"
              value={notes.find((note) => note.id === item.id)?.note || ""}
              onChange={(e) => handleNoteChange(item.id, e.target.value)}
              margin="normal"
            />
            <Button onClick={() => handleButtonClick(item.id)}>
              Change Note Data
            </Button>
          </div>
        ))}
      </Box>
    </Paper>
  );
};

// Example usage
const items = [
  { id: 1, add_note: "Initial Note 1" },
  { id: 2, add_note: "Initial Note 2" },
  { id: 3, add_note: "Initial Note 3" }
];

// const noteDataId = 2;
const initialNoteData = "Special Note for ID 2";

const App = () => {
  return (
    <div>
      <CustomTextField
        items={items}//data
        // noteDataId={noteDataId}

        // onst noteDataId = 2;
// const initialNoteData = "Special Note for ID 2";
        initialNoteData={initialNoteData}
      />
    </div>
  );
};

export default App;
