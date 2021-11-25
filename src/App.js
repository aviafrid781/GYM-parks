import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Contaxt/authProvider';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Package from './Pages/Package/Package';
import ContractUs from './Pages/ContractUs/ContractUs';

function App() {
  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/package">
              <Package></Package>

            </PrivateRoute>

            <PrivateRoute path="/contract">
              <ContractUs></ContractUs>

            </PrivateRoute>



            <PrivateRoute path="/details/:serviceId">
              <ServiceDetails></ServiceDetails>

            </PrivateRoute>






            <Route path="*">
              <NotFound></NotFound>
            </Route>


          </Switch>
          <Footer></Footer>
        </BrowserRouter>



      </AuthProvider>

    </div>
  );
}

export default App;
