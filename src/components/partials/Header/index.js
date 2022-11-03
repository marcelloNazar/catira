import React from 'react';
import {HeaderArea} from './styled'
import { Link } from 'react-router-dom';

import { isLogged } from '../../../helpers/AuthHandler';

export default function Header() {
    let logged = isLogged()

 return (
    <HeaderArea>
        <div className='container' >
            <div className='logo' >
                <Link to="/" >
                    <span className='logo-1'>CA</span>
                    <span className='logo-2'>TI</span>
                    <span className='logo-3'>RA</span>
                </Link>
            </div>
            <nav>
                <ul>
                    {logged &&
                    <>
                        <li>
                            <Link to="">Minha Conta</Link>
                        </li>
                        <li>
                            <Link to="">Sair</Link>
                        </li>
                        <li>
                        <Link to="" className='button'>Postar anuncio</Link>
                        </li>
                    </>
                    }
                    {!logged &&
                    <>
                        <li>
                            <Link to="">Login</Link>
                        </li>
                        <li>
                            <Link to="">Cadastrar</Link>
                        </li>
                    </>
                    }
                    
                    
                </ul>
            </nav>
        </div>
    </HeaderArea>
 );
}