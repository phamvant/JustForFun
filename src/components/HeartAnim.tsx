import React, { useEffect } from "react";
import Start from "./Heart";
import "../assets/HeartAnim.css";

export default function HeartAnim() {
  useEffect(() => {
    Start();
  }, []);

  return (
    <>
      <canvas id="heart"></canvas>
    </>
  );
}
