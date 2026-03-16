
import {useState} from 'react'
export default function CreateStock(){
const[form,setForm]=useState({ticker:'',company:'',price:'',volume:''})
const change=e=>setForm({...form,[e.target.name]:e.target.value})
const submit=async e=>{
e.preventDefault()
await fetch('/api/admin/stocks',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+localStorage.getItem('token')},body:JSON.stringify(form)})
alert('Stock created')
}
return(
<div style={{padding:20}}>
<h2>Create Stock</h2>
<form onSubmit={submit}>
<input name="ticker" placeholder="Ticker" onChange={change}/><br/><br/>
<input name="company" placeholder="Company" onChange={change}/><br/><br/>
<input name="price" placeholder="Initial Price" onChange={change}/><br/><br/>
<input name="volume" placeholder="Volume" onChange={change}/><br/><br/>
<button>Create</button>
</form>
</div>
)
}
