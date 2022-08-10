import React, { useState } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export default function FurnitureProductTable(props) {
  // This is a variable 'Const' as we are not changing this information. 
  const { products } = props;

  // Define the 'STATE' first. inStockOnly is a variable and setInStockOnly is a function.
  // We have 'HOOKED' inStockOnly to both the SearchBar and ProductTable below.
  const [inStockOnly, setInStockOnly] = useState(false)

  const handleInStockChange = (inStockOnly) => {
    setInStockOnly(inStockOnly)
  }

  return (
    <div>
     <SearchBar 
      inStockOnly={inStockOnly} 
      onInStockChange={handleInStockChange}
     />

    {/* products represents props and shall be passed through to the ProductTable. */}
     <ProductTable 
      inStockOnly={inStockOnly}
      products={products} 
     />
    </div>
  )
}


