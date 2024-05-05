/**
 * NOTE: Tried to create Dropdown box and options selection through vanilla CSS but for timely completion of this project
 * used React-select module
 */


import { useState } from "react";

const Dropdown = () => {

  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");

    return (
        <div className="dropdown">
        <div>{selected}</div>
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn"
        >
          {selected}
          <span className="divider" />
          <span className="fas fa-chevron-down" />
        </div>
        <div
          className="dropdown-content"
          style={{ display: isActive ? "block" : "none" }}
        >
          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className="item"
          >
            One
          </div>
          <div
            className="item"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            Two
          </div>
          <div
            className="item"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            Three
          </div>
        </div>
      </div>
    )
}

export default Dropdown;