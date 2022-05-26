import "./styles.css";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const [temp, setTemp] = useState(25);

  let dropDownClasses = "dropdown-list";

  if (isOpen) {
    dropDownClasses += "is-displayed";
  }
  const AppStyles = {
    fontSize: isOpen ? "16px" : "18px",
    height: "100vh"
  };
  const handleDropDownClick = () => {
    setCount(count + 1);
    setIsOpen(!isOpen);
  };

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };
  const handleChangeTemp = (event) => {
    setTemp(event.target.value);
  };
  return (
    <div className="App" style={AppStyles}>
      <p> You clicked {count} times</p>
      <input type="color" onChange={handleChangeColor} />
      <div>
        <button onClick={handleDropDownClick}>Show dropdown</button>
        <button>Show dropdown</button>
        <ul className={dropDownClasses}>
          <li>Optiune1</li>
          <li>Optiune2</li>
        </ul>
      </div>
      <div>
        Temperatura in Celsius:{" "}
        <input type="text" value={temp} onChange={handleChangeTemp} />
        {temp}
      </div>
      <div>Temperatura in Fahrenheit:{}</div>
    </div>
  );
}
