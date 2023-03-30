
// import MainRoutes from './AllRoutes/MainRoutes';
import Admin from './Admin/Admin';
import MainRoutes from './AllRoutes/MainRoutes';
import './App.css';

import MainRoutes from "./AllRoutes/MainRoutes";
import "./App.css";
import Footer from "./components/Footer";
import WithSubnavigation from "./components/Navbar";

function App() {
  return (
    <div className="App">
   <MainRoutes/>
   {/* <Admin /> */}
    </div>
  );
}

export default App;
