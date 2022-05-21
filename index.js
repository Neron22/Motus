

//------------------------------------------------------------------------
//tableau de mots
//------------------------------------------------------------------------

const tableauMots = [
  "premier",
  "commune",
  "famille",
  "général",
  "nouveau",
  "pendant",
  "village",
  "période",
  "origine",
  "dernier",
  "ensuite",
  "environ",
  "musique",
  "souvent",
  "service",
  "société",
  "suivant",
  "épisode",
  "janvier",
  "exemple",
  "rapport",
  "système",
  "juillet",
  "château",
  "octobre",
  "version",
  "moyenne",
  "anglais",
  "travail",
  "février",
  "réalisé",
  "pouvoir",
  "chanson",
  "édition",
  "rivière",
  "produit",
  "article",
  "parfois",
  "conseil",
  "théâtre",
  "seconde",
  "conseil",
  "surtout",
  "demande",
  "peintre",
  "domaine",
  "plupart",
  "italien",
  "honneur",
  "manière",
  "lorsque",
  "vitesse",
  "légende",
  "travers",
  "annonce",
  "prendre",
  "composé",
  "culture",
  "actrice",
  "station",
  "surface",
  "atteint",
  "terrain",
  "hauteur",
  "passage",
  "section",
  "mission",
  "attaque",
  "journal",
  "inscrit",
  "couleur",
  "arrivée",
  "devenir",
  "tableau",
  "contrat",
  "ouvrage",
  "célèbre",
  "artiste",
  "compris",
  "mariage",
  "qualité",
  "royaume",
  "premier",
  "secteur",
  "présent",
  "tournoi",
  "céleste",
];
//------------------------------------------------------------------------
//const changeMot : choix aléatoire d'un mot dans le tableau + incrémenter chaque lettre
//dans grid
//------------------------------------------------------------------------
const changeMot = tableauMots[Math.floor(Math.random() * tableauMots.length)];
const buttons = document.querySelectorAll(".btn");
const ok = document.getElementById("ok");
console.log(changeMot);

let item00 = document.querySelector(".item00");
let item01 = document.querySelector(".item01");
let item02 = document.querySelector(".item02");
let item03 = document.querySelector(".item03");
let item04 = document.querySelector(".item04");
let item05 = document.querySelector(".item05");
let item06 = document.querySelector(".item06");
let item10 = document.querySelector(".item10");
let item11 = document.querySelector(".item11");
let item12 = document.querySelector(".item12");
let item13 = document.querySelector(".item13");
let item14 = document.querySelector(".item14");
let item15 = document.querySelector(".item15");
let item16 = document.querySelector(".item16");
let item20 = document.querySelector(".item20");
let item21 = document.querySelector(".item21");
let item22 = document.querySelector(".item22");
let item23 = document.querySelector(".item23");
let item24 = document.querySelector(".item24");
let item25 = document.querySelector(".item25");
let item26 = document.querySelector(".item26");

let event1 = "";
let event2 = "";
let event3 = "";
let event4 = "";
let event5 = "";
let event6 = "";

//------------------------------------------------------------------------
//incrémenter item1
//------------------------------------------------------------------------

