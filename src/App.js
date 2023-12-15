import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Todos  from "./components/Todos";
import Footer from "./components/footer";

function App() {
  return (
    <>
    <Header title="My Todos list" serchBar = {false}/>
    <Todos/>
    <Footer/>
    </>
  );
}

export default App;
