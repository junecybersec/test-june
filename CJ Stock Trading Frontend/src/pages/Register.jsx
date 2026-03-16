
import {useState} from 'react'
export default function Register(){
const[form,setForm]=useState({name:'',username:'',email:'',password:''})
const change=e=>setForm({...form,[e.target.name]:e.target.value})
const submit=async e=>{
e.preventDefault()
await fetch('/api/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)})
alert('User registered')
}
return(
<div style={{padding:20}}>
<h2>Register</h2>
<form onSubmit={submit}>
<input name="name" placeholder="Name" onChange={change}/><br/><br/>
<input name="username" placeholder="Username" onChange={change}/><br/><br/>
<input name="email" placeholder="Email" onChange={change}/><br/><br/>
<input type="password" name="password" placeholder="Password" onChange={change}/><br/><br/>
<button>Create Account</button>
</form>
</div>
)
}
