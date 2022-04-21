import React, { useEffect, useRef, useState } from "react";
import { useSprings, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { useDrag } from "react-use-gesture";

import clamp from "lodash.clamp";
import CardReceive from "./CardReceive";
import { getChanllenges } from "../../../Services/puzzleServices";

function CardViewer() {
  const [challenges, setChanllenges] = useState([]);

  const index = useRef(0);
  const [ref, { width }] = useMeasure();
  const [props, api] = useSprings(
    challenges.length,
    (i) => ({
      x: i * width,
      scale: width === 0 ? 0 : 1,
      display: "block",
    }),
    [width]
  );
  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
      if (active && distance > width / 2) {
        index.current = clamp(
          index.current + (xDir > 0 ? -1 : 1),
          0,
          challenges.length - 1
        );
        cancel();
      }
      api.start((i) => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const x = (i - index.current) * width + (active ? mx : 0);
        const scale = active ? 1 - distance / width / 2 : 1;
        return { x, scale, display: "block" };
      });
    }
  );

  const loadChallenges = () => {
    getChanllenges().then((res) => {
      let data = res.data;
      console.log(data);
      setChanllenges(data.challenges);
    });
  };

  useEffect(() => {
    loadChallenges();
  }, []);

  return (
    <div ref={ref} className="wrapper">
      {props.map(({ x, display, scale }, i) => (
        <animated.div
          className="page"
          {...bind()}
          key={i}
          style={{
            display,
            x,
          }}
        >
          <animated.div
            style={{
              scale,
              backgroundColor: `${challenges[i].color}`,
            }}
          >
            <CardReceive
              challengeId={challenges[i]._id}
              name={challenges[i].name}
              nickName={challenges[i].nickName}
              UserID={challenges[i].UserID}
              profile={challenges[i].profileImage}
            />
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
}

export default CardViewer;
