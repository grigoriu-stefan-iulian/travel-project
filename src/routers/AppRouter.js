import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import Destination from '../components/Destination'
// import Dicount from '../components/Discount'
// import About from '../components/About'
// import Blog from '../components/Blog'
// import Contact from '../components/Contact'
class TravelProject extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/destination" component={Destination} />
          </Switch>
        </div>

      </BrowserRouter>

    )
  }
}

export default TravelProject