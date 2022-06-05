import Board from "../components/board/Board.component";
import MainCarousel from "../components/MainCarousel";

function MainPage() {
  return (
    <>
      <div className="mt-4"></div>
      <MainCarousel />
      <div className="mt-4"></div>
      <Board></Board>
    </>
  );
}

export default MainPage;
