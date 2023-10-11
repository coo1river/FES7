import { useState } from "react";
import JoinPage from "./Components/JoinPage";
import LoginPage from "./Components/LoginPage";

function App() {
  const [page, setPage] = useState(true);
  const [info, setInfo] = useState("");
  const handlePage = () => {
    setPage((prevPage) => !prevPage);
  };

  const getMyinfo = async () => {
    const token = localStorage.getItem("token");
    const reqUrl = "https://api.mandarin.weniv.co.kr/user/myinfo";

    await fetch(reqUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => setInfo(JSON.stringify(json)));
    // const json = await res.json();
    // console.log(json);
    // setInfo(JSON.stringify(json));
  };
  return (
    <div>
      <button type="button" onClick={getMyinfo}>
        내 정보 불러오기
      </button>
      {info}
      {page ? (
        <LoginPage handlePage={handlePage} />
      ) : (
        <JoinPage handlePage={handlePage} />
      )}
    </div>
  );
}

export default App;
