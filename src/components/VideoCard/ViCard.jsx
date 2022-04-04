import React from 'react'
import "./ViCard.css"

const ViCard = ({video}) => {
    const {_id,title,category,views,uploaded} = video;
  return (
    // <div className="parent">
        <div className="card">


            <div className="image">
                <img src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`} alt="carosol"/>
            </div>
            <div className="title">
                <h2 className="title__header">{title}</h2>
                <h4 className="title__subheading">{`Category : ${category}`}</h4>
            </div>

            <div className="card_footer">
                <div className="footer_info">
                    <span className="btn-footer">{views} views</span>
                    <span className="btn-footer">{uploaded} hours ago</span>
                </div>
                <div className="footer_icons">
                <span className="material-icons-outlined vicons">thumb_up</span>
                <span className="material-icons-outlined vicons">watch_later</span>
                <span className="material-icons-outlined vicons">playlist_add</span>
                </div>
            </div>
        
        </div>
       
// </div>

  )
}

export default ViCard