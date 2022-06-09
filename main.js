const url = "https://api.chucknorris.io/jokes/random";
const root = document.getElementById("root");
const btn = document.getElementById("btn");
const main = document.getElementById("main");

async function chuckNorris() {
  const res = await fetch(url);
  const data = await res.json();
  render(data);
}

btn.addEventListener("click", () => {
  chuckNorris();
});

const render = (data) => {
  main.innerHTML = "";

  const text = document.createElement("p");
  text.innerHTML = data.value;
  main.append(text);
  text.style.width = "50%";
  main.style.display = "flex";
  text.style.color = "white";
};
const body = document.querySelector("body");
body.style.background = "purple";
