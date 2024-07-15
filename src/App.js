import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogRead from './Component/BlogerRW/BlogRead.jsx';
import UserProvider from './Component/auth/UserProvider';
import BlogWirte from './Component/BlogerRW/BlogWirte.js';
import BlogWR from './Component/BlogerRW/BlowShow.js';
import Tera from './Component/MaterialUILearn/Tera';
import Profile from './Component/Profile/Profile';
import FAB from './Component/MaterialUILearn/FAB';
import Sing from './Component/Sing';
import Ant from './Component/Ant';
import React from "react";



class App extends React.Component {

  render() {
    return (
      <>
        <UserProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Ant />} />
              <Route path="/Sing-up" element={<Sing />} />
              <Route path="/FAB" element={<FAB />} />
              <Route path="/create-blog" element={<BlogWirte />} />
              <Route path="/Tera" element={<Tera />} />
              <Route path="/views-detail" element={<BlogRead />} />
              <Route path="/profile-user" element={<Profile />} />
              <Route path="/profile" element={<BlogWR />} />
            </Routes>
          </Router>
        </UserProvider>
      </>
    );
  }
}
export default App;
