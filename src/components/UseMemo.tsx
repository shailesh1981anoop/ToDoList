import { useState,useMemo } from "react"
import UserCard from "./UserCard"

function UseMemo() {
const UserList=[
{id:1,name:"shailesh"},
{id:1,name:"Anno"},
{id:1,name:"Arnav"},
{id:1,name:"Aarohi"}
]
 const [user,setUser]=useState(UserList);
 const[count,setCounter]=useState(0)
 const displaylist=useMemo(()=>user.map((use:any)=>{
    console.log("Preparing Card");
    return <UserCard data={use}/>
 }),[user]);

function setUserDetails(value:any)
{
    setUser([
        ...user,
        {
            id:user.length+1,
            name:value
        }
    ])
}

  return (
    <>
    <hr></hr>
    {count}
    <div>UseMemo HOOK</div>
     <hr/>
Entre Name:<input type="text" onBlur={(e)=>setUserDetails(e.target.value)}></input>
    {displaylist}
    <button onClick={()=>setCounter(count+1)}>Count+</button>

   
    </>
  )
}

export default UseMemo