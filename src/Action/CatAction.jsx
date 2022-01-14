import axios from "axios";
import { useState } from "react";

export const getProducts = (dataCat)=> async(dispatch)=>{

dispatch({type:'FIND',payload:dataCat})
    
    }
// export const searchText =(search)=>async (dispatch)=>dispatch({type:'SEARCH',payload:search})
