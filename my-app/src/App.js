// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

let name = "Junta"

function App() {    // function based component app (html+javascript)
  return (
    <>
      {/* <Navbar /> */}
      {/* from this we access exact Navbar.js which we have already imported. Can also set defaut props*/}
      <Navbar title="My_app" aboutText="About" />
      {/* Here we imported navbar but with props */}
    </>
  );
}

export default App;
