import About from './components/about/About';
import Create from './components/create/Create';
import Update from './components/update/Update';
import Read from './components/read/Read';
import Login from './components/login/Login';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <Router>
    <div className="App">
         <Routes>
        <Route path='/read'  element={ <Read/> }/>
        <Route path='/create'  element={<Create/>} />
        <Route path='/update' element={<Update/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
       <Route path='/about' element={<About/>}/>
        </Routes>
    </div></Router>
  );
}

export default App;
