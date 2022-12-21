import React from "react";
import { HeaderArea } from "./styled";
import { Link } from "react-router-dom";

import { isLogged, doLogout } from "../../../helpers/AuthHandler";

export default function Header() {
  let logged = isLogged();

  const handleLogout = () => {
    doLogout();
    window.location.href = "/"; // faz logout e redireciona
  };

  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="logo-1">CA</span>
            <span className="logo-2">TI</span>
            <span className="logo-3">RA</span>
          </Link>
        </div>
        <nav>
          <ul>
            {logged && (
              <>
                <li>
                  <Link to="">Minha Conta</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Sair</button>
                </li>
                <li>
                  <Link to="/post-an-ad" className="button">
                    Postar catira
                  </Link>
                </li>
              </>
            )}
            {!logged && (
              <>
                <li>
                  <Link to="/signin">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Cadastrar</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
}
