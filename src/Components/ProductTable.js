import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default function ProductTable(props) {
  const { products } = props;


  // This defines the output showing empty square bracket.
  const rows = [];
  // This shows a let variable statement. lastCategory must initially be set as null.
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
        // Props inserted below
         category={product.category}
        //  Unique key identifier.
         key={product.category}
        />
      )
    }
    rows.push(
      <ProductRow 
        // Props inserted below and unique key identifier.
        product={product}
        key={product.name}
      />
    )
    // we are now resetting the product category to be lastCategory at completion of the above, before going through the next iteration in the loop.
    lastCategory = product.category;
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {/* No need to hard code the below. */}
        {/* <ProductCategoryRow />
        <ProductRow /> */}
        {rows}
      </tbody>
    </table>
  )
}
