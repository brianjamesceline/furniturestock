import logo from './logo.svg';
import './App.css';
import FurnitureProductTable from './Components/FurnitureProductTable';

// This is a Const variable named products. This cannot be changed and will be passed through props.
const PRODUCTS = [
  {category: "Table", price: "£2950.00", stocked: true, name: "Directoire 6' Cherrywood"},
  {category: "Table", price: "£3150.00", stocked: true, name: "Directoire 7' Cherrywood"},
  {category: "Table", price: "£3450.00", stocked: true, name: "Directoire 8' Cherrywood"},
  {category: "Table", price: "£2950.00", stocked: true, name: "Rochembeau 6' Walnut/Oak"},
  {category: "Table", price: "£3150.00", stocked: true, name: "Rochembeau 7' Walnut/Oak"},
  {category: "Table", price: "£3450.00", stocked: false, name: "Rochembeau 8' Walnut/Oak"},
  {category: "Table", price: "£2950.00", stocked: true, name: "Heritage 6' Cherrywood"},
  {category: "Table", price: "£3150.00", stocked: true, name: "Heritage 7' Cherrywood"},
  {category: "Table", price: "£3450.00", stocked: false, name: "Heritage 8' Cherrywood"},
  {category: "Chair", price: "£525.00", stocked: true, name: "Directoire"},
  {category: "Chair", price: "£550.00", stocked: true, name: "Rochembeau"},
  {category: "Chair", price: "£575.00", stocked: true, name: "Heritage"},
  {category: "Armchair", price: "£600.00", stocked: true, name: "Directoire"},
  {category: "Armchair", price: "£650.00", stocked: true, name: "Rochembeau"},
  {category: "Armchair", price: "£675.00", stocked: false, name: "Heritage"},
  {category: "Sideboard", price: "£4995.00", stocked: false, name: "Rochembeau"},
  {category: "Sideboard", price: "£3995.00", stocked: true, name: "Heritage"},
  {category: "Sideboard", price: "£4500.00", stocked: true, name: "Directoire"},
  {category: "Display Cabinet", price: "£2995.00", stocked: false, name: "Rochembeau"},
  {category: "Display Cabinet", price: "£1995.00", stocked: true, name: "Heritage"},
  {category: "Display Cabinet", price: "£2500.00", stocked: true, name: "Directoire"},

];

function App() {
  return (
    // products={PRODUCTS} is a prop. Info in this shall be passed through to FurnitureProductTable
    <FurnitureProductTable products={PRODUCTS} />
  );
}

export default App;
