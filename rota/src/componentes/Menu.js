import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';


export default function Menu({ }) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Button type='text'><Link to='/'>Inicial</Link></Button>
                            </li>
                            <li class="nav-item">
                                <Button type='text'><Link to='/Sobre'>Sobre</Link></Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}