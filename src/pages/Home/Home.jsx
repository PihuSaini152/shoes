import React from 'react'
import { useState,useEffect } from 'react'
import './home.css/'
import Nav3 from '..//../pages/Navebar3/nav3.jsx'
import Head1 from '/home/homeimg1.jpg'
import Head2 from '/home/homeimg2.jpg'
import Homecard from './homecard1.jsx'

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: Head1,
      title: "White Sneaker Season",
      subtitle: "Classic spring style starts with our wildly comfortable kicks.",      
    },
    {
      image: Head2,
      title: "Bring It, Spring.",
      subtitle: "The extra-durable Utility Collection is up for everything.",
    },
  ];

  const NextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const PrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(NextSlide, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (

   <>

    <Nav3/>
    <div className="headmain">
      <header className="carousel-container">
        <div className="carousel">
          <div
            className="carousel-slide"
            style={{
              backgroundImage: `url(${slides[currentIndex].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "660px",
            }}
          >
            <div className="carousel-caption">
              <h1>{slides[currentIndex].title}</h1>
              <h4>{slides[currentIndex].subtitle}</h4>
            </div>
            <div className="homebuton">
                <button>SHOP MEN</button>
                <button>SHOP WOMEN</button>
            </div>
          </div>

          <button className="carousel-control-prev" onClick={PrevSlide}>
            &lt;
          </button>
          <button className="carousel-control-next" onClick={NextSlide}>
            &gt;
          </button>
        </div>
      </header>
    </div>

    <Homecard/>

    <div className="secendheader">
   <h1>We Make Better Things In A Better Way</h1>
   <h4>By looking to the world’s greatest innovator—Nature—we create shoes that deliver <br />
   unrivaled comfort that you feel good in and feel good about.</h4>

    </div>
    </>
  );
};

export default Home;
