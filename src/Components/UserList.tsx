import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserType } from '../ReduxToolkitSaga/Reducers/userSlice';



const UserList = ({ users, onEdit, onDelete }: any) => {

    const myData = useSelector((state: any)=> state.users.users);
    console.log(myData,"User Data");
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(getUserType(),"fetch")
        dispatch(getUserType());
      }, [dispatch]);

  return (
    <div>
    <table className="table">
<thead>
  <tr>
    <th scope="col">ID</th>
    <th scope="col">Name</th>
    <th scope="col">Email</th>
    <th scope="col">UserName</th>
    <th scope="col">Edit</th>
    <th scope="col">Delete</th>
  </tr>
</thead>
<tbody>
    {
      myData.map((item: any, id: number)=>{
        return (
          <>
          <tr key={id}>
      <th scope="row">{id + 1}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.username}</td>
        <td>  <button className='btn btn-success' onClick={() => onEdit(item.id)}>Edit</button></td>
      <td><button className='btn btn-danger'  onClick={() => onDelete(item.id)}>
        Delete</button></td>
    </tr>
    {/* <MyForm edit={edit} /> */}
          
          </>
        )
      })
    }
   
  </tbody>
</table>
  </div>
  )
}

export default UserList
