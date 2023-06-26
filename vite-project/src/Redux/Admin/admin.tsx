import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE = {
    id : "",
    name : ""
}

export const adminSlice = createSlice({
    name : 'admin-edit',
    initialState : INITIAL_STATE,
    reducers :{
        changeUser  :(state,action)=>{
            state.id  =   action.payload.id
            state.name = action.payload.name
        }
    }

})

export const {changeUser} =adminSlice.actions
export default adminSlice.reducer