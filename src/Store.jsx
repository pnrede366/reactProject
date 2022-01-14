import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension"
import { getProductsReducer, searchReducer } from './Reducer/CatReducer'



const rootReducer = combineReducers({
    getProductsReducer : getProductsReducer,
    searchReducer:searchReducer
})


const store  = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))



export default store