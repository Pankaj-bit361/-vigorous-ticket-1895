import MainRoutes from './AllRoutes/MainRoutes';
import './App.css';
import Footer from './components/Footer';
import WithSubnavigation from './components/Navbar';

function App() {
  return (
    <div className="App">
      <WithSubnavigation />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
