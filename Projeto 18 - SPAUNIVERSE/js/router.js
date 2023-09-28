export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    //criar variavel da url que estou
    const url = event.target.innerHTML;
    //descobrir qual url que estou
    document.getElementById("fundo").className = "";

    if (url === "Home") {
      document.getElementById("fundo").classList.add("fundo1");
      document.getElementById("home").classList.add("textBold");
      document.getElementById("universo").className = "";
      document.getElementById("exploracao").className = "";
      console.log(url);
    } else if (url === "O Universo") {
      document.getElementById("fundo").classList.add("fundo2");
      document.getElementById("universo").classList.add("textBold");
      document.getElementById("home").className = "";
      document.getElementById("exploracao").className = "";
    } else if (url === "Exploração") {
      document.getElementById("fundo").classList.add("fundo3");
      document.getElementById("exploracao").classList.add("textBold");
      document.getElementById("home").className = "";
      document.getElementById("universo").className = "";
    } else if (url === "QUERO SABER MAIS") {
      document.getElementById("fundo").classList.add("fundo1");
      document.getElementById("exploracao").classList.add("textBold");
      document.getElementById("home").className = "";
      document.getElementById("universo").className = "";
      document.getElementById("exploracao").className = "";
    }

    this.handle();
  }

  handle() {
    const { pathname } = window.location; // desestruturação
    const route = this.routes[pathname] || this.routes[404];
    fetch(route) //fetch e uma promessa
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
}
