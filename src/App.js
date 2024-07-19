
import './App.css';
import Agency from './Components/Agency';
import BottomTitle from './Components/BottomTitle';
import Clients from './Components/Clients';
import Footer from './Components/Footer';
import HomeImage from './Components/HomeImage';
import Navbar from './Components/Navbar';
import Properties from './Components/Properties';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeImage/>
      <Agency />
      <Services />
      <Properties />
      <Clients />
      <BottomTitle />
      <Footer/>
    </div>
  );
}

export default App;
