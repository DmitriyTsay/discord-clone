import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'

// DummyData
import {data} from './dummydata';

// Components
import SideNav from './components/SideNav';

// Pages
import HomePage from './pages/HomePage';
import ChannelPage from './pages/ChannelPage';

const App = () => {
  return (
    <div className='app'>
      <HashRouter>
        <SideNav />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/channel/' element={<ChannelPage />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App