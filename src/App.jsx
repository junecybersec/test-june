
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Stocks from './pages/Stocks'
import CreateStock from './pages/CreateStock'
import Navbar from './components/Navbar'

export default function App(){
return(
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/stocks" element={<Stocks/>}/>
<Route path="/admin/create-stock" element={<CreateStock/>}/>
</Routes>
</BrowserRouter>
)
}
