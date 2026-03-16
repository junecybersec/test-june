
import {useState} from 'react'
export default function Login(){
const[username,setUsername]=useState('')
const[password,setPassword]=useState('')
const submit=async e=>{
e.preventDefault()
const res=await fetch('/api/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username,password})})
const data=await res.json()
localStorage.setItem('token',data.token)
alert('Logged in')
}
return(
<div style={{padding:20}}>
<h2>Login</h2>
<form onSubmit={submit}>
<input placeholder="Username" onChange={e=>setUsername(e.target.value)}/><br/><br/>
<input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/><br/><br/>
<button>Login</button>
</form>
</div>
)
}
