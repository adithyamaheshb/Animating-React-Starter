import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const { color, y } = useSpring({
    // opacity: isToggled ? 1 : 0,
    color: isToggled ? "white" : "green",
    // fontSize: isToggled ? "2rem" : "5em",
    // transform: isToggled ? "translate3d(0, 0, 0)" : "translate3d(0, -50px, 0)"
    y: isToggled ? 0 : -50
  });

  return (
    <div>
      {/* <animated.h1 style={fade}>Hello</animated.h1> */}
      <animated.h1
        style={{
          transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`),
          color
        }}
      >
        Hello
      </animated.h1>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
};

const AnimatedTitle = animated.h1;
