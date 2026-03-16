
import {useEffect,useState} from 'react'
export default function Stocks(){
const[stocks,setStocks]=useState([])
useEffect(()=>{
fetch('/api/stocks').then(r=>r.json()).then(setStocks)
},[])
return(
<div style={{padding:20}}>
<h2>Available Stocks</h2>
<table border="1" cellPadding="10">
<thead>
<tr><th>Ticker</th><th>Company</th><th>Price</th><th>Volume</th></tr>
</thead>
<tbody>
{stocks.map(s=>(
<tr key={s.ticker}>
<td>{s.ticker}</td>
<td>{s.company}</td>
<td>{s.price}</td>
<td>{s.volume}</td>
</tr>
))}
</tbody>
</table>
</div>
)
}
