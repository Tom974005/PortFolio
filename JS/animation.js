// On stocke l'élément nav et class = nav dans 2 variables distinctes
let btn = document.querySelectorAll("nav");
let btnElem = document.querySelectorAll(".nav");

// On stock les éléments "aside" dans 2 variables à l'aide de leurs id
let asideQualif = document.getElementById("container-qualif");
let asideDiplome = document.getElementById("container-diplome");

// On stock les éléments ayant les id : "adresse", "mail" et "tel"
let divAdresse = document.getElementById("adresse");
let divMail = document.getElementById("mail");
let divTel = document.getElementById("tel");

// Largeur de ma fenêtre de navigation
let largeur = window.innerWidth;

// Tableau de couleurs
let colors = ["#9eed12", "#ed8212", "#d912ed", "#ed1262"];

// Fonction d'animation générant une couleurs du tableau 'colors'
// aléatoirement au survol de la souris
function overNav() {
  for (const item of btnElem) {
    item.addEventListener("mouseover", (clr) => {
      clr.target.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      (clr.target.style.borderRadius = "20px"), "55px";
    });
    item.addEventListener("mouseout", (clr) => {
      clr.target.style.backgroundColor = "";
    });
  }
}

// Animation au passage de la souris sur l'élément class = nav
function cacheCacheElem() {
  for (const item of btnElem) {
    item.addEventListener("mouseover", (e) => {
      e.target.style.marginLeft = "-1020px";
      e.target.style.transition = "0.5s";
    });
    item.addEventListener("mouseout", (e) => {
      e.target.style.marginLeft = "0px";
      e.target.style.textAlign = "center";
    });
  }
}
// Condition de 'cacheCacheElem' & 'overNav' en
// fonction de si la largeur est supérieur ou
// égale a 381px et inférieur à 780px
if (largeur >= 381 && largeur < 780) {
  cacheCacheElem();
  overNav();
}

function float() {
  if (largeur >= 280 && largeur < 480) {
    // Animation au passage de la souris sur l'élément
    // aside 'id = container-qualif'
    asideQualif.addEventListener("mouseenter", (open) => {
      open.target.style.backgroundColor = "#aecce5";
      open.target.style.opacity = "1";
      open.target.style.transitionDuration = "0.9s";
      open.target.style.marginLeft = "0px";
      open.target.style.boxShadow = "2px 2px 2px black";

      asideQualif.addEventListener("mouseleave", (cache) => {
        cache.target.style.marginLeft = "-31.7em";
        cache.target.style.boxShadow = "none";
        cache.target.style.opacity = "0.1";
      });
    });

    // Animation au passage de la souris sur l'élément
    // aside 'id = container-diplome'
    asideDiplome.addEventListener("mouseenter", (open) => {
      open.target.style.right = "0px";
      open.target.style.transitionDuration = "0.5s";
      open.target.style.backgroundColor = "#aecce5";
      open.target.style.opacity = "1";
      open.target.style.boxShadow = "-3px 3px 2px black";

      asideDiplome.addEventListener("mouseleave", (cache) => {
        cache.target.style.right = "-7.9em";
        cache.target.style.opacity = "0.1";
        cache.target.style.boxShadow = "none";
      });
    });
  } else if (largeur >= 480 && largeur < 780) {
    asideQualif.addEventListener("mouseenter", (o) => {
      o.target.style.marginLeft = "0px";
      o.target.style.backgroundColor = "#aecce5";
      o.target.style.transitionDuration = "0.9s";
      o.target.style.opacity = "1";
      o.target.style.boxShadow = "2px 2px 2px black";

      asideQualif.addEventListener("mouseleave", (c) => {
        c.target.style.marginLeft = "-34.7em";
        c.target.style.opacity = "0.2";
        c.target.style.backgroundColor = "none";
        c.target.style.boxShadow = "none";
      });
    });

    asideDiplome.addEventListener("mouseenter", (o) => {
      o.target.style.right = "2px";
      o.target.style.opacity = "1";
      o.target.style.transitionDuration = "0.5s";
      o.target.style.backgroundColor = "#aecce5";
      o.target.style.boxShadow = "-3px 3px 2px black";

      asideDiplome.addEventListener("mouseleave", (c) => {
        c.target.style.right = "-8.5em";
        c.target.style.opacity = "0.2";
        c.target.style.boxShadow = "none";
      });
    });
  } else if (largeur >= 780 && largeur < 1800) {
    asideQualif.addEventListener("mouseenter", (o) => {
      o.target.style.transitionDuration = "0.9s";
      o.target.style.marginLeft = "0px";
      o.target.style.backgroundColor = "#aecce5";
      o.target.style.opacity = "1";
      o.target.style.boxShadow = "2px 2px 2px black";

      asideQualif.addEventListener("mouseleave", (c) => {
        c.target.style.marginLeft = "-29.8em";
        c.target.style.boxShadow = "none";
        c.target.style.opacity = "0.2";
      });
    });
    asideDiplome.addEventListener("mouseenter", (o) => {
      o.target.style.transitionDuration = "0.9s";
      o.target.style.backgroundColor = "#aecce5";
      o.target.style.opacity = "1";
      o.target.style.right = "0px";
      o.target.style.boxShadow = "-2px 2px 2px black";

      asideDiplome.addEventListener("mouseleave", (c) => {
        c.target.style.right = "-13.5em";
        c.target.style.boxShadow = "none";
        c.target.style.opacity = "0.2";
      });
    });
  }
}

float();

// Effet d'ombre au passage de la souris sur les éléments
// div adresse, mail et tel
function shadowEffect() {
  divAdresse.addEventListener("mouseenter", (z) => {
    // z.target.style.transitionDuration = "2s";
    z.target.style.transitionDuration = "0.3s";
    z.target.style.transitionDelay = "0.3s";
    z.target.style.boxShadow = "4px 4px 3px rgba(196, 23, 61, 0.966)";

    divAdresse.addEventListener("mouseleave", () => {
      // z.target.style.transitionDuration = "0.7s";
      z.target.style.transitionDelay = "0.3s";
      z.target.style.boxShadow = "3px 3px 3px rgb(92, 73, 73)";
    });
  });

  divMail.addEventListener("mouseenter", (z) => {
    z.target.style.transitionDuration = "0.3s";
    z.target.style.transitionDelay = "0.3s";
    z.target.style.boxShadow = "4px 4px 3px rgba(196, 23, 61, 0.966)";

    divMail.addEventListener("mouseleave", () => {
      // z.target.style.transitionDuration = "0.7s";
      z.target.style.transitionDelay = "0.3s";
      z.target.style.boxShadow = "3px 3px 3px rgb(92, 73, 73)";
    });
  });

  divTel.addEventListener("mouseenter", (z) => {
    z.target.style.transitionDuration = "0.3s";
    z.target.style.transitionDelay = "0.3s";
    z.target.style.boxShadow = "4px 4px 3px rgba(196, 23, 61, 0.966)";

    divTel.addEventListener("mouseleave", () => {
      // z.target.style.transitionDuration = "0.7s";
      z.target.style.transitionDelay = "0.3s";
      z.target.style.boxShadow = "3px 3px 3px rgb(92, 73, 73)";
    });
  });
}

shadowEffect();
