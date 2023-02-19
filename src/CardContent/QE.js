import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import "../CardContent/Qe.css";
function Qe() {
  const [isStar, setStar] = useState(false);
  const [blueTick, setBluetick] = useState(false);
  const [playicon, setPlay] = useState(false);
  return (
    <div className="qe">
      <button
        onClick={() => setStar(!isStar)}
      >
        {isStar ? (
          <AiFillStar className={`${isStar ? "fill" : null}`} />
        ) : (
          <AiFillStar style={{ color: "gray" }} />
        )}
      </button>
      
      <div className="qeText">
        <p style={{color: "black", fontWeight:"500"}}>Quadratic Equations</p>
        <p style={{color: "grey"}}>15 Mins</p>
      </div>

      <button
        className={`${blueTick ? "checkmark" : "clipboard"}`}
        onClick={() => setBluetick(!blueTick)}
      >
        {blueTick ? (
          <BsCheckCircleFill
            style={{ color: "purple", width: "40px", height: "40px" }}
          />
        ) : (
          <FaClipboardList />
        )}
      </button>
      
      <button
        className={`${playicon ? "checkmark" : "clipboard"}`}
        onClick={() => setPlay(!playicon)}
      >
        {playicon ? (
          <BsCheckCircleFill
          style={{ color: "purple", width: "40px", height: "40px" }}
            
          />
        ) : (
          <FaPlay/>
        )}
      </button>
    </div>
  );
}

export default Qe;
