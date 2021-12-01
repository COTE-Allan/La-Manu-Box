import "../styles/MainMenu.scss";
import { Fab } from "@mui/material";
import LogoManu from "./Logo";

function quit_menu() {
  let old = document.querySelector(".App-Menu");
  let target = document.querySelector(".App-Calculator");
  old.classList.add("disappear");
  setTimeout(() => {
    old.classList.add("gone");
    target.classList.remove("gone");
    setTimeout(() => {
      target.classList.add("appear");
    }, 200);
  }, 400);
}

function MainMenu() {
  return (
    <div className="App-Menu">
      <LogoManu />
      {/* <h1>LA MANU BOX</h1> */}
      <p className="App-Menu-Slogan">
        Grâce à l'outil La Manu Box, connaissez en avance la taille et le prix
        du box dont vous aurez besoin !
      </p>
      <Fab
        variant="extended"
        color="primary"
        aria-label="add"
        onClick={quit_menu}
      >
        Commencer
      </Fab>
    </div>
  );
}

export default MainMenu;
