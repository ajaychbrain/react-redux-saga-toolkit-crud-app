import React, { useState } from 'react'
import { addUserType, editItemData, removeItemData } from '../src/ReduxToolkitSaga/Reducers/userSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import UserList from './Components/UserList';

function App() {


  const myData = useSelector((state: any)=> state.users);
    const dispatch = useDispatch();
    const [valueChange, setValueChange] = useState<any>({
        name: "",
        email: "",
        username:"",
      });
      const [edit, setEdit] = useState<any>({
        isEdit: false,
        // user: {},
      });
      const handleInputChange = (e: any, keyV: string) => {
        setValueChange((prev: any) => {
          return {
            ...prev,
            [keyV]: e.target.value,
          };
        });
      };

      const handleSubmit = () => {
        if (valueChange.name !== "")
        dispatch(addUserType(valueChange));
        setValueChange((prev: any)=>{
          return{
            ...prev,
            name: "",
            email: "",
            username: "",
          }
        })
      
      };

    //   user Edit 

    const handleEdit = (id: any) => {
        setEdit((prev: any) => {
          return {
            ...prev,
            isEdit: true,
          };
        });
        const user = myData.users.find((item: any) => {
          return item.id === id;
        });
    
        setValueChange(user);
      };
      

      const handleSave = () => {
        // console.log(iChange);
        setEdit((prev: any) => {
          return {
            ...prev,
            isEdit: false,
          };
        });
        setValueChange((prev: any)=>{
          return{
            ...prev,
            name: "",
            email: "",
            username:"",
          }
        })
        dispatch(editItemData(valueChange));
      };

      const handleCancel = () => {
        setEdit((prev: any) => {
          return {
            ...prev,
            isEdit: false,
          };
        });
        setValueChange({
          name: "",
          email: "",
          username: "",
        });
      };

      const handleRemove = (id: any) => {
        console.log(dispatch(removeItemData(id)),"hello")
        dispatch(removeItemData(id));
        
      };




  return (
    <>
    <div className="container">
  <div className="row">
    <div className="col">
    <input  className='form-control' disabled/><br/><br/>
            <input  className='form-control' id="name"
                type="text"
                value={valueChange.name}
                onChange={(e:any) => handleInputChange(e, "name")}
                 placeholder='Enter Name' /><br/><br/>
            <input  className='form-control'
             id="email"
             type="text"
             value={valueChange.email}
             onChange={(e:any) => handleInputChange(e, "email")}
             
            placeholder='Enter Email' /><br/><br/>
            <input className='form-control' placeholder='Enter username'
             id="username"
             type="text"
             value={valueChange.username}
             onChange={(e:any) => handleInputChange(e, "username")}
             /><br/><br/>
              {
                edit.isEdit ? (<>
                  <button className='btn btn-primary' onClick={handleSave}>Update</button>
                  <button className='btn btn-warning' onClick={handleCancel}>Cancel</button>
                  </>
                ): (
                  <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
                )
              }
    </div>

    <div className="col">
    <UserList
    users={myData.items}
    onEdit={handleEdit}
    onDelete={handleRemove}
    
    />
    </div>
    </div>
</div>
    




















    















    
 
    
    </>
  );
}

export default App;
