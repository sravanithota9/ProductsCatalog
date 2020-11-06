import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <main
      className={`
        px-8 
        sm:px-12 sm:mx-2 
        md:px-24 md:mx-2 
        lg:px-36 lg:mx-2 
        xl:px-48 xl:mx-2 
        flex justify-center items-center 
        flex-col mt-8
      `}>
      <Home />
    </main>
  );
}

export default App;
