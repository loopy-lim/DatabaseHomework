import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

function MainCarousel() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex: number): void => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
      <CarouselItem>
        <img
          src="https://dummyimage.com/1980x1080/dadada/aaa"
          alt="placeholer"
          className="d-block w-100"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="https://dummyimage.com/1980x1080/dadada/aaa"
          alt="placeholer"
          className="d-block w-100"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="https://dummyimage.com/1980x1080/dadada/aaa"
          alt="placeholer"
          className="d-block w-100"
        />
      </CarouselItem>
    </Carousel>
  );
}

export default MainCarousel;
