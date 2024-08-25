import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductPage from "../components/product/ProductPage";
import HomePage from "../components/homePage/HomePage";



const router = createBrowserRouter([
{
    path: '/',
    element : <App></App>,
    children : [
        {  
            path: '/',
            element : <HomePage></HomePage>
        },
        {  
            path: '/productPages',
            element : <ProductPage></ProductPage>
        }
       
        
    ]
    
},


])

export default router