import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavbarMonths } from "./components/navbarMonths/navbarMonths"
import { Balance } from './components/balance/balance';
import { Transacciones } from './components/transacciones/transacciones';
import { useEffect } from "react";
import axios from "axios";
import { useStateContext } from './components/context/contextProvider';

function App() {
  const { setHistorial} = useStateContext();

  useEffect(() => {
    axios.get('http://localhost:3000/historial/12')
            .then(({data}) => {
                console.log(data)
                setHistorial(data)
            })
            .catch((e) => {
                console.log(e)
            })
  }, [])

  return (
    <div className="container justify-content-center col-4">
      <NavbarMonths />
      <Balance />
      <Transacciones />
    </div>
  );
}

export default App;
