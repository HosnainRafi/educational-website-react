import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route  } from 'react-router-dom';
import Header from './Componant/Header/Header';
import Footer from './Componant/Footer/Footer';
import Home from './Componant/Home/Home';
import About from './Componant/About/About';
import ContactUs from './Componant/ContactUs/ContactUs';
import Courses from './Componant/Courses/Courses';
import NotFound from './Componant/NotFound/NotFound';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path= "/home">
            <Home></Home>
          </Route>
          <Route exact path= "/">
            <Home></Home>
          </Route>
          <Route path= "/courses">
            <Courses></Courses>
          </Route>
          <Route path= "/about">
            <About></About>
          </Route>
          <Route path= "/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path= "*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
