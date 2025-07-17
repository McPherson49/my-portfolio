import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from './main';



function App() {
  return (
    <>
      <Router basename={window.location.pathname || ""}>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>      
      </Router>
    </>
  );
}

export default App;

