import * as React from "react"

export default function AdvertisementArea(props) {
  if(props.advertisementsToShow)
    return (
      <div className="AdvertisementArea">
        <ul>
          {props.advertisementsToShow.map(ad => ( 
            <div className="AddDiv">
            <img className="AddImage" src={ad.pictureURL}/>
            <li key={ad.id} onClick={() => props.getAd(ad.id)}>
              <h2 className="title">{ad.title}</h2> <span className="AddsPrice"> {ad.price} €</span>
            </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }

