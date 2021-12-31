import { ADDNAME, DECREMENT, INCREMENT, TOGGLESHOW } from "./types";


const initialState= {

    count:0,

    show:false,

    users: [{name:'ali'}, {name:"ahmed"}]
 

}


const Reducer= (state=initialState,  action)=>{


    switch (action.type) {
        case INCREMENT: return {...state, count: state.count+  action.payload }
            
       case DECREMENT: return {...state, count:  state.count>0 ?  state.count-1 :0  }

       case TOGGLESHOW: return {...state,  show: !state.show }

       case ADDNAME: return {...state, users: [...state.users,action.payload ] }
    
        default:
           return state
    }
}

export default Reducer