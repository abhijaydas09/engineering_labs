import logo from './logo.svg';
import './App.css';
import react , {useState , useEffect} from "react";
import ItemComponent from "./ItemComponent";

/**
 * these are State variables that will hold the data from the API call
 * items - will hold the data from the API call
 * loading - will hold the loading state of the API call
 * error - will hold the error state of the API call
 *
 */



function App() {

  const [item , setItem ] = useState([]);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(
      (result) => {
        setItem(result);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div className="App">
      <ItemComponent items={item} />
    </div>
  );
}

export default App;
