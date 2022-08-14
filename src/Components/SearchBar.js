import React from 'react'

export default function SearchBar(props) {
  const { inStockOnly, filterText } = props;

  const handleFilterTextChange = (e) => {
    props.onFilterTextChange(e.target.value)
  }

  // This is a variable holding an arrow function.
  const handleInStockChange = (e) => {
    props.onInStockChange(e.target.checked)
  }

  return (
    <form>
      <input 
        type="text" 
        placeholder="Search..." 
        value={filterText}

        // When inputting or changing the searchbar we have creating a function called handleFilterTextChange. 
        onChange={handleFilterTextChange}
      />
      <p>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={handleInStockChange}
        />
        {' '}
        Only show products in stock
      </p>
    </form>
  )
}
