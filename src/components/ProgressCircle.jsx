import React from "react";
import './progress-circle.scss';

const ProgressCircle = ({ height, strokeWidth, progress, selected }) => {
  const radius = height / 2 - strokeWidth
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference
  return (
    <svg className="progress" width={height} height={height}>
      <circle
        className="progress__circle__outer"
        stroke={`${selected ? "white" : "#ecedee"}`}
        stroke-width={strokeWidth}
        fill="transparent"
        r={radius}
        cx={height / 2}
        cy={height / 2}
      />
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        stroke-width="2px"
        font-size="30px"
        font-weight="400px"
        fill={`${selected ? "white" : "#555659"}`}
        dy=".3em"
        id={selected}
      >
        {progress}%
      </text>
      <circle
        className="progress__circle__inner"
        stroke="#f16a85"
        stroke-width={strokeWidth}
        fill="transparent"
        r={radius}
        cx={height / 2}
        cy={height / 2}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
      />
    </svg>
  )
}

export default ProgressCircle
