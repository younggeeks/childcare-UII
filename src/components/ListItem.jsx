import React from "react"

import ProgressCircle from "./ProgressCircle"

import "./list-item.scss"

const ListItem = ({ progress, selected }) => {
  return (
    <div className={`li-content ${selected ? "li-selected" : ""}`}>
      <div className="li-card-grid">
        <div className="li-grid-item__percentage">
          <ProgressCircle
            height={140}
            strokeWidth={12}
            progress={progress}
            selected={selected}
          />
        </div>
        <div className="li-grid-item__text">
          <div className={`li-text-header ${selected ? "li-selected" : ""}`}>
            Building Schools for poor children
          </div>
          <div className={`li-text-content ${selected ? "li-selected" : ""}`}>
            Contraly to modern belief, lorem Ipsum isn't simply random text
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListItem
