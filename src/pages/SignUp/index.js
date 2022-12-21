import React, { useEffect, useState } from "react";
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

  const [name, setName] = useState();
  const [stateLoc, setStateLoc] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    // usado para pegar as informações da api
    const getStates = async () => {
      const slist = await api.getStates(); // pega a lista de estados e salva na variavel
      setStateList(slist); // seta no state list
    };
    getStates();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError(""); //coloca uma string vazia no erro

    if (password !== confirm) {
      // se a senha for diferente da confirmação

      setError("Senha não bate");
      setDisabled(false);
      return;
    }

    const json = await api.register(name, email, password, stateLoc); // envia os dados para api

    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token); // se não tiver erro manda o token para a dologin e vai para a home
      window.location.href = "/";
    }
    setDisabled(false);
  };

  return (
    <PageContainer>
      <PageTitle>Cadastro</PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area-title">Nome completo</div>
            <div className="area-input">
              <input
                type="text"
                disabled={disabled}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Estado</div>
            <div className="area-input">
              <select
                value={stateLoc}
                onChange={(e) => setStateLoc(e.target.value)}
                required
              >
                <option></option>
                {stateList.map(
                  (
                    i,
                    k // map para fazer um loop em todos os itados deixando nas opçoes
                  ) => (
                    <option key={k} value={i._id}>
                      {i.name}
                    </option>
                  )
                )}
              </select>
            </div>
          </label>
          <label className="area">
            <div className="area-title">E-mail</div>
            <div className="area-input">
              <input
                type="email"
                disabled={disabled}
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
            <div className="area-title">Confirmar Senha</div>
            <div className="area-input">
              <input
                type="password"
                disabled={disabled}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </div>
          </label>

          <label className="area">
            <div className="area-title"></div>
            <div className="area-imput">
              <button disabled={disabled}>Fazer Cadastro</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
}
