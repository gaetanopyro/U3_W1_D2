import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Mynav from "./components/Mynav";
import MyFooter from "./components/MyFooter.JSX";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <Mynav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
