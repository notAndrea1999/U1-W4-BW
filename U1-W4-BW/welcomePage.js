const scatolaCheck = document.getElementsByTagName("input")[0];
const bottone = document.getElementsByTagName("button")[0];
const linkA = document.querySelector("a");

scatolaCheck.onchange = function () {
  if (scatolaCheck.checked) {
    bottone.disabled = false;
    linkA.innerHTML = '<a href="./selectDifficulty.html">PROCEED</a>';
  } else {
    bottone.disabled = true;
    linkA.innerHTML = '<a href="">PROCEED</a>';
  }
};

const noRefresh = (vaiAvanti) => vaiAvanti.preventDefault();
