function MainCarousel() {
    return (
      <>
        <div
          id="mainCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner active">
            <div className="carousel-item">
              <img src="https://dummyimage.com/640x360/fff/aaa" alt="one" className="d-block w-100" />
            </div>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item">
              <img src="https://dummyimage.com/640x360/fff/aaa" alt="two" className="d-block w-100" />
            </div>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item">
              <img src="https://dummyimage.com/640x360/fff/aaa" alt="three" className="d-block w-100" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            data-bs-target="#mainCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            data-bs-target="#mainCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
}

export default MainCarousel;