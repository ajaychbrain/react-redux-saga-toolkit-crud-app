import {createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
    },

    reducers: {
        getUserType: (state:any) => {

        },
        getUserWithApi : (state: any,action: any)=>{
            state.users = [...action.payload];
        },
        addUserType: (state:any, action:any) => {
            console.log(action,"action")
        },
        addUserWithApi : (state: any, action: any) => {
            state.users = [...state.users, action.payload.data]
            
        },

        editItemData: (state: any, action: any) => {
            // console.log("called editItem");
          },
          editDataSuccess: (state: any, action: any) => {
            let i = null;
            // console.log(action.payload.id, "id");
            state.users.find((item: any, index: any) => {
              if (item.id === action.payload.id) {
                return (i = index);
              } else {
                return null;
              }
            });
      
            if (i !== null) state.users[i] = action.payload;
            else return;
            
          },

          removeItemData: (state: any, action: any) => {
            console.log("remove");
          },
          removeItemSuccess: (state: any, action: any) => {
            console.log(action.payload, "remove item sucess");
            // console.log(current(state));
            let myData=  state.users.filter(
              (item: any) => item.id !== action.payload
            );
            state.users = myData
          },

    }

})

export const {
    getUserType,
    getUserWithApi,
    addUserType,
    addUserWithApi,
    editItemData,
    editDataSuccess,
    removeItemData,
    removeItemSuccess

  } = userSlice.actions;
  export default userSlice.reducer;
  