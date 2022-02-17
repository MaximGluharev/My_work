
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashbord/Dashboard.jsx';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Library from './components/Library/Library';
import { useState } from 'react/cjs/react.development';
import Learn from './components/Learn/Learn';
import Games from './components/Games/Games';
import WriteIt from './components/Games/AppGames/Writeit';
import Checkit from './components/Games/AppGames/Checkit';
import Store from './context';
import { useCookies } from 'react-cookie';





function App() {
  const [library, setLibrary] = useState(JSON.parse(localStorage.getItem("library")) || []);
  const [wordIndex, setWordIndex] = useState(0)
  const [correctWords, setCorrectWords] = useState(0)
  const [errorWords, setErrorWords] = useState(0)
  const [playWords, setPlayWords] = useState(library.slice(-10))
  const [cookie, setCookie] = useCookies(['points'])
  const [points, setPoints] = useState(+cookie.points || 0)
  
  
 
  
  
  return (
    
      <div className="App">
        <Router>
          <Store.Provider value={{correctWords, setCorrectWords, errorWords, setErrorWords, playWords, cookie, setCookie}}>
            <Header />
            <Routes>
            
              <Route path="/dashboard" element={<Dashboard points={points} />}></Route>
              
              <Route path="/library" element={<Library library={library} setLibrary={setLibrary} />}></Route>

              <Route path="/games" element={<Games />}></Route>

              <Route path="games/game/write-it" element={<WriteIt wordIndex={wordIndex} setWordIndex={setWordIndex} library={library} 
                
                points={points}
                setPoints={setPoints}/>}>
                
              </Route>

              <Route path="games/game/check-it" element={<Checkit wordIndex={wordIndex} setWordIndex={setWordIndex} library={library} 
                
                points={points}
                setPoints={setPoints}/>}>

              </Route>

              <Route path="/learn" element={<Learn library={library}/>}></Route>
              
            
            
            </Routes>
          </Store.Provider>
        </Router>

    </div>
  );
}

export default App;
