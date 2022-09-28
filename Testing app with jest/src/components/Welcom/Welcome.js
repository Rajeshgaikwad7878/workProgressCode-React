import React, { useState } from "react";
const Welcome = () => {
  const [changeText, setChangeText] = useState(false);
  const changeTextHandler = () => {
    setChangeText(true);
  };

  return (
    <div>
      <h1>Welcome Rajesh</h1>
      {!changeText && <h3>we are Happy to see you here !!</h3>}
      {changeText && <h3>Text changed!</h3>}
      <button onClick={changeTextHandler}>Change text!</button>
    </div>
  );
};

export default Welcome;
