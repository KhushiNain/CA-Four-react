import React from "react";
import "../App.css"

export default function Result({ score, total, handleRestart,mode }) {
  return (
    <div style={{ color: mode ? "white" : "black" , backgroundColor:mode?"black":"white" }} className="result-container flex">
      <div style={{backgroundColor:mode?"#8435DE":"#D2E0FB"}} className="result-box flex">
        <h1>Congratulation !</h1>
        <p>You answered</p>
        <h2>
          {`${score}/${total} (${((score/5*100))}%)`}
         
        </h2>
        <p>questions correctly</p>
        <button style={{color: mode ?"#8435DE":"#D2E0FB"}} onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
}
 