import {useParams} from 'react-router-dom'
const ProductDetails=()=>{
    const state=useParams()
    return(
        <>
            <h1> this is product details pages</h1>
            <p> { state.productid}</p>
        </>
    )
}

export default ProductDetails;