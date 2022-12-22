import React,{useEffect, useState} from 'react'
import axios from 'axios';
 const UserDashboard= () => {
    const[data,setData]=useState([{}]);
    useEffect(()=>{
        getUser();
   },[]);
    const  getUser =async()=>{
        await axios 
        .get("http://localhost:3004/posts")
        .then((res)=>setData(res.data)); 
    };
   
  return (
    <div>
        <h1>
            UserDashboard
        </h1>
        <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">fullName</th>
      <th scope="col">Desgination</th>
      <th scope="col">Email</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {data && data.map((user,index) => (
        <tr key={index}>
            <th scope="row">{user.id}</th>
            <td>{user.name}{user.Lastname}</td>
            <td>{user.Desgination}</td>
            <td>{user.Email}</td>
            <td
                style={{display:"flex",justifyContent:"center"}}>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
                    <button className='btn btn-danger' 
                    // onClick={()=>handleDelete(user.id)}
                    >Delete</button>

            </td>
        </tr>
    )
    )}
  </tbody>
</table>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
    
  )
}
export default UserDashboard