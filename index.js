// Stocker dans des variables les éléments HTML sur lesquels agir :
// - la balise textarea#user-input
// - la balise div#contenuHTML
let inputText = document.querySelector('#input-text');
let contenuHTML = document.querySelector('#contenu-html');


// Créer une fonction à appeler dès qu'une touche sera relachée dans la zone de
// saisie #user-input. Cette fonction doit remplacer le contenu de #contenuHTML
// par celui de la textarea, mais attention : le *texte* de #user-input doit
// devenir du *HTML* dans #contenuHTML
function livePreview() {
  contenuHTML.innerHTML = inputText.value;
}


// Appeler la fonction lors d'un événement 'keyup'. Si tout va bien… ça marche !
inputText.addEventListener('keyup', livePreview);



// Bonus : pré-remplir #user-input avec le contenu de #contenuHTML, pour donner
// un exemple à l'utilisateur dès que la page se charge.
// - Ajouter du contenu HTML dans #contenuHTML (en dur, ou via JS).
// - Récupérer ce HTML sous forme texte et l'utiliser comme valeur de la #user-input.
inputText.value = contenuHTML.innerHTML;
// Hey, pas mal !
// Mais pas optimal :
// - il y a des espaces au début de chaque ligne du code récupéré
// - il y a une ligne vide avant le début du code récupéré
// - quand on modifie le texte, les images se rechargent, c'est bizarre
// => eh oui, plus on avance, plus y a de détails à corriger >_<
// Allez, on s'arrête là pour cet exo :)