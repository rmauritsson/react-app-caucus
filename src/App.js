import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Meeting from "./components/Meeting";

function App() {
  return (
    <div className="App">
      <div className="create_meeting">
        <Meeting />
      </div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
