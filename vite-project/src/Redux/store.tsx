import { configureStore } from "@reduxjs/toolkit";
import userReducer from   './User/user'
import {persistReducer,persistStore} from 'redux-persist'
import adminReducer from './Admin/admin'
import storage from "redux-persist/lib/storage";

const presistConfig = {
    key : "root",
    storage 
}

const persistreducer = persistReducer(presistConfig,userReducer)
const persistAdminReduser = persistReducer(presistConfig,adminReducer)


export const Store  = configureStore({
    reducer : {
        user : persistreducer,
        admin : persistAdminReduser
    }
})


export const persistor = persistStore(Store)