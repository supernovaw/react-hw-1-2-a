import React from 'react'

export default function ProjectList(props) {
  return (
    <div>
      {props.list.map((val, index) => 
        <div className="project" key={index}><img src={val.img} /></div>
      )}
    </div>
  )
}
