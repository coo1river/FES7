import DisplayMood from "./Components/DisplayMood/DisplayMood";
import MenuList from "./Components/MenuList/MenuList";

function App() {
  const [currentMood, setCurrentMood] = useState("");

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>오늘의 기분을 선택해 주세요 😄</h1>
      <div>
        <MenuList setCurrentMood={setCurrentMood} />
        <DisplayMood />
      </div>
    </div>
  );
}
export default App;
