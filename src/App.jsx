import { useState } from "react";
import { useEffect } from "react";
import Row from "./Row.jsx";
import "./App.css";
// let arr = [];
function App() {
  let [arr, setarr] = useState([]);
  useEffect(() => {
    (async () => {
      let response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      let data = await response.json();
      setarr(data);
    })();
  }, []);

  return (
    <div id = 'main'>
      <table>
        <tbody>
          {arr.map((item) => {
            return <Row key={item.id} {...item} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
