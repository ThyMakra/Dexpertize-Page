import React, { Component } from 'react';


const Cards = ({data}) => {
  return (
    <div className="">
      <div className="col-md-10 col-md-offset-1 section-title">
        {/* <h2>Our Blogs</h2> */}
      </div>
      <div className="row"></div>

      <section id="cards">
        {data ? data.map((d) => 
          <article class="card">
            
            <header class="card-header">
                <p className="card-date">{d.date}</p>
                <div className="card-image">
              
                </div>
                <h3>{d.title}</h3>
            </header>
            
            <div class="tags">
                <a href="#">html</a>
                <a href="#">css</a>
            </div>

            <div class="card-author">
                <a href="#" class="author-avatar">
                    <img src={d.image} alt=""/>
                </a>
                
                <svg class="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>
                <div class="author-name">
                    <div class="author-name-prefix">{d.prefix}</div>
                    {d.author}
                </div>
            </div>
          </article>
        ) : 'loading...'}
      
      </section>
    </div>
  );
}

export default Cards;