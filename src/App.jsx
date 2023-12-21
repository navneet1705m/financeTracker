import "@fontsource/inter";
import Home from "./pages/home/home"
import Signup from "./pages/signup/signup"
import Login from "./pages/login/Login"
import Transacation from "./transacation";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route,Navigate, Link} from 'react-router-dom';
import { UseAuthContext } from "./hooks/useAuthContext";

function App() {
  const {authIsReady,user} = UseAuthContext();
  return (
  <div className="relative w-full h-full wrapper">
  
    {authIsReady && (
        <Router>
        <Navbar/>
            <Routes>
                <Route exact path='/' element={user ? <Home/> : <Navigate to="/signup"/>}/>
                <Route path='/login' element={!user ? <Login/> : <Navigate to="/"/>}/>
                <Route path='/signup' element={!user ? <Signup/> : <Navigate to="/"/>}/>
            </Routes>
        </Router>
        )}
        <div className="fixed bottom-0 flex items-center justify-between w-full px-3 py-2 text-sm bg-white"><p>Contact <a  className="text-indigo-500" href="https://twitter.com/Navneetmalviy15">@Navneetmalviy15</a></p>
        <p>Created by <a className="text-indigo-500 "href="https://www.linkedin.com/in/navneet-malviya/"> Navneet Malviya 🙂</a></p></div>
    </div> 
  );
}
export default App;
