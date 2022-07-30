import logo from './logo.svg';
import './App.css';
import FurnitureProductTable from './Components/FurnitureProductTable';

const PRODUCTS = [
  {category: "Table 6'", price: "£2950.00", stocked: true, name: "Directoire Cherrywood"},
  {category: "Table 7'", price: "£3150.00", stocked: true, name: "Directoire Cherrywood"},
  {category: "Table 8'", price: "£3450.00", stocked: false, name: "Directoire Cherrywood"},
  {category: "Table 6'", price: "£2950.00", stocked: true, name: "Rochembeau Walnut/Oak"},
  {category: "Table 7'", price: "£3150.00", stocked: true, name: "Rochembeau Walnut/Oak"},
  {category: "Table 8'", price: "£3450.00", stocked: false, name: "Rochembeau Walnut/Oak"},
  {category: "Table 6'", price: "£2950.00", stocked: true, name: "Heritage Cherrywood"},
  {category: "Table 7'", price: "£3150.00", stocked: true, name: "Heritage Cherrywood"},
  {category: "Table 8'", price: "£3450.00", stocked: false, name: "Heritage Cherrywood"},
  {category: "Chair", price: "£525.00", stocked: true, name: "Directoire"},
  {category: "Chair", price: "£550.00", stocked: true, name: "Rochembeau"},
  {category: "Chair", price: "£575.00", stocked: true, name: "Heritage"},
  {category: "Armchair", price: "£600.00", stocked: false, name: "Directoire"},
  {category: "Armchair", price: "£650.00", stocked: false, name: "Rochembeau"},
  {category: "Armchair", price: "£675.00", stocked: false, name: "Heritage"},
  {category: "Sideboard", price: "£4995.00", stocked: false, name: "Rochembeau"},
  {category: "Sideboard", price: "£3995.00", stocked: true, name: "Heritage"},
  {category: "Sideboard", price: "£4500.00", stocked: false, name: "Directoire"},
  {category: "Display Cabinet", price: "£2995.00", stocked: false, name: "Rochembeau"},
  {category: "Display Cabinet", price: "£1995.00", stocked: true, name: "Heritage"},
  {category: "Display Cabinet", price: "£2500.00", stocked: false, name: "Directoire"},

];

function App() {
  return (
    <FurnitureProductTable products={PRODUCTS} />
  );
}

export default App;
