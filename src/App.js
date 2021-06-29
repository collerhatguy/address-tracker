import React, {useState, useEffect} from "react";
import useApi from "./hooks/useApi";
import Display from "./components/Display";
import Header from "./components/Header";
import Map from "./components/Map";
import "./styles/style.css";


function App() {
  const [IPAddress, setIPAddress] = useState("");
  const data = useApi(IPAddress);
  return (
    <>
      <Header setIPAddress={setIPAddress} />
      <Display data={data} />
      <Map 
        latitude={data?.location?.lat} 
        longitude={data?.location?.lng} 
      />
    </>
  );
}

export default App;
