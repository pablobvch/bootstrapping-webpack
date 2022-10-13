import "../css/components.css";

const saludar = (nombre) => {
  const body = document.body;
  const h1 = document.createElement("h1");
  h1.innerHTML = `Hola ${nombre}!`;
  body.append(h1);
  /*const img = document.createElement("img");
  img.src = webpackLogo;
  body.append(img);*/
};

export { saludar };
