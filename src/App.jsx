import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './components/SignUp';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
    )
}

export default App;
