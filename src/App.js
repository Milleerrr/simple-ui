import './App.css';

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

const ProductRow = ({price, stocked, name}) => {
  <tr>
    <td style = {{color: stocked ? 'black' : 'red'}}>{name}</td>
    <td>{price}</td>
  </tr>
};

const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  )
};

export default function FilterableProductTable() {
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
};