const ligne1 = () => {
  let elementClicked1 = false;
  item00.textContent = changeMot[0];
  item01.textContent = ".";
  item02.textContent = ".";
  item03.textContent = ".";
  item04.textContent = ".";
  item05.textContent = ".";
  item06.textContent = ".";
  do {
    buttons.forEach((button1) => {
      button1.addEventListener("click", function handleClick(e1) {
        if (elementClicked1) {
          return;
        }
        elementClicked1 = true;

        event1 = e1.target.id;

        item01.textContent = event1;

        let elementClicked2 = false;

        //------------------------------------------------------------------------
        //incrémenter item2 si 1 ok
        //------------------------------------------------------------------------

        if ((elementClicked1 = true) && (item01.textContent = e1.target.id)) {
          buttons.forEach((button2) => {
            button2.addEventListener("click", function handleClick(e2) {
              if (elementClicked2) {
                return;
              }
              elementClicked2 = true;
              event2 = e2.target.id;

              item02.textContent = event2;

              let elementClicked3 = false;
              //------------------------------------------------------------------------
              //incrémenter item3 si 2 ok
              //------------------------------------------------------------------------

              if (
                (elementClicked2 = true && (item02.textContent = e2.target.id))
              ) {
                buttons.forEach((button3) => {
                  button3.addEventListener("click", function handleClick(e3) {
                    if (elementClicked3) {
                      return;
                    }
                    elementClicked3 = true;
                    event3 = e3.target.id;
                    item03.textContent = event3;

                    let elementClicked4 = false;
                    //------------------------------------------------------------------------
                    //incrémenter item4 si 3 ok
                    //------------------------------------------------------------------------
                    if (
                      (elementClicked3 = true) &&
                      (item03.textContent = e3.target.id)
                    ) {
                      buttons.forEach((button4) => {
                        button4.addEventListener(
                          "click",
                          function handleClick(e4) {
                            if (elementClicked4) {
                              return;
                            }
                            elementClicked4 = true;
                            event4 = e4.target.id;
                            item04.textContent = event4;

                            let elementClicked5 = false;

                            //------------------------------------------------------------------------
                            //incrémenter item5 si 4 ok
                            //------------------------------------------------------------------------
                            if (
                              (elementClicked4 = true) &&
                              (item04.textContent = e4.target.id)
                            ) {
                              buttons.forEach((button5) => {
                                button5.addEventListener(
                                  "click",
                                  function handleClick(e5) {
                                    if (elementClicked5) {
                                      return;
                                    }
                                    elementClicked5 = true;
                                    event5 = e5.target.id;
                                    item05.textContent = event5;

                                    let elementClicked6 = false;
                                    //------------------------------------------------------------------------
                                    //incrémenter item6 si 5 ok
                                    //------------------------------------------------------------------------
                                    if (
                                      (elementClicked5 = true) &&
                                      (item05.textContent = e5.target.id)
                                    ) {
                                      buttons.forEach((button6) => {
                                        button6.addEventListener(
                                          "click",
                                          function handleClick(e6) {
                                            if (elementClicked6) {
                                              return;
                                            }

                                            elementClicked6 = true;

                                            event6 = e6.target.id;
                                            item06.textContent = event6;
                                            ok.addEventListener("click", () => {
                                              item00.textContent = changeMot[0];
                                              item01.textContent = event1;
                                              item02.textContent = event2;
                                              item03.textContent = event3;
                                              item04.textContent = event4;
                                              item05.textContent = event5;
                                              item06.textContent = event6;
                                              ligne2();
                                            });
                                          }
                                        );
                                      });
                                    }
                                  }
                                );
                              });
                            }
                          }
                        );
                      });
                    }
                  });
                });
              }
            });
          });
        }
      });
    });
  } while (
    efface.addEventListener("click", () => {
      item00.textContent = changeMot[0];
      item01.textContent = ".";
      item02.textContent = ".";
      item03.textContent = ".";
      item04.textContent = ".";
      item05.textContent = ".";
      item06.textContent = ".";
      ligne1();
    })
  );
};

ligne1();

// if (
//   ok.addEventListener("click") &&
//   document.querySelector(".item01").textContent === changeMot[1]
// ) {
//   document.querySelector(".item11").textContent = changeMot[1];
// } else {
//   document.querySelector(".item11").textContent = ".";
// }

