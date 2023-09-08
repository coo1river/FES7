import "./App.css";
import Mainpage from "./page/Mainpage";

// import Header from "./Header";

function App() {
  return <Mainpage />;
  // const now = new Date();
  // const date = [
  //   now.getFullYear(),
  //   now.getMonth(),
  //   now.getDate(),
  //   now.getHours(),
  //   now.getMinutes(),
  //   now.getSeconds(),
  // ];
  // return (
  //   <div className="timeTable">
  //     <Header />
  //     <h2>년: {date[0]}</h2>
  //     <h2>
  //       월/일: {date[1] + 1}/{date[2]}
  //     </h2>
  //     <h2>
  //       시간: {date[3]}시 {date[4]}분 {date[5]}초
  //     </h2>
  //   </div>
  // );
}

export default App;
