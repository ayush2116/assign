import React from "react";
import { TextField, Button} from "@mui/material";
import "./Text.css";
const Text = () => {
  return (
    <div>
      <div>
      <TextField
      margin="normal"
  sx={{
    "& label.Mui-focused": {color: " #1d72e7" },
    "& .MuiOutlinedInput-root:hover": { "& > fieldset": { borderColor: " #1d72e7"}},
    "& .MuiOutlinedInput-root":{"& > fieldset": {border: '2px solid  #1d72e7'}},
    "& .MuiOutlinedInput-root.Mui-focused": {"& > fieldset": {borderColor: " #1d72e7"}}
  }}
  id="outlined-basic"
  label="name"
  variant="outlined"
/>
      </div>
      <div>
      <TextField
      margin="normal"
  sx={{
    "& label.Mui-focused": { color: " #1d72e7" },
    "& .MuiOutlinedInput-root:hover": { "& > fieldset": { borderColor: " #1d72e7"}},
    "& .MuiOutlinedInput-root":{"& > fieldset": {border: '2px solid  #1d72e7'}},
    "& .MuiOutlinedInput-root.Mui-focused": {"& > fieldset": {borderColor: " #1d72e7"}}
  }}
  id="outlined-basic"
  label="number"
  variant="outlined"
/>
      </div>
      
      
      <Button> Login </Button>
    </div>
  );
};

export default Text;
