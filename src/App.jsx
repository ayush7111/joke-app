import Categories from "./components/Categories";
import Jokes from "./components/Jokes";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-600 to-slate-950 flex flex-col items-center ">
        <Categories />
        <Jokes />
      </div>
    </>
  );
}

export default App;
