import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Publish } from './Components/Publish'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Blogs } from './pages/Blogs'
import { Blog } from './pages/Blog'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/' element={<Signin/>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/:id' element={<Blog></Blog>}></Route>
        <Route path='publish' element={<Publish></Publish>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
