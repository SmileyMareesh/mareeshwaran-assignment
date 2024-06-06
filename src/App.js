import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './home/Home'
import User from './home/User';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<User />}/>
          <Route path="details/:id" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}



export default App;
