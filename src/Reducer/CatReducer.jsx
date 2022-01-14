export const getProductsReducer = (state=[],action)=>{

    if (action.type=="FIND") {
        return action.payload
        
    }
    else{
        return state
    }

}


export const searchReducer = (state="",action)=>{
    if (action.type=="SEARCH") {
        return action.payload
    }
    else{
        return state
    }
}