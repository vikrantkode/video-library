import React from 'react'
import "./ViCard.css"

const ViCard = ({video}) => {
    const {_id,title,category} = video;
  return (
    <div className="parent">
        <div className="card">
            <div className="image">
                <img src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`} alt="carosol"/>
            </div>
            <div className="title">
                <h2 className="title__header">{title}</h2>
                <h4 className="title__subheading">{`Category : ${category}`}</h4>
            </div>
            <div className="content">
            <i style={{color:"red"}} className="bi bi-bookmark"></i>
                <i className="bi bi-bookmark-fill"></i>
            </div>
        </div>
       
</div>
  )
}

export default ViCard