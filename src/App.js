import react from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// component
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

// pages
import LandingPage from './Pages/LandingPage'
import Register from './Pages/Register'
import Login from './Pages/Login'


class App extends react.Component{
  render(){
    return(
      <>
        <BrowserRouter>
          <Navbar/>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route path='/Register' component={Register} />
              <Route path='/Login' component={Login} />
            </Switch>   
          <Footer/>
        </BrowserRouter>
      </>
    )
  }
}

export default App;