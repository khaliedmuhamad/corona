import "./card.scss";
import React, { useState, useEffect } from "react";
export default function Card(props) {
  const state = props.state;
  const column = props.column;
  const align = props.align;
  const intial = props.intial;
  const [data, setData] = useState([]);

  useEffect(() => {
    const reset = (e) => {
      return setData([...e]);
    };
    reset(state);
  }, [state]);

  return (
    <div className="cardOfThree">
      <div className="container">
        <h2 className="text-center mainHead">{props.mainHead}</h2>
        <div className="three-cards row">
          {data.map((el, n) => (
            <div
              className={`col-md-${column} m-md-0 col-sm-12 p-0 m-sm-3 mt-5 `}
              key={n}
            >
              <div className={`item text-lg-${align} `} style={intial}>
                <div className="icon-card mt-2">{el.icon}</div>
                <div className="head-card text-md-left">{el.head}</div>
                <div className="paragraph-card text-md-left">
                  {el.paragraph}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
