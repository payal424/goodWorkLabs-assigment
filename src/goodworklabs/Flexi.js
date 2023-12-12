import { useState } from "react"

const Flexi = (props) => {
    const [state,setState] = useState([]);
    const item = props.item;
    const changeHandler = (name,value) => {
        const arr = { [name] : value };
        setState((prevItem) => {return([...prevItem,arr])});
    }
    const clickHandler = () => {
        props.submit(state);
    }
    return (<div style={{border : "10px solid", marginLeft : "25%" , marginRight : "25%" , marginBottom : "20px"}}>
        {
            item.map((i) => {
                switch (i.type) {
                    case "TextField":
                        return (<div>
                            <label>{i.label} :  </label>                           
                            <input type="text"  onBlur={(e) => {changeHandler(i.name , e.target.value)} } ></input></div>)
                    case "DropDown":
                        return (<div>
                            <label>{i.label} :  </label>
                            <select onBlur={(e) => {changeHandler(i.name , e.target.value)} }>
                            <option>Select a state</option>
                            {i.values.map((j) => { return (<option>{j}</option>) })}
                        </select></div>)
                    default:
                        return (<div>Item array is empty</div>)
                }
            })
        }
        <div><button onClick={clickHandler}>Submit</button></div>
    </div>
    )
}
export default Flexi;