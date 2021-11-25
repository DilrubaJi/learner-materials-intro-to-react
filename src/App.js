import './App.css';
import Navbar from './components/Navbar.js';
import Header from './components/Header';
import CindyClawford from './components/CindyClawford';
import LittleMissPurrfect from './components/LittleMissPurrfect';
import ElTaco from './components/ElTaco';
import MrGwumpy from './components/MrGwumpy';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Navbar />

      <Header />

      <main>
        <div className="cards__wrapper">
          <CindyClawford />
          <LittleMissPurrfect />
          <ElTaco />
          <MrGwumpy />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
