import Nav from "./components/Nav";
import About from "./components/About";
import data from "./data.json"
function App() {
  return (
    <div className="body">
      <Nav />
      <About data={data}/>
    </div>
  );
}

export default App;
