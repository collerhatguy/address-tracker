import React, {useState, useEffect} from "react";
import Display from "./components/Display";
import Header from "./components/Header";
import Map from "./components/Map";
import "./styles/style.css";


function App() {
  const [IPAddress, setIPAddress] = useState("");
  const [Data, setData] = useState()
  const IPurl = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_KEY}&ipAddress=${IPAddress}`;
  async function getData() {
    try {
      const json = await fetch(IPurl);
      const data = await json.json(); 
      setData(data);
      console.log(data)
    } catch(err) {
      throw err;
    }
  }

  useEffect(() => {
    getData();
  }, [IPAddress])
  return (
    <div className="App">
      <Header setIPAddress={setIPAddress} />
      <Display IPAddress={IPAddress} />
      <Map />
    </div>
  );
}

export default App;
