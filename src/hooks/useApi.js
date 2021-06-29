import {useState, useEffect} from "react";

const useApi = (IPAddress) => {

    const [data, setData] = useState({})
    const IPurl = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_KEY}&ipAddress=${IPAddress}`;
    async function getData() {
      try {
        const json = await fetch(IPurl);
        const response = await json.json(); 
        setData(response);
        console.log(response)
      } catch(err) {
        throw err;
      }
    }
  
    useEffect(() => {
      getData();
    }, [IPAddress])
    return data;
}
export default useApi;