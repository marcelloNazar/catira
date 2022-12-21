import Cookies from "js-cookie";

export const isLogged = () => {
  let token = Cookies.get("token"); // pega o token
  return token ? true : false; // retorna o token
};

export const doLogin = (token, remember = false) => { // autenticação 
  if (remember) { // se tiver com o remember marcado
    Cookies.set("token", token, { expires: 999 }); //manda o token para criar um cookie e deixar logado por um tempo   // cookie e ultilizado por 999 dias
  } else {
    Cookies.set("token", token); // seta o cokkie so enquanto o navegador tive aberto
  }
};

export const doLogout = () => {
  Cookies.remove("token"); // so remove o token
};
