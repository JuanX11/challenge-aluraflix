import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeHeaderComponent from './components/headers/HomeHeader';
import HomeScreen from './screens/HomeScreen';
import './index.css';
import NuevoVideoScreen from './screens/NuevoVideoScreen';
import FooterComponent from './components/footer';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <HomeHeaderComponent />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/nuevovideo" element={<NuevoVideoScreen />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);
