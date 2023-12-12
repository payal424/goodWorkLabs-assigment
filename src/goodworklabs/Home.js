import { useState } from "react";
import Flexi from "./Flexi";
const Home = () => {
  const [state, setState] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const items = [
    {
      "name": "person_name",
      "label": "Person's Name",
      "type": "TextField"
    },
    {
      "name": "states",
      "label": "Person's state",
      "type": "DropDown",
      "values": [
        "Maharashtra",
        "Kerala",
        "Tamil Nadu"
      ]
    }
  ]
  const submitHandler = (state) => {
    setState(state);
    setIsVisible(true);
  }

  return (<div>
    <Flexi item={items} submit={submitHandler}></Flexi>
    {isVisible && <h3>Result</h3>}
    {isVisible && state.map((i) => {
      return (
        <div style={{ borderBlockEnd: "2px solid", marginLeft: "25%", marginRight: "25%" }}> 
          {Object.keys(i) + "  :  " + Object.values(i)}
        </div>)
    })}
  </div>);
}
export default Home