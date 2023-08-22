import './App.scss';

import AddNewProduct from './components/AddNewProduct';
import Nav from './components/Navigation/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Product from './components/Products/Product';
import Weather from './components/Weather/Weather';
import OtpApp from './components/OTP App/OtpApp';
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route
          path='/'
          exact>
          <div className='App'>
            <div className='content-left'>
              <Product />
            </div>
            <div className='content-right'>
              <AddNewProduct />
            </div>
          </div>
        </Route>
        <Switch>
          <Route path='/product'>
            <Product />
          </Route>
          <Route path='/weather'>
            <Weather />
          </Route>
          <Route path='/otp'>
            <OtpApp />
          </Route>
          <Route path='*'>
            <div>
              <h1>NOT FOUND</h1>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
