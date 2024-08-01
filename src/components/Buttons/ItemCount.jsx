import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Swal from 'sweetalert2'

    function ItemCount ({stock, initial, onAdd}) {

    const [contador, setContador] = useState(initial);
    
    const Swal = require('sweetalert2')


    const incrementar = () => {
        if(contador < stock) {
        setContador(contador + 1 );
        }else {
            Swal.fire({
                icon: "info",
                title: "Desculpe...",
                text: "Não há mais itens no estoque!",
              });
        }
    }
    const desincrementar = () => {
        if(contador > 0) {
        setContador(contador - 1 );
        }
    }

    return(
        <div className="flex justify-between items w-[250px] p-2 border-2 border-[#0e1b45] rounded-md m-auto">
            <div>
            <button className="text-[#0e1b45] hover:text-blue-400" onClick={desincrementar} ><FaMinus /></button>
            </div>
            <div className="text-blue-500">
                {contador}
            </div>
            <div>
            <button className="text-[#0e1b45] hover:text-blue-400" onClick={incrementar} ><FaPlus /></button>
            </div>
        </div>
    )
}
export default ItemCount;