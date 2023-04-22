import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import Welcome from './components/pages/Welcome'
import Product from './components/pages/Product'
import MailHeader from './components/MailHeader'
import ProductDetails from './components/pages/ProductDetails'
function App(){

  return(<React.Fragment>
  <MailHeader></MailHeader>
  <main>
  <Routes>
    <Route path="/welcome" element={<Welcome></Welcome>}>
    </Route>
    <Route path="/product" element={<Product></Product>} exact>
    </Route>
    <Route path='/products/:productid' element={<ProductDetails></ProductDetails>}>

    </Route></Routes></main>
  </React.Fragment>)
}


export default App