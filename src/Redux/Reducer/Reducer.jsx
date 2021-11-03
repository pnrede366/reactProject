const initialState = {
    cart: []
}
const Reducers = (state=[],action) => {
    if (action.type=='addToCart') {
            return [
                ...state,{cart:action.data}
            ]
    }
    else{
        return state
    }

}

export default Reducers
