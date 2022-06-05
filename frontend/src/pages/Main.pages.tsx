import Board from "../components/board/Board.component";
import MainCarousel from "../components/main/MainCarousel";

function MainPage() {
  return (
    <div className="container">
      <div className="mt-4"></div>
      <MainCarousel />
      <div className="mt-4"></div>
      <Board></Board>
    </div>
  );
}

export default MainPage;
