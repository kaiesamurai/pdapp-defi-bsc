
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

function NFTTile (data) {
    const newTo = {pathname:"/nftPage/"+data.data.tokenId}

    return (

      <Link  to={newTo}>
      <div className="w-64 h-64 ml-4 mb-4 mr-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-red-900 dark:border-red-500">
  <div className="max-h-40 overflow-hidden">
    <img className="rounded-t-lg w-full" src={data.data.image} alt="product image" />
  </div>
  <div className="px-4 pb-2 pt-1">
  <h5 className="text-xl font-semibold tracking-tight text-red-600 text-red ">{data.data.name}</h5>
    
    
        <span className="text-2xl text-white-900 text-white">{data.data.price} MATIC</span>
       {/* <a href="#" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Add to cart</a>  */}
    
</div>
</div>

        </Link>
    )
}

export default NFTTile;