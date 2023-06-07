import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    transacciones: null,
    gastos: null,
    ingresos: null,
    total: null,
    setHistorial: () => { }
})

export const ContextProvider = ({ children }) => {
    const [transacciones, setTransacciones] = useState(null)
    const [gastos, setGastos] = useState(0)
    const [ingresos, setIngresos] = useState(0)
    const [total, setTotal] = useState(0)
    const setHistorial = (data) => {
        setTransacciones(data?.histori)

        const sumaMovimientosTipo0 = data.histori.map((item) => {
            const suma = item.movimientos
                .filter((movimiento) => movimiento.tipo === 0)
                .reduce((total, movimiento) => total + parseFloat(movimiento.cantidad), 0);
            return suma;
        });

        const sumaMovimientosTipo1 = data.histori.map((item) => {
            const suma = item.movimientos
                .filter((movimiento) => movimiento.tipo === 1)
                .reduce((total, movimiento) => total + parseFloat(movimiento.cantidad), 0);
            return suma;
        });

        const ing = sumaMovimientosTipo0.reduce((total, numero) => total + numero, 0).toFixed(2);
        const egre = sumaMovimientosTipo1.reduce((total, numero) => total + numero, 0).toFixed(2);

        setIngresos(ing)
        setGastos(egre)
    }

    return (
        <StateContext.Provider value={{
            transacciones,
            gastos,
            ingresos,
            total,
            setHistorial
        }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
