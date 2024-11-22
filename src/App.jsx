import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'

function App() {
  return (
      <div className="flex flex-col items-center bg-gray-100 min-h-screen">
          <header className="w-full bg-white shadow-md p-4 flex items-center justify-center">
              <img src="https://placehold.co/30x30" alt="School logo" className="mr-2" />
              <h1 className="text-lg font-bold">SMK Prakarya Internasional</h1>
          </header>
          <main className="flex flex-col items-center w-full p-4">
              <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-xs mb-4">
                  <div className="flex items-center mb-4">
                      <i className="fas fa-user-circle text-4xl mr-4"></i>
                      <div>
                          <h2 className="text-xl font-bold">Kesiswaan</h2>
                          <p className="text-gray-500">Admin</p>
                      </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2 mb-2">
                      <div className="flex justify-between items-center">
                          <span>Keamanan</span>
                          <i className="fas fa-chevron-down"></i>
                      </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2 mb-2">
                      <div className="flex justify-between items-center">
                          <span>Bantuan</span>
                          <i className="fas fa-chevron-down"></i>
                      </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2 mb-2">
                      <div className="flex justify-between items-center">
                          <span>Kelola Histori</span>
                          <i className="fas fa-chevron-down"></i>
                      </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2 mb-2">
                      <div className="flex justify-between items-center">
                          <span>Simpan Histori</span>
                          <i className="fas fa-chevron-down"></i>
                      </div>
                  </div>
                  <button className="bg-red-500 text-white w-full py-2 rounded-lg">Keluar</button>
              </div>
          </main>
          <footer className="w-full bg-blue-500 p-4 flex justify-around fixed bottom-0">
              <i className="fas fa-home text-white text-2xl"></i>
              <i className="fas fa-users text-white text-2xl"></i>
              <i className="fas fa-clock text-white text-2xl"></i>
              <i className="fas fa-bars text-white text-2xl"></i>
          </footer>
      </div>
  );
}

export default App
