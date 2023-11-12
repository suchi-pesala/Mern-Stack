import './App.css';
import Googleform from './Googleform';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protected from './Protected';

import UserAuth from './UserAuth';
import SignIn from './SignIn';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserAuth/>}/>
          <Route path="/" element={<Protected/>}>
            <Route path="/form" element={<Googleform/>}/>
          </Route>
          {/* <Route path="/form" element={<Googleform/>}/> */}
          <Route path="/signup" element={<Signup/>}/>
          <Route path='/login' element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
