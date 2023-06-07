
import { useStateContext } from '../context/contextProvider';
export const Balance = () => {
    const { gastos, ingresos } = useStateContext();
    return (
        <div className="card text-center p-2">
            <h3>Balance del mes</h3>
            <h2 className='text-primary'>{`$${(ingresos-gastos).toFixed(2)}`}</h2>
            <div className="row justify-content-center ">
                <div className="text-success left-pane col-6 p-4" >
                    <h5>Ingresos</h5>
                    <h2 className="">{`-$${ingresos}`}</h2>

                </div>
                <div className=" text-danger right-pane col-6 p-4" >
                    <h5>Gastos</h5>
                    <h2 className="text-danger">{`-$${gastos}`}</h2>

                </div>
            </div>
            <div>
                <button type="button" class="btn">Ver analiticas</button>
                <i class="fa-sharp fa-solid fa-chevron-down"></i>
            </div>
        </div>
    )
}