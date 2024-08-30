import Main from "./Landing/Main";
import Navbar from "./Landing/Navbar";

function App() {
  return (
    <section className="w-screen bg-gradient-to-r from-slate-900 to-slate-700">
      <Navbar />
      <Main />
    </section>
  );
}

export default App;
