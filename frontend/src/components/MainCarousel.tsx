import React from "react";
import { Carousel } from "react-bootstrap";

function MainCarousel() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex: number): void => {
    setIndex(selectedIndex);
  };

  const img_css = {width: 1920, height: 720}
  const caption_css = {background: "rgba(0, 0, 0, 0.6)", width: "100%", right: 0, left: 0, bottom: 0 }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src="/src/assets/images/jungle_img1.jpeg"
          alt="placeholer"
          className="d-block w-100"
          style={img_css}
        />
        <Carousel.Caption style={caption_css}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/src/assets/images/jungle_img2.jpeg"
          alt="placeholer"
          className="d-block w-100"
          style={img_css}
        />
        <Carousel.Caption style={caption_css}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/src/assets/images/jungle_img3.jpeg"
          alt="placeholer"
          className="d-block w-100"
          style={img_css}
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
