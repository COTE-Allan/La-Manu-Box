import "./styles/App.scss";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <div className="overlay-bg"></div>
      <div className="overlay-color"></div>
      <div className="App">
        <MainPage />
      </div>
    </>
  );
}

export default App;
