
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useStateContext } from '../context/contextProvider';

export const Transacciones = () => {
    const { transacciones } = useStateContext();
    const cantidadRef = useRef(null);
    const textoRef = useRef(null);
    const dropdownRef = useRef(null);

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        const obj = {
            "tipo": dropdownRef.current.value,
            "lugar": textoRef.current.value,
            "cantidad": cantidadRef.current.value,
            "img": ""
        }

    };

    return (
        <div>
            {transacciones?.map((data, index) => {
                return (
                    <div>
                        <span className="fw-bold" key={index}>{data.dia}</span>
                        {data?.movimientos.map((item, id) => {
                            return (
                                <div key={id} className="card d-flex flex-row justify-content-between p-2 mb-2">
                                    <div className="col-1" style={{ backgroundColor: "red", borderRadius: "50%" }}>{item.img}</div>
                                    <div className="text-start col-5">{item.lugar}</div>
                                    <div className={item.tipo === 0 ? "text-success" : "text-danger"}>{item.tipo === 0 ? `+$${item.cantidad}` : `-$${item.cantidad}`}</div>
                                </div>
                            )
                        })}

                    </div>
                )
            })}
                <button type="submit" style={{ backgroundColor: "#4a65a3", color: "#fff" }} className="btn btn-lg fixed-bottom mx-auto col-3 z-3 btn-flotante">Agregar movimientos</button>



            {/*<form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="cantidad">Cantidad:</label>
                    <input type="number" id="cantidad" ref={cantidadRef} />
                </div>
                <div>
                    <label htmlFor="texto">Texto:</label>
                    <input type="text" id="texto" ref={textoRef} />
                </div>
                <div>
                    <label htmlFor="opcion">Opción:</label>
                    <select id="opcion" ref={dropdownRef}>
                        <option value="0">Ingreso</option>
                        <option value="1">Gasto</option>
                    </select>
                </div>
                <button type="submit" style={{ backgroundColor: "#4a65a3", color: "#fff" }} className="btn btn-lg fixed-bottom mx-auto col-3 z-3 btn-flotante">Agregar movimientos</button>

        </form>*/}
        </div>
    )
}