const ligne2 = () => {
  item00.textContent = changeMot[0];
  item01.textContent = event1;
  item02.textContent = event2;
  item03.textContent = event3;
  item04.textContent = event4;
  item05.textContent = event5;
  item06.textContent = event6;
  item10.textContent = changeMot[0];
  item11.textContent = ".";
  item12.textContent = ".";
  item13.textContent = ".";
  item14.textContent = ".";
  item15.textContent = ".";
  item16.textContent = ".";
  let elementClicked1 = false;

  buttons.forEach((button1) => {
    button1.addEventListener("click", function handleClick(e) {
      if (elementClicked1) {
        return;
      } else {
        efface.addEventListener("click", () => {
          document.querySelector(".item11").textContent = ".";
          elementClicked1 = false;
        });
      }
      elementClicked1 = true;

      let elementClicked2 = false;
      document.querySelector(".item11").textContent = e.target.id;

      //------------------------------------------------------------------------
      //incrémenter item2 si 1 ok
      //------------------------------------------------------------------------

      if ((elementClicked1 = true)) {
        buttons.forEach((button2) => {
          button2.addEventListener("click", function handleClick(e) {
            if (elementClicked2) {
              return;
            } else {
              efface.addEventListener("click", () => {
                document.querySelector(".item12").textContent = ".";
              });
            }
            elementClicked2 = true;
            let elementClicked3 = false;
            document.querySelector(".item12").textContent = e.target.id;
            //------------------------------------------------------------------------
            //incrémenter item3 si 2 ok
            //------------------------------------------------------------------------

            if ((elementClicked2 = true)) {
              buttons.forEach((button3) => {
                button3.addEventListener("click", function handleClick(e) {
                  if (elementClicked3) {
                    return;
                  } else {
                    efface.addEventListener("click", () => {
                      document.querySelector(".item13").textContent = ".";
                    });
                  }
                  elementClicked3 = true;

                  let elementClicked4 = false;
                  document.querySelector(".item13").textContent = e.target.id;
                  //------------------------------------------------------------------------
                  //incrémenter item4 si 3 ok
                  //------------------------------------------------------------------------
                  if ((elementClicked3 = true)) {
                    buttons.forEach((button4) => {
                      button4.addEventListener(
                        "click",
                        function handleClick(e) {
                          if (elementClicked4) {
                            return;
                          } else {
                            efface.addEventListener("click", () => {
                              document.querySelector(".item14").textContent =
                                ".";
                            });
                          }
                          elementClicked4 = true;

                          let elementClicked5 = false;
                          document.querySelector(".item14").textContent =
                            e.target.id;

                          //------------------------------------------------------------------------
                          //incrémenter item5 si 4 ok
                          //------------------------------------------------------------------------
                          if ((elementClicked4 = true)) {
                            buttons.forEach((button5) => {
                              button5.addEventListener(
                                "click",
                                function handleClick(e) {
                                  if (elementClicked5) {
                                    return;
                                  } else {
                                    efface.addEventListener("click", () => {
                                      document.querySelector(
                                        ".item15"
                                      ).textContent = ".";
                                    });
                                  }
                                  elementClicked5 = true;

                                  let elementClicked6 = false;
                                  document.querySelector(
                                    ".item15"
                                  ).textContent = e.target.id;
                                  //------------------------------------------------------------------------
                                  //incrémenter item6 si 5 ok
                                  //------------------------------------------------------------------------
                                  if ((elementClicked5 = true)) {
                                    buttons.forEach((button6) => {
                                      button6.addEventListener(
                                        "click",
                                        function handleClick(e) {
                                          if (elementClicked6) {
                                            return;
                                          } else {
                                            efface.addEventListener(
                                              "click",
                                              () => {
                                                document.querySelector(
                                                  ".item16"
                                                ).textContent = ".";
                                              }
                                            );
                                          }
                                          elementClicked6 = true;
                                          document.querySelector(
                                            ".item16"
                                          ).textContent = e.target.id;
                                        }
                                      );
                                    });
                                  }
                                }
                              );
                            });
                          }
                        }
                      );
                    });
                  }
                });
              });
            }
          });
        });
      }
    });
  });
};

// Tentative de switch case ...

// let elementClicked1 = false;
// let elementClicked2 = false;
// let elementClicked3 = false;
// switch (item01) {
//   case buttons.forEach((button1) => {
//     button1.addEventListener("click", function handleClick(e1) {
//       if (elementClicked1) {
//         return;
//       }
//       elementClicked1 = true;

//       event1 = e1.target.id;
//       item01.textContent = event1;
//     });
//   }):
//     break;

//   case buttons.forEach((button2) => {
//     button2.addEventListener("click", function handleClick(e2) {
//       if (elementClicked2) {
//         return;
//       }
//       elementClicked2 = true;

//       event2 = e2.target.id;
//       item02.textContent = event2;
//     });
//   }):
//     break;

//   default:
//     break;
// }
