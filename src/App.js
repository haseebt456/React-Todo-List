import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/footer";

function App() {
  let todosArray = [
    {
      sno: 1,
      title: "Go to the university",
      desc: "You should go to university everyday to learn"
    },
    {
      sno: 2,
      title: "Go to the Home",
      desc: "You should go back to home"
    },
    {
      sno: 3,
      title: "complete your university",
      desc: "You should go to university everyday to learn"
    }
  ]
  return (
    <>
      <Header title="My Todos list" serchBar={false} />
      <Todos todoslist = {todosArray} />
      <Footer />
    </>
  );
}

export default App;
