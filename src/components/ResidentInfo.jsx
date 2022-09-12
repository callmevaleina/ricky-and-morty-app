import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const ResidentInfo = ({ url }) => {
  const [characters, setCharacters] = useState({});
  const [color, setColor] = useState("");
  const [isCardFront, setIsCardFront] = useState(true);
  const [fontSize, setFontSize] = useState("21px");

  useEffect(() => {
    axios.get(url).then((res) => {
      setCharacters(res.data);
      let status = { Alive: "green", Dead: "red", unknown: "gray" };

      setColor(status[res.data?.status]);
      // if (res.data.status === "Alive") {
      //   setColor("green");
      // } else if (res.data.status === "Dead") {
      //   setColor("red");
      // } else {
      //   setColor("gray");
      // }

      if (res.data.name.length > 20) {
        setFontSize("16px");
      }
    });
  }, []);

  return (
    <div className="characters" key={characters.id}>
      <div className="character-container">
        {isCardFront ? (
          <>
            <p className="characterStatus">
              {" "}
              <span className="pointStatus" style={{ color: color }}>
                •
              </span>{" "}
              <span>{characters.status}</span>
            </p>
            <img src={characters.image} alt="" />

            <div className="character-info">
              <h2 style={{ fontSize: fontSize }}>{characters.name}</h2>
              <i
                onClick={() => {
                  setIsCardFront(false);
                }}
                className="fa-regular fa-eye"
              ></i>
            </div>
          </>
        ) : (
          <div className="characterBack animate__animated animate__flipInY">
            <i
              onClick={() => setIsCardFront(true)}
              className="fa-solid fa-xmark"
            ></i>
            <img src={characters.image} alt="" />
            <h2>{characters.name}</h2>
            <div className="characterGrid">
              <p className="characterInfo">
                <b>ORIGIN</b>
                <span>{characters.origin?.name}</span>
              </p>
              <div className="lineBack"></div>
              <p className="characterInfo">
                <b>SPECIES</b>
                <span>{characters.species}</span>
              </p>
              <div className="lineBack"></div>
              <p className="characterInfo">
                <b>EPISODES</b>
                <span>{characters.episode?.length}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResidentInfo;
