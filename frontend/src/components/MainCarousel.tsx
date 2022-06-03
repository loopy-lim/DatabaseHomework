import React from "react";
import { Carousel } from "react-bootstrap";

function MainCarousel() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex: number): void => {
    setIndex(selectedIndex);
  };

  const caption_css = {background: "rgba(0, 0, 0, 0.6)", width: "100%", right: 0, left: 0, bottom: 0 };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src="/src/assets/images/jungle_img1.png"
          alt="placeholer"
          className="d-block w-100"
        />
        <Carousel.Caption style={caption_css}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/src/assets/images/jungle_img2.png"
          alt="placeholer"
          className="d-block w-100"
        />
        <Carousel.Caption style={caption_css}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/src/assets/images/jungle_img3.png"
          alt="placeholer"
          className="d-block w-100"
        />
        <Carousel.Caption style={caption_css}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
