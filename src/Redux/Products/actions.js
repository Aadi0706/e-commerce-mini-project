
// import {useDispatch} from "react-redux";

const getData = (payload)=>({
    type: 'STORE_DATA',
    payload
});

const handleLoading = ()=>({
    type:"IS LOADING"
});

const handleError = ()=>({
    type:"ERROR"
});

// const dispatch = useDispatch();
const takeData=(dispatch)=>{
    
    dispatch(handleLoading())
    fetch("http://localhost:8000/products")
    .then((res)=>res.json())
    .then((res)=>dispatch(getData(res)))
    .catch(()=>dispatch(handleError()))
}

export {getData, handleError,handleLoading,takeData}