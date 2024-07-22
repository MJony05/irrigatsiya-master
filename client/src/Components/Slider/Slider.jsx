import React, { useContext, useState } from "react";
import "./Slider.scss";
import { Carousel } from "react-bootstrap";
import AxiosCall, { BASE_URL } from "../AxiosCall/AxiosCall";
import { StatesContext } from "../../context/GlobalContext";
import { useEffect } from "react";

const Slider = () => {
  const [slider, setSlider] = useState([]);
  const { lang } = useContext(StatesContext);
  const getSlider = () => {
    // all categories
    AxiosCall("get", `/slider/${lang}`).then((data) => {
      setSlider(data);
    });
  };
  useEffect(() => {
    getSlider();
  }, [lang]);

  const nextIcon = (
    <span className="glyphicon glyphicon-glass">
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 1024 1024"
        class="icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(180deg)" }}
      >
        <path
          d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
          fill="#fff"
        />
      </svg>
    </span>
  );
  const prevIcon = (
    <span className="glyphicon glyphicon-glass">
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 1024 1024"
        class="icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
          fill="#fff"
        />
      </svg>
    </span>
  );
  return (
    <>
      <Carousel nextIcon={nextIcon} prevIcon={prevIcon} className="carousel">
        <Carousel.Item className="carouselItem">
          <img
            className="fakeImage"
            alt="nimadir"
            src={
              BASE_URL + "/slider/image/8796432c-7993-4ec9-b518-8b818fed8bd3"
            }
          />
          <img
            className="carouselImage"
            alt="nimadir"
            src={
              BASE_URL + "/slider/image/8796432c-7993-4ec9-b518-8b818fed8bd3"
            }
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="fakeImage"
            alt="nimadir"
            src={
              BASE_URL + "/slider/image/8796432c-7993-4ec9-b518-8b818fed8bd3"
            }
          />
          <img
            className="carouselImage"
            alt="nimadir"
            src={
              BASE_URL + "/slider/image/8796432c-7993-4ec9-b518-8b818fed8bd3"
            }
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="fakeImage"
            alt="nimadir"
            src={
              BASE_URL + "/slider/image/8796432c-7993-4ec9-b518-8b818fed8bd3"
            }
          />
          <img
            className="carouselImage"
            alt="nimadir"
            src={
              BASE_URL + "/slider/image/8796432c-7993-4ec9-b518-8b818fed8bd3"
            }
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* {slider.length > 0 ? (
        <Carousel
          autoPlay
          infinite="true"
          interval={3500}
          className="carousel-slide"
          ref={carouselRef}
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          {slider.map((item, index) => {
            return (
              <CarouselItem key={index}>
                <div className="banner_item_img">
                  <img src={BASE_URL + "/" + item.url} alt="" />
                  <img src={BASE_URL + "/" + "slider/image/8796432c-7993-4ec9-b518-8b818fed8bd3"} alt="" />
                </div>
                <Carousel.Caption>
                  <div className="container">
                    <div className="textes">
                      <h1>{item.text}</h1>
                    </div>
                    <div className="buttons">
                      {slider.length > 1 && (
                        <>
                          <button
                            className="icon-container"
                            onClick={handlePrevClick}
                          >
                            <FontAwesomeIcon
                              icon={faArrowLeft}
                              className="icon"
                            />
                          </button>
                          <button
                            className="icon-container"
                            onClick={handleNextClick}
                          >
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="icon"
                            />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </Carousel.Caption>
              </CarouselItem>
            );
          })}
        </Carousel>
      ) : (
        <div className="carousel-loading">
          <Loading />
        </div>
      )} */}
    </>
  );
};

export default Slider;
