import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home/Home'
import Destination from '../components/Destination'
import Discount from '../components/Discount'
import About from '../components/About'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import PageNotFound from '../components/PageNotFound'

class TravelProject extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container__outer bg-section-one bg-mask">
          <Header />
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/destination" component={Destination} exact={true} />
            <Route path="/discount" component={Discount} exact={true} />
            <Route path="/about" component={About} exact={true} />
            <Route path="/blog" component={Blog} exact={true} />
            <Route path="/contact" component={Contact} exact={true} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default TravelProject