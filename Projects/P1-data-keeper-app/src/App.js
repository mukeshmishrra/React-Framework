import Header from "./components/Header";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const saveData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  const removeData = (index) => {
    const arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <div className="App">
      <Header />
      {/* Form  */}
      <div className="form">
        <Stack direction="row" spacing={3}>
          <TextField
            id="outlined-basic"
            value={name}
            label="username"
            onChange={(event) => setName(event.target.value)}
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            value={email}
            label="email"
            onChange={(event) => setEmail(event.target.value)}
            variant="outlined"
          />

          <Button variant="contained" className="btn" onClick={saveData}>
            <AddIcon />
          </Button>
        </Stack>
      </div>

      {
        <div className="data__container">
          {data.map((item, index) => {
            return (
              <div key={index} className="data__items">
                <h4> {item.name} </h4>
                <h4> {item.email}</h4>
                <h4>
                  <Button
                    onClick={() => removeData(index)}
                    variant="contained"
                    className="btn__delete"
                  >
                    <DeleteIcon />
                  </Button>
                </h4>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}

export default App;
