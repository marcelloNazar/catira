import React, { useState } from "react";
import { PageArea } from "./styled";
import {
  PageContainer,
  PageTitle,
  ErrorMessage,
} from "../../components/MainComponents";
import API from "../../helpers/API";
import { doLogin } from "../../helpers/AuthHandler";

export default function SignIn() {
  const api = API();


  // states para salvar tudo do usuario

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [disabled, setDisabled] = useState(false); // para desabilitar os campos 
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError("");

    const json = await api.login(email, password); // manda o email e senha para a api 

    if (json.error) { // caso tenha erro
      setError(json.error); // seta ela
    } else {
      doLogin(json.token, remember); //pega o token da api e manda pra autenticação para salvar o cokkie
      window.location.href = "/"; // manda pra home
    }
    setDisabled(false);
  };

  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}   

        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area-title">E-mail</div>
            <div className="area-input">
              <input
                type="email"
                disabled={disabled}  // colocando os campos no states
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Senha</div>
            <div className="area-input">
              <input
                type="password"
                disabled={disabled}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Lembrar senha</div>
            <div className="area-input">
              <input
                type="checkbox"
                disabled={disabled}
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title"></div>
            <div className="area-input">
              <button disabled={disabled}>Fazer Login</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
}
