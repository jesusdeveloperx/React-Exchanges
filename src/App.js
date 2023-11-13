import './App.css';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import ConversorPage from './ConversorPage/ConversorPage';


function App() {
  return (
    <Router>
    <div className="App">
      <div className="App-header">
        <Routes>
          
      <Route path="/" element={<ConversorPage/>}/>
      </Routes>

      </div>
    </div>
    </Router>
  );
}

export default App;
