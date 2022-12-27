import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './components/resources/scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const Home = React.lazy(() => import('./feature/home'))
const Login = React.lazy(() => import('./feature/login'))
const Logout = React.lazy(() => import('./feature/logout'))
const Page404 = React.lazy(() => import('./feature/404/Page404'))
const Page500 = React.lazy(() => import('./feature/500/Page500'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/logout" name="Logout Page" element={<Logout />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
