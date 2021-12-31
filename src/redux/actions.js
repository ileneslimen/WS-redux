import { ADDNAME, DECREMENT, INCREMENT, TOGGLESHOW } from "./types"


export const increment=(payload)=>{

    return {  type: INCREMENT,
               payload }
}


export const decrement=()=>{


return {  type: DECREMENT  }

}


export const toggleshow=()=>{


    return {type: TOGGLESHOW}
}

export const addname=(payload)=>{

    return {
        type: ADDNAME,
        payload
    }
}