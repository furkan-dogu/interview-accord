import React, { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";

const Card = ({questions}) => {
  const [btn, setBtn] = useState(false)
  return (
    <div className="card-group">
        <div className="card">
          <div className="ques-answer">
            <h5>
              {questions.question}
            </h5>
            <button className="btn-minus" onClick={() => setBtn(!btn)}>
              {btn ? arrowup : arrowdown}
            </button>
          </div>
          {btn ? <p>{questions.answer}</p> : ""}
        </div>
    </div>
  );
};

export default Card;
