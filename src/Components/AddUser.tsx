// import React, { useState } from 'react'
// import { addUserType } from '../ReduxToolkitSaga/Reducers/userSlice';
// import { useDispatch, useSelector } from 'react-redux/es/exports';

// const AddUser = () => {

//     const myData = useSelector((state: any)=> state.users.users);
//     const dispatch = useDispatch();
//     const [valueChange, setValueChange] = useState<any>({
//         name: "",
//         email: "",
//       });
//       const [edit, setEdit] = useState<any>({
//         isEdit: false,
//         // user: {},
//       });
//       const handleInputChange = (e: any, keyV: string) => {
//         setValueChange((prev: any) => {
//           return {
//             ...prev,
//             [keyV]: e.target.value,
//           };
//         });
//       };

//       const handleSubmit = () => {
//         if (valueChange.name !== "")
//         dispatch(addUserType(valueChange));
//         setValueChange((prev: any)=>{
//           return{
//             ...prev,
//             name: "",
//             email: "",
//             username: "",
//           }
//         })
      
//       };

//     //   user Edit 

//     const handleEdit = (id: any) => {
//         setEdit((prev: any) => {
//           return {
//             ...prev,
//             isEdit: true,
//           };
//         });
//         const user = myData.users.find((item: any) => {
//           return item.id === id;
//         });
    
//         setValueChange(user);
//       };
      


//   return (
//         <>
//            <div className='container'>
//             <input  className='form-control' disabled/><br/><br/>
//             <input  className='form-control' id="name"
//                 type="text"
//                 value={valueChange.name}
//                 onChange={(e:any) => handleInputChange(e, "name")}
//                  placeholder='Enter Name' /><br/><br/>
//             <input  className='form-control'
//              id="email"
//              type="text"
//              value={valueChange.email}
//              onChange={(e:any) => handleInputChange(e, "email")}
             
//             placeholder='Enter Email' /><br/><br/>
//             <input className='form-control' placeholder='Enter username'
//              id="username"
//              type="text"
//              value={valueChange.username}
//              onChange={(e:any) => handleInputChange(e, "username")}
//              /><br/><br/>
//             <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
//          </div>
        
        
//         </>
//   )
// }

// export default AddUser
import React from 'react'

const AddUser = () => {
  return (
    <div>
      
    </div>
  )
}

export default AddUser
