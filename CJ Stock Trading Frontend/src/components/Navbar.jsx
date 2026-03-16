
import {Link} from 'react-router-dom'
export default function Navbar(){
return(
<nav style={{padding:20,borderBottom:'1px solid #ccc'}}>
<Link to="/">Home</Link> | 
<Link to="/stocks">Stocks</Link> | 
<Link to="/register">Register</Link> | 
<Link to="/login">Login</Link> | 
<Link to="/admin/create-stock">Admin</Link>
</nav>
)
}
