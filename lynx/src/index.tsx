import { root } from '@lynx-js/react';
import { MemoryRouter, Routes, Route } from 'react-router';

import { App } from './App.jsx';
import Home from './pages/Home.jsx';
import Tabs from './pages/Tabs.jsx';
import Login from './auth/Login.jsx';
import Register from './auth/Register.jsx';
import Listings from './pages/Listings.jsx';
import Favorites from './pages/Favorites.jsx';
import Profile from './pages/Profile.jsx';



root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/home" element={<Home />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/tabs" element={<Tabs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
    </Routes>
  </MemoryRouter>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
