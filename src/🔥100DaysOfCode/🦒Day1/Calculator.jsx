import React, { useState } from "react";

function Calculator() {
  const [msg, setMsg] = useState(0);

  const handlerAge = (e) => {
    const years = e.target.value;
    console.log(years);

    if (years >= 18) {
      setMsg(`You are ${years} years old and you are allowed to enter`);
    } else {
      setMsg(`You are ${years} years old and you are not allowed to enter`);
    }
  };
  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter your age</span>
          </label>
          <input
            type="number"
            onChange={handlerAge}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {msg ? (
              <span className="label-text-alt">{msg}</span>
            ) : (
              <span className="label-text-alt">Please enter your age</span>
            )}
          </label>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
