import React, {useState} from "react";
import Display from "./components/Display";
import Header from "./components/Header";
import Map from "./components/Map";
import "./styles/style.css";


function App() {
  const [IPAddress, setIPAddress] = useState("")
  const IPurl = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_API_KEY}&ipAddress=8.8.8.8`;
  return (
    <div className="App">
      <Header setIPAddress={setIPAddress} />
      <Display IPAddress={IPAddress} />
      <Map />
    </div>
  );
}

export default App;
