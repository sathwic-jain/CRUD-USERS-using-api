import Button from "@mui/material/Button";
import "./App.css";
import { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { grey } from "@mui/material/colors";
import { Add } from "./Add";
import { Carddata } from "./Carddata";

function App() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [Country, setCountry] = useState("");
  const [number, setNum] = useState("");
  const [indx, setIndx] = useState(null);
  const sample = [
    {
      fname: `Chamber`,
      lname: `D`,
      email: `deadeye@valo.hub`,
      Country: `France`,
      Phone: `+11111111`,
    },
    {
      fname: `Viper`,
      lname: `S`,
      email: `viper@valo.hub`,
      Country: `Alaska`,
      Phone: `+22222222`,
    },
  ];
  const [users, setusers] = useState([]);
  const url = "https://6188a797d0821900178d7442.mockapi.io/users";
  const getusers = () =>
    fetch(url)
      .then((data1) => data1.json())
      .then((data) => setusers(data));
  useState(getusers, []);
  return (
    <div>
      <AppBar position="static">
        <ul className="appbar">
          <li>
            <Link to="/">
              <Button sx={{ color: grey[50] }}>Home</Button>
            </Link>
          </li>
          <li>
            <Link to="/Add">
              {" "}
              <Button sx={{ color: grey[50] }}>Add</Button>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <Button sx={{ color: grey[50] }}>Users</Button>
            </Link>
          </li>
        </ul>
      </AppBar>

      <div className="body">
        <Switch>
          <Route path="/Add">
            <Add
              users={users}
              setusers={setusers}
              setIndx={setIndx}
              setfname={setfname}
              setlname={setlname}
              setemail={setemail}
              setCountry={setCountry}
              setNum={setNum}
              fname={fname}
              lname={lname}
              email={email}
              Country={Country}
              number={number}
              indx={indx}
            />
          </Route>
          <Route path="/users">
            <Carddata
              setIndx={setIndx}
              setfname={setfname}
              setlname={setlname}
              setemail={setemail}
              setCountry={setCountry}
              setNum={setNum}
            />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>

      <div className="endline">
        
          <p>Created by Mr.Sathwic for Guvi task-29</p>
  
      </div>
    </div>
  );
}
function Home() {
  return (
    <div className="userTable">
      <h3 style={{ textAlign: "center" }}>User List</h3>
      <p style={{ textAlign: "center" }}>Add/Edit/delete User data here</p>
    </div>
  );
}

export default App;
