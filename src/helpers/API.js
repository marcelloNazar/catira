import Cookies from "js-cookie";
import qs from "qs";

const BASEAPI = "http://localhost:5000";

const apiFetchFile = async (endpoint, body) => {
  if (!body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.append("token", token);
    }
  }

  const res = await fetch(BASEAPI + endpoint, {
    method: "POST",
    body,
  });
  const json = await res.json();

  if (json.notallawed) {
    window.location.href = "/signin";
    return;
  }
  return json;
};

const apiFetchPost = async (endpoint, body) => {
  if (!body.token) { //se nao tiver token no body pega um token 
    let token = Cookies.get("token");
    if (token) {
      body.token = token; // se tiver um token adiciona ele 
    }
  }

  const res = await fetch(BASEAPI + endpoint, {  // encontra a base da api mais o end point
    method: "POST", // configuração 
    headers: {
      Accept: "application/json", //aceitar
      "Content-Type": "application/json", //tipo de conteudo
    },
    body: JSON.stringify(body),// manda o body que recebeu em forma de json
  });
  const json = await res.json(); // espera a resposta do res . json

  if (json.notallawed) {
    window.location.href = "/signin"; // se tiver o nao logado manda para o sign in e retorna
    return;
  } 
  return json; // retorna 
};

const apiFetchGet = async (endpoint, body = []) => { //recebe o endpoint e o body que vem da pagina 
  if (!body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.token = token;
    }
  }

  const res = await fetch(`${BASEAPI + endpoint}?${qs.stringify(body)}`); // get sao feitas na url entao colocamos o endpoint e envia o body como query string 
  const json = await res.json(); // é enviada a url e espera a resposta

  if (json.notallawed) {
    window.location.href = "/signin";
    return;
  }
  return json;
};

const API = {
  login: async (email, password) => { // recebe o email e a senha da pagina de login
    const json = await apiFetchPost("/user/signin", { email, password }); //envia a rota e o email e a senha para a funsao post

    return json; // retorna o json para o sign in
  },

  register: async (name, email, password, stateLoc) => {
    const json = await apiFetchPost("/user/signup", {// manda o endpoint e o obj com tudo que foi recebido
      name,
      email,
      password,
      state: stateLoc,
    });
    return json;
  },

  getStates: async () => {
    const json = await apiFetchGet("/states"); // get apenas pega informaçao de alguma rota e retorna
    return json.states; 
  },
  getCategories: async () => {
    const json = await apiFetchGet("/categories");
    return json.categories;
  },

  getAds: async (options) => {
    const json = await apiFetchGet("/ad/list", options);
    return json;
  },

  getAd: async (id, other = false) => {
    const json = await apiFetchGet("/ad/item", { id, other }); 
    return json;
  },

  addAd: async (fData) => {
    const json = await apiFetchFile("/ad/add", fData); // 
    return json;
  },
};

export default () => API;
