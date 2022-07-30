import logo from './logo.svg';
import './App.css';
import FurnitureProductTable from './Components/FurnitureProductTable';

const PRODUCTS = [
  {category: "Dining Table 6'", price: "£2950.00", stocked: true, name: "Directoire"},
  {category: "Dining Table 7'", price: "£3150.00", stocked: true, name: "Directoire"},
  {category: "Dining Table 8'", price: "£3450.00", stocked: false, name: "Directoire"},
  {category: "Dining Table 6'", price: "£2950.00", stocked: true, name: "Rochembeau"},
  {category: "Dining Table 7'", price: "£3150.00", stocked: true, name: "Rochembeau"},
  {category: "Dining Table 8'", price: "£3450.00", stocked: false, name: "Rochembeau"},
  {category: "Dining Table 6'", price: "£2950.00", stocked: true, name: "Heritage"},
  {category: "Dining Table 7'", price: "£3150.00", stocked: true, name: "Heritage"},
  {category: "Dining Table 8'", price: "£3450.00", stocked: false, name: "Heritage"},
  {category: "Dining Chair", price: "£525.00", stocked: true, name: "Directoire"},
  {category: "Dining Armchair", price: "£600.00", stocked: false, name: "Directoire"},
  {category: "Dining Chair", price: "£550.00", stocked: true, name: "Rochembeau"},
  {category: "Dining Armchair", price: "£650.00", stocked: false, name: "Rochembeau"},
  {category: "Dining Chair", price: "£575.00", stocked: true, name: "Heritage"},
  {category: "Dining Armchair", price: "£675.00", stocked: false, name: "Heritage"},

];

function App() {
  return (
    <FurnitureProductTable />
  );
}

export default App;
