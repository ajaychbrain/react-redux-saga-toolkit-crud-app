import { takeLatest,put, call} from "redux-saga/effects";
import { addUserType, addUserWithApi, editDataSuccess, editItemData, getUserType, getUserWithApi, removeItemData, removeItemSuccess } from "../Reducers/userSlice";

import { addNewUser, deleteUser, fetchAllUser, updateUser } from "../../Api";

function* getUserData(): any {
    try {
      const allUser = yield call(fetchAllUser);
      // console.log(value);
      const response = allUser.data;
      // console.log(response, "res");
      yield put(getUserWithApi(response));
    } catch (error) {
      console.error("Somthing went wrong:", error);
    }
  }


  function* addUser(action: any): any {
    try {
      console.log(action.payload,"chekj");
      // const { name, username, email } = action.payload;
      const newUser = yield call(addNewUser, action.payload);
      console.log(newUser, "new User Added! " )
      yield put(addUserWithApi(newUser));
    } catch (error) {
      console.error("Error adding item:", error);
    }
  }
  
  function* editItem(action: any): any{
    try {
      const user = yield call(updateUser, action.payload);
      // console.log(user, action.payload, "user-saga");
      yield put(editDataSuccess(user.data));
    } catch (error) {
      console.log("error", error);
    }
  }
  
  function* removeItem(action: any) {
    try {
      console.log(action.payload);
      yield call(deleteUser, action.payload);
      yield put(removeItemSuccess(action.payload));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  }


  export default function* rootSaga() {
    yield takeLatest(getUserType, getUserData);
    yield takeLatest( addUserType, addUser);
    yield takeLatest(removeItemData, removeItem);
    yield takeLatest( editItemData, editItem);
    
  }