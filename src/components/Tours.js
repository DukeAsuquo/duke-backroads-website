import React from 'react'
import Title from "./Title.js"
import { tourCard } from '../data.js'



const Tours = () => {
  return (
    <section className="section" id="tours">
        <div className="section-title">
        <Title
          Title = "FEATURED"
          subTitle = "Tours"
        />
          
        </div>

        <div className="section-center featured-center">
       { tourCard.map((tour)=>{
          const{id, img, date, title,text,location, duration, price} = tour;
          return (
            <article key={id} className="tour-card">
            <div className="tour-img-container">
              <img src={img} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>
                {text}
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  {location}
                </p>
                <p>{duration}</p>
                <p>{price}</p>
              </div>
            </div>
          </article>
          )
        })}
          
        </div>
      </section>
  )
}

export default Tours