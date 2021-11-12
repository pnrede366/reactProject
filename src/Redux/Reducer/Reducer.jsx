
const Reducers = (state=0,action) => {
    if (action.type=='add') {
            return state+1
    }
    else{
        return state
    }

}

export default Reducers
