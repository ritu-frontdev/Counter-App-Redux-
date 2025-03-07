import { createStore } from 'redux';
// import { configureStore } from "@reduxjs/toolkit";
import counterreducer from './reducer';
// const store =  configureStore({
//     reducer:counterreducer
// })
const store = createStore(counterreducer)
export default store;


