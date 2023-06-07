import axios from "axios";
import { useStateContext } from '../context/contextProvider';

export const NavbarMonths = () => {
    const { setHistorial} = useStateContext();
    const meses = [
        { nombre: "Enero", code: 1 },
        { nombre: "Diciembre", code: 12 },/*
        { nombre: "Marzo", code: 3 },
        { nombre: "Abril", code: 4 },
        { nombre: "Mayo", code: 5 },
        { nombre: "Junio", code: 6 },
        { nombre: "Julio", code: 7 },
        { nombre: "Agosto", code: 8 },
        { nombre: "Septiembre", code: 9 },
        { nombre: "Octubre", code: 10 },
        { nombre: "Noviembre", code: 11 },
        { nombre: "Diciembre", code: 12 },*/
    ]

    const submit = (e) =>{
        axios.get(`http://localhost:3000/historial/${e}`)
            .then(({data}) => {
                console.log(data)
                setHistorial(data)
            })
            .catch((e) => {
                console.log(e)
            })
    }
    return (
        <div className="row justify-content-center rounded-bottom nav-meses" style={{ backgroundColor: "#4a65a3", color : "#fff"}}>
            {meses.map(valor =>{
                return(
                    <div key={valor.code} className="col-4 ">
                        <button className="btn"  style={{ color : "#fff"}} onClick={() => submit(valor.code)}>{valor.nombre}</button>
                    </div>
                )
                
            })}
        </div>
    )
}