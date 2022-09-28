import Async from "./components/Async/Async";
import Welcome from "./components/Welcom/Welcome";
import Login from "./components/Login/Login";
function App() {
  return (
    <div className="App">
    <Login/>
      <Welcome />
      <Async/>
    </div>
  );
}

export default App;
