import {
    PRODUCT_SUCCESS,
    PRODUCT_ERROR,
    PRODUCT_LOADING,
    CURRENT_PRODUCT_LOADING,
    CURRENT_PRODUCT_ERROR,
    CURRENT_PRODUCT_SUCCESS,
  } from "./actionTypes"


const initState ={
    laoding:false,
    error:false,
    products:[]
}

const productReducer=(state=initState,action)=>{

    switch(action.type){

        case PRODUCT_LOADING  :
        return {...state, loading: true}

        case PRODUCT_ERROR :
            return {...state, error:true, loading: false}

        case PRODUCT_SUCCESS:
            return {...state, loading: false, error:false, products:action.payload}  

        
            case CURRENT_PRODUCT_LOADING  :
                return {...state, loading: true}
        
            case CURRENT_PRODUCT_ERROR :
                    return {...state, error:true, loading: false}
        
            case CURRENT_PRODUCT_SUCCESS:
                    return {...state, loading: false, error:false, currentProduct:action.payload}      

            
        default :
        return state    
    }

}

export {productReducer};