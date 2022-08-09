import React from 'react'

export default function ProductRow(props) {
  const { product } = props;
  // If product is stocked, print the product.name. If not, print product.name in span with style applied.
  const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>;
  
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}
