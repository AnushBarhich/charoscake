
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Bienvenido a mi Ecommerce'} />
    </div>
  );
}

export default App;
