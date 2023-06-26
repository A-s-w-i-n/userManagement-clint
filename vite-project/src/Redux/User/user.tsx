import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE = {
    userId : "",
    username : "",
    image : ""
}

export  const userSlice =createSlice({
    name : 'user',
    initialState : INITIAL_STATE,
    reducers : {
        updateUser : (state,action)=>{
            state.username =action.payload.username
            state.userId =action.payload.userId
            state.image = action.payload.image
        }
    }
})
export default userSlice.reducer
export const {updateUser} =userSlice.actions

