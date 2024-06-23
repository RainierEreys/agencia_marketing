import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//ESTO ES PARA USAR VARIABLES REDUX ----> HAY QUE INDICARLO FUERA DE ROUTER --------> VER ABAJO
import store from "./store";
import { Provider } from "react-redux";


import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Cases from "containers/pages/Cases";
import Services from "containers/pages/Services";
import Careers from "containers/pages/Careers";
import Blog from "containers/pages/Blog";
import AboutUs from "containers/pages/AboutUs";
import Contact from "containers/pages/Contact";

function App() {
    return ( 
      <Provider store={store}>
        <Router>
          <Routes>
            {/*ERROR DISPLAY*/}
            <Route path="*" element={<Error404/>} />

            {/*DISPLAY HOME*/}
            <Route path="/" element={<Home/>} />

            {/*DISPLAY CASES*/}
            <Route path="/cases" element={<Cases/>} />

            {/*DISPLAY SERVICES*/}
            <Route path="/services" element={<Services/>} />

            {/*DISPLAY CAREERS*/}
            <Route path="/careers" element={<Careers/>} />

            {/*DISPLAY CAREERS*/}
            <Route path="/blog" element={<Blog/>} />

            {/*DISPLAY CAREERS*/}
            <Route path="/about-us" element={<AboutUs/>} />

            {/*DISPLAY CAREERS*/}
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>
      </Provider>
      
    );
}

export default App;