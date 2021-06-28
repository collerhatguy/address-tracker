import Display from "./components/Display";
import Header from "./components/Header";
import Map from "./components/Map";


function App() {
  const [IPAddress, setIPAddress] = useState("")
  const IPurl = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_API_KEY}&ipAddress=8.8.8.8`;
  return (
    <div className="App">
      <Header setIPAddress={setIPAddress} />
      <Display />
      <Map />
    </div>
  );
}

export default App;
