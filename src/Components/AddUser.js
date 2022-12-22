// import React from 'react'
import React, { useState,useEffect } from 'react';
import axios from "axios";
// import './index.css';
import './AddUser.css';
const AddUser = () => {
    const[data,setData]=useState([{}]);
    useEffect(()=>{
        getUser();
   },[]);
   const  getUser =async()=>{
    await axios 
    .get("http://localhost:3004/posts")
    .then((res)=>setData(res.data)); 
};
    const handleforsubmit =async(e)=>{
        let response =await axios.post("http://localhost:3004/posts",formData)
        console.log(response,"gdcsgdjg")
        if (response){
          alert("susesses")
        }
        else{
          alert("something  Went wrong")
        }


        SetFormData({
            name:'',
            Lastname:"",
            Email:"",
            Desgination:""

        })
        getUser();
    }
    const [formData,SetFormData]= useState({
        name:'',
        Lastname:"",
        Email:"",
        Desgination:""
      });
      const [updateData,setUpdateData]= useState({
        name:'',
        Lastname:"",
        Email:"",
        Desgination:"",
        
      });
      const handleDelete =async (id) =>{
        await axios.delete("http://localhost:3004/posts/"+ id).then((res)=>alert("deleted sussusfully"))
         getUser(); 
        };
        const handleUpdate=async()=>{
       await axios.put(`http://localhost:3004/posts/${updateData.id}`,updateData)
       .then((res)=>alert(" sussusfully")) 
       getUser(); 
        }
      
  return (
    <div className='container'>
    <div className='row'>
        <div className="col-md-12">
            <h1> Add user form</h1>
        </div>
        <div className="mb-2">
<label  className="form-label">firstname</label>
<input type="text" 
id="name"
name="name"
className="form-control" 
value={formData.name || ""}
onChange={(e)=> SetFormData({...formData, name:e.target.value})}

/>
</div>
<div className="mb-3">
<label  className="form-label">Lastname</label>
<input type="text" className="form-control"
id="Lastname"
name="Lastname" 
value={formData.Lastname || ""}
onChange={(e)=> SetFormData({...formData, Lastname:e.target.value})}
/>

</div>
<div className="mb-3">
<label  className="form-label">Email </label>
<input type="text" className="form-control"
id="Email"
name="Email"
value={formData.Email || ""}
onChange={(e)=> SetFormData({...formData, Email:e.target.value})} 
/>

</div>
<div className="mb-3">
<label  className="form-label">Desgination</label>
<input type="text" className="form-control"
id="Desgination"
name="Desgination"
value={formData.Desgination || ""}
onChange={(e)=> SetFormData({...formData, Desgination:e.target.value})} 
/>

</div>
<div className="mb-3">
<button className='btn btn-success' onClick={handleforsubmit} > Add</button>
</div>
    </div>
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
                    <button  className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal" 
                        onClick={()=>setUpdateData({
                          name:user.name,
                          Lastname:user.Lastname,
                          Desgination:user.Desgination,
                          Email:user.Email,
                          id:user.id
                        })
                        }
                         >edit</button>
 {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

                    <button className='btn btn-danger' 
                    onClick={()=>handleDelete(user.id)}
                    >Delete</button>

            </td>
        </tr>
    )
    )}
  </tbody>
</table>
    </div> 
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">update user</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="mb-2">
  <label for="exampleFormControlInput1" className="form-label">firstname</label>
  <input type="text"
   className="form-control" 
   value ={updateData.name} 
    onChange={(e)=> setUpdateData({...updateData,name:e.target.value})}
  />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Lastname</label>
  <input type="text" className="form-control" 
    value ={updateData.Lastname} 
    onChange={(e)=> setUpdateData({...updateData,Lastname:e.target.value})}
   />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email </label>
  <input type="text" className="form-control" 
  value ={updateData.Email} 
    onChange={(e)=> setUpdateData({...updateData,Email:e.target.value})}
   />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Desgination</label>
  <input type="text" className="form-control" 
    value ={updateData.Desgination} 
   onChange={(e)=> setUpdateData({...updateData,Desgination:e.target.value})}
   /> 
</div>


        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
        onClick={()=>handleUpdate()}
        >Update</button>
      </div>
    </div>
  </div>
</div> 

    
    </div>
    
  )
}

export default AddUser