import React, { useState } from 'react';

const User = (props) => {
    // console.log(props);
   const {name,email,picture,website,phone} = props.user;
   const fullName = name.first + '' + name.last
   const handleAddMember = props.handleAddMember;
   const [mobile,setMoblile] = useState("");

   const userStyle = {
       border: '2px solid green',
       margin: '10px',
       borderRadius: '10px',
       padding: '10px',
       display: 'flex',
       width: '40%',
   }

 const displayPhone = () => setMoblile(phone)
    return (
        <div style={userStyle}>
<div style={{marginTop: '25px'}}>
  <img src={picture.large} alt=""/>
</div>


            <div style={{marginLeft: '20px'}}>
             <h1>Name: {fullName}</h1>
             <p>email: {email}</p>
             <p><a target="blank" href={website}>Learn about me</a></p>
             <p>Phone: {mobile}</p>
             <button onClick={displayPhone} >Show Phone Number</button>
             <button onClick={()=>handleAddMember(fullName)}>Add me</button>
             </div>
        </div>
    );
};

export default User;