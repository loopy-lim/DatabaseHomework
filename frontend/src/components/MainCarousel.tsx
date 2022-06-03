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
          <h3>Junggle</h3>
          <p>정글은 생태계의 보고.<br/> 지구에서 육지 면적의 적은 부분만을 차지하지만, <br/>지구의 생명체의 1/3이 정글을기반으로 살아갑니다.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/src/assets/images/jungle_img2.png"
          alt="placeholer"
          className="d-block w-100"
        />
        <Carousel.Caption style={caption_css}>
          <h3>새로운 시너지</h3>
          <p>열대우림 속에서 다양한 종의 생물이 관계맺음 하듯,<br/> Junggle에서 다양한 배경과 특성을 가진 사람들이 어우러져 관계를 맺고,<br/> 새로운 생태계와 시너지를 형성했으면 하는 바람입니다.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          src="/src/assets/images/jungle_img3.png"
          alt="placeholer"
          className="d-block w-100"
        />
        <Carousel.Caption style={caption_css}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default MainCarousel;
