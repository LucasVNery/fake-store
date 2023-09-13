import Produto from "../componentes/Produto";
import Menu from "../componentes/Menu";

export default function PaginaIncial({ }) {
    return (
        <div>
            <Menu/>
            <Produto/>
            <h1>Pagina Inicial</h1>
        </div>
    );
}