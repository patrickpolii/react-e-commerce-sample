import "./App.css";
import Header from "./components/Header"
import Home from "./components/Home"
import Card from "./components/Card"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Card/>
     <Footer/>

      <div className="scroll-top">
        <img src="./images/arrow-up-outline.svg" alt="" />
      </div>
    </div>
  );
}

export default App;
