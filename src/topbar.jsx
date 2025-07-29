import { useEffect, useState } from "react";

export function TopBar() {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
      .then(async res => {
        const json = await res.json();
        setTabData(json);
        setLoading(false);
      });

  }, [])
  
  return <div>
    <button onClick={function() {
      setCurrentTab(1)
    }} style={{color: currentTab == 1 ? "#686bed" : "black", margin: "0px 8px"}}>Todo #1</button>
    <button onClick={function() {
      setCurrentTab(2)
    }} style={{color: currentTab == 2 ? "#686bed" : "black", margin: "0px 8px"}}>Todo #2</button>
    <button onClick={function() {
      setCurrentTab(3)
    }} style={{color: currentTab == 3 ? "#686bed" : "black", margin: "0px 8px"}}>Todo #3</button>
    <button onClick={function() {
      setCurrentTab(4)
    }} style={{color: currentTab == 4 ? "#686bed" : "black", margin: "0px 8px"}}>Todo #4</button>
<br /> 
    {loading ? "Loading..." : tabData.title}
  </div>
}