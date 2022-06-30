import React from "react";
//import {BrowserRouter,Route} from 'react-router-dom'

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="app">
//         <Navbar />
//         <Header />
//         <Route>
//           <About />
//         </Route>

//         <Work />
//         <Skills />
//         <Testimonial />
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// };
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
  
};

export default App;
