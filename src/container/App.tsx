
import AdminMessages from '../Pages/messageStorage';
import Profile from './Container';
import { Routes, Route } from "react-router-dom";


function App() {

  return (
  
      <Routes>
        <Route path="/" element={<Profile/>}></Route>
        <Route path="/Admin" element={<AdminMessages/>}></Route>
      </Routes>

  );
}

export default App;