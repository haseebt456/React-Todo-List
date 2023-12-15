import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/footer";

function App() {

  const onDelete = (todo)=>{
    console.log("I am on delete",todo)
  }
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
      title: "complete your Assignments",
      desc: "You should go to complete your assignments by tomorrow"
    }
  ]
  return (
    <>
      <Header title="My Todos list" serchBar={false} />
      <Todos todoslist = {todosArray} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
