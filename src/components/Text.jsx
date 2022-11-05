import React from "react";
import { TextField, Button} from "@mui/material";
import "./Text.css";
const Text = () => {
  return (
    <div>
      <div>
        <TextField
          variant="standard"
          id="outlined-required"
          label="name"
          margin="normal"
          InputProps={{
            className: "textAreaStyle",
            disableUnderline: true,
          
          }}
         
        />
      </div>
      <div>
        <TextField
        margin="normal"
          variant="standard"
         
          label="contact number"
          InputProps={{
            className: "textAreaStyle",
            disableUnderline: true,
          }}
        />
      </div>
      
      <Button 
    
      >Login</Button>
    </div>
  );
};

export default Text;
