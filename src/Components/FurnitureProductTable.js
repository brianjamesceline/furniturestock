import React from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export default function FurnitureProductTable(props) {
  // This is a variable 'Const' as we are not changing this clientInformation. 
  const { products } = props;

  return (
    <div>
     <SearchBar />

     {/* products represents props and shall be passed through to the ProductTable */}
     <ProductTable products={products} />
    </div>
  )
}


