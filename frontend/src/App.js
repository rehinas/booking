import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Frontpage from './Components/Frontpage';
import Signin from './Components/Signin';
import SignUp from './Components/SignUp';
import Addmovie from './Components/Addmovie';
import Addcast from './Components/Addcast';
import Userdashboard from './Components/Userdashboard';
import MovieDtails from './Components/MovieDtails';
import Rating from './Components/Rating';
import Book from './Components/Book';
import SeatSelection from './Components/SeatSelection';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path='/sign' element={<SignUp/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path='/add' element={<Addmovie/>}/>
          <Route path='/cast' element={<Addcast/>}/>
          <Route path='/user' element={<Userdashboard/>}/>
          <Route path="/details/:id" element={<MovieDtails/>} />;
          <Route path="/book/:id" element={<Book/>} />;
          <Route path='/rat' element={<Rating/>}/>
          <Route path='/seat' element={<SeatSelection/>}/>
      



        </Routes>
      </div>
    </Router>
  );
}

export default App;

