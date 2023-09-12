import React from "react";
import "./MenuListItem.css";

export default function MenuListItem(props) {
  return (
    <li>
      <button onClick={props.setCurrentMood()} className="btn-item">
        기분이 : {props.mood}
      </button>
    </li>
  );
}
