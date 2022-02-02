import concat from "./IconAddArr.js";
import React, { useState, useEffect } from "react";
export default function Testing() {
  const arr = [1, 2, 3, 4, 5, 6];
  const objects = [
    { name: "koka", num: 0 },
    { name: "ka", num: 0 },
    { name: "ko", num: 0 },
    { name: "kk", num: 0 },
    { name: "oa", num: 0 },
  ];
  useEffect(() => {
    setstate(concat(objects, arr));
  }, []);
  const [state, setstate] = useState([]);

  return (
    <>
      {state.map((el) => (
        <h1>
          {el.name}:{el.num}
        </h1>
      ))}
    </>
  );
}
