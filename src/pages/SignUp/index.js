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
    const getStates = async () => {
      const slist = await api.getStates();
      setStateList(slist);
    };
    getStates();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError("");

    if (password !== confirm) {
      setError("Senha não bate");
      setDisabled(false);
      return;
    }

    const json = await api.register(name, email, password, stateLoc);

    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token);
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
            <div className="area-imput">
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
            <div className="area-imput">
              <select
                value={stateLoc}
                onChange={(e) => setStateLoc(e.target.value)}
                required
              >
                <option></option>
                {stateList.map((i, k) => (
                  <option key={k} value={i._id}>
                    {i.name}
                  </option>
                ))}
              </select>
            </div>
          </label>
          <label className="area">
            <div className="area-title">E-mail</div>
            <div className="area-imput">
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
            <div className="area-imput">
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
            <div className="area-imput">
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
