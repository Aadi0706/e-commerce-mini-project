
// import {useDispatch} from "react-redux";
import {
    PRODUCT_SUCCESS,
    PRODUCT_ERROR,
    PRODUCT_LOADING,
    CURRENT_PRODUCT_LOADING,
    CURRENT_PRODUCT_ERROR,
    CURRENT_PRODUCT_SUCCESS,
  } from "./actionTypes"

const handleSuccess = (payload)=>({
    type: PRODUCT_SUCCESS,
    payload
});

const handleLoading = ()=>({
    type:PRODUCT_LOADING,
});

const handleError = ()=>({
    type:PRODUCT_ERROR,
});

// const dispatch = useDispatch();
const takeData=(dispatch)=>{
    
    dispatch(handleLoading())
    fetch("http://localhost:8000/products")
    .then((res)=>res.json())
    .then((res)=>dispatch(handleSuccess(res)))
    .catch(()=>dispatch(handleError()))
}


const storeCurrentProductSuccess = (payload)=>({
    type: CURRENT_PRODUCT_SUCCESS,
    payload
});

const handleCurrentProductLoading = ()=>({
    type:CURRENT_PRODUCT_LOADING
});

const handleCurrentProductError = ()=>({
    type:CURRENT_PRODUCT_ERROR
});

// const dispatch = useDispatch();
const getCurrentProductData =(id)=>(dispatch)=>{
    
    dispatch(handleCurrentProductLoading())
    fetch(`http://localhost:8000/products/${id}`)
    .then((res)=>res.json())
    .then((res)=>dispatch(storeCurrentProductSuccess(res)))
    .catch(()=>dispatch(handleCurrentProductError()))
}
export {takeData,getCurrentProductData}