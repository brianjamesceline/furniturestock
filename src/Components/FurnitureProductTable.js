import React, { useState } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export default function FurnitureProductTable(props) {
  // This is a variable 'Const' as we are not changing this information. 
  const { products } = props;

  // We now create a State called FilterText. setFilterText is the function. and we then create an expty string.
  const [filterText, setFilterText] = useState('')

  const handleFilterTextChange = (value) => {
    setFilterText(value)
  }

  // Define the 'STATE' first. inStockOnly is a variable and setInStockOnly is a function.
  // We have 'HOOKED' inStockOnly to both the SearchBar and ProductTable below.
  const [inStockOnly, setInStockOnly] = useState(false)

  const handleInStockChange = (value) => {
    setInStockOnly(value)
  }

  return (
    <div>
     <SearchBar 
      filterText={filterText}
      onFilterTextChange={handleFilterTextChange}
      inStockOnly={inStockOnly} 
      onInStockChange={handleInStockChange}
     />

    {/* products represents props and shall be passed through to the ProductTable. */}
     <ProductTable 
      inStockOnly={inStockOnly}
      products={products} 
      filterText={filterText}
     />
    </div>
  )
}


