import { useEffect, useState } from "react";
import axios from 'axios';

export default function Produto() {

    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((response) => { setProdutos(response.data); });
    });

    return (
        <div>
            {produtos.map((produto) => (
            <div key={produto.id}>
                <img src={produto.image}/>
                <h2>{produto.title}</h2>
                <p>{produto.description}</p>
                <h3>{produto.price}</h3>
            </div>
            ))}
        </div>
    );
}