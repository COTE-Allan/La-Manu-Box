import "../styles/Calculator.scss";
import React, { useState, useEffect } from "react";
import {
  KingBedSharp,
  ChairSharp,
  TableBarSharp,
  TableRestaurantSharp,
  PedalBikeSharp,
  TvSharp,
  KitchenSharp,
  MicrowaveSharp,
  EventSeatSharp,
} from "@mui/icons-material";

let new_id = 0;
let PremadeObjectList = [
  ["Lit", <KingBedSharp sx={{ fontSize: 40 }} />, 160, 200, 21],
  ["Chaise", <ChairSharp sx={{ fontSize: 40 }} />, 40, 50, 90],
  ["Grande table", <TableBarSharp sx={{ fontSize: 40 }} />, 140, 140, 75],
  ["Petite table", <TableRestaurantSharp sx={{ fontSize: 40 }} />, 110, 80, 35],
  ["Vélo", <PedalBikeSharp sx={{ fontSize: 40 }} />, 35, 177, 95],
  ["TV", <TvSharp sx={{ fontSize: 40 }} />, 30, 140, 102],
  ["Frigo", <KitchenSharp sx={{ fontSize: 40 }} />, 110, 110, 100],
  ["Micro-ondes", <MicrowaveSharp sx={{ fontSize: 40 }} />, 30, 70, 41],
  ["Fauteuil", <EventSeatSharp sx={{ fontSize: 40 }} />, 100, 100, 91],
];
function Calculator() {
  const [objectlist, setObjectlist] = React.useState([]);
  const [boxcontent, setBoxContent] = React.useState(["Box S", 0, 50]);
  // function add_custom_object() {
  //   let val = document.querySelectorAll(".App-Calculator-CustomObject input"),
  //     cords = [],
  //     i = 0,
  //     error = false;
  //   cords.push(new_id);
  //   new_id++;
  //   val.forEach((el) => {
  //     i++;
  //     if (el.value == "" || el.value < 1) {
  //       el.classList.add("error");
  //       error = true;
  //     } else {
  //       if (el.getAttribute("type") == "number") {
  //         if (i == 4 && el.value > 250) {
  //           el.classList.add("error");
  //           error = true;
  //         } else if (el.value >= 1600) {
  //           cords.push(parseInt(el.value));
  //           el.classList.remove("error");
  //         } else {
  //           error = true;
  //         }
  //       } else {
  //         cords.push(el.value);
  //         el.classList.remove("error");
  //       }
  //     }
  //   });
  //   // console.log(new_id);

  //   if (error == false) {
  //     setObjectlist([...objectlist, cords]);
  //   }
  // }
  useEffect(() => {
    calculate_box();
  }, [objectlist]);
  function add_premade_object(e) {
    let largeur = e.target.dataset.largeur;
    let longeur = e.target.dataset.longeur;
    let hauteur = e.target.dataset.hauteur;
    let name = e.target.dataset.name;
    let volume = ((((largeur / 100) * longeur) / 100) * hauteur) / 100;
    volume = Math.round(volume * 100) / 100;
    let newObject = [new_id, name, volume];
    new_id++;
    setObjectlist([...objectlist, newObject]);
  }
  function remove_custom_object(e) {
    let id = parseInt(e.target.getAttribute("data-id"));
    setObjectlist(objectlist.filter((item) => item[0] !== id));
  }
  function calculate_box() {
    let ElementVolume = 0;
    let Percent = 0;
    let BoxVolume = 3;
    let BoxType = "Box S";
    let BoxPrice = 50;
    let error = false;
    objectlist.forEach((e) => {
      ElementVolume = ElementVolume + e[2];
    });
    if (ElementVolume > 3 * 2.5) {
      BoxVolume = 6;
      BoxType = "Box M";
      BoxPrice = 80;
    }
    if (ElementVolume > 6 * 2.5) {
      BoxVolume = 10;
      BoxType = "Box L";
      BoxPrice = 140;
    }
    if (ElementVolume > 10 * 2.5) {
      BoxVolume = 16;
      BoxType = "Box XL";
      BoxPrice = 200;
    }
    if (ElementVolume > 16 * 2.5) {
      BoxType = "HORS LIMITE";
      error = true;
    }
    // if (ElementVolume > BoxVolume * 2.5) {
    //   switch (BoxVolume) {
    //     case 3:
    //       BoxVolume = 6;
    //       BoxType = "Box M";
    //       break;
    //     case 6:
    //       BoxVolume = 10;
    //       BoxType = "Box L";
    //       break;
    //     case 10:
    //       BoxVolume = 16;
    //       BoxType = "Box XL";
    //       break;
    //     case 16:
    //       BoxType = "HORS LIMITE";
    //       break;
    //     default:
    //       BoxVolume = 3;
    //       BoxType = "Box S";
    //       break;
    //   }
    // }
    // console.log(BoxVolume);
    // console.log(BoxType);
    if (error == true) {
      Percent = NaN;
    } else {
      Percent = (ElementVolume * 100) / (BoxVolume * 2.5);
    }
    setBoxContent([BoxType, Math.round(Percent * 10) / 10, BoxPrice]);
    // console.log(ElementVolume);
    // setBoxContent
  }
  return (
    <div className="App-Calculator gone">
      {/*<h1>Combien d'espace avez-vous besoin ?</h1>
       <div className="App-Calculator-CustomObject">
        <h2>Nouvel objet (en cm)</h2>
        <TextField label="Nom de l'objet" color="secondary" variant="filled" />
        <div className="App-Calculator-NewValue">
          {" "}
          <TextField
            label="Largeur"
            color="secondary"
            variant="filled"
            type="number"
          />
          <TextField
            label="Longeur"
            color="secondary"
            variant="filled"
            type="number"
          />{" "}
          <TextField
            label="Hauteur"
            color="secondary"
            variant="filled"
            type="number"
          />
        </div>
        <Button variant="contained" onClick={add_custom_object}>
          Ajouter l'objet
        </Button>
      </div> */}
      <h1>Ajoutez vos objets</h1>
      <div className="App-Calculator-SelectObject">
        {PremadeObjectList.map((e) => (
          <div
            className="App-Calculator-SelectObject-Element"
            key={e[0]}
            data-largeur={e[2]}
            data-longeur={e[3]}
            data-hauteur={e[4]}
            data-name={e[0]}
            onClick={add_premade_object}
          >
            {e[1]}
            <p>{e[0]}</p>
          </div>
        ))}
      </div>
      <div className="App-Calculator-Resume">
        <div className="App-Calculator-BoxStats">
          {" "}
          <div className="App-Calculator-BoxName">
            Box requise : {boxcontent[0]} <br />
            <p className="App-Calculator-BoxName-Percent">{boxcontent[1]}%</p>
            {boxcontent[2]}€ HT/mois
          </div>
        </div>
        <div className="App-Calculator-ObjectList">
          <h2>Actuellement dans votre Manu Box</h2>
          <div className="App-Calculator-List">
            {objectlist.map((e) => (
              <div
                className="App-Calculator-List-Element"
                key={e[0]}
                onClick={remove_custom_object}
                data-id={e[0]}
              >
                {e[1]}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="App-Calculator-ErrorAlert gone">
        {" "}
        <Alert severity="error">
          Vos objets dépassent la quantité maximale !
        </Alert>
      </div>
      <Fab
        variant="extended"
        color="primary"
        aria-label="add"
        onClick={calculate_box}
      >
        Obtenir mes résultats
      </Fab> */}
    </div>
  );
}

// Changer les icones en composant aveec props, utiliser use effect pour mettre a jour le %

export default Calculator;
