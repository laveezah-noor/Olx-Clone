import { combineReducers } from 'redux';
import auth_reducer from './auth_reducer';
import app_reducer from './app_reducer';

export default combineReducers({
    auth: auth_reducer,
    app: app_reducer
})


// const INITIAL_STATE = {
//     users: [
//         {
//             name: "Ghous Ahmed",
//             email: "ahmed@gmail.com"
//         }
//     ]
// }

// export default (state = INITIAL_STATE, action) => {
//     console.log('action ==>',action)
//     switch (action.type) {
//         case "SETDATA":
//             return ({
//                 ...state,
//                 users: [...state.users,action.payload]
//             })
//         default:
//            return state; 
//     }
    
// }