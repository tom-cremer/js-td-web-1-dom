/*
Exercices qui accompagnent le tuto en anglais de Christian Heilmann :
« The essentials of DOM scripting in 10 minutes »,
http://icant.co.uk/articles/domessentials/
=> voir traduction française sur transparents (js-cours-DOM.pdf)
*/

/* 1. Cibler l'élément d'id nav */

document.getElementById('nav');

/* 2. Récupérer tous les li */

document.querySelectorAll('li');

/* 3. Cibler le 4e li */

document.querySelector('li:nth-child(3)'); // plus interessant
document.getElementById('nav').children[3]; // trop de probleme
document.getElementById('li4'); // pour les faibles


/* 4. Compter le nombre de li dans la page */

document.getElementById('nav').children.length;

/* 5. Cibler le premier li pair */

document.querySelector('li:nth-child(odd)');

/* 6. Récupérer tous les li de classe impair */

document.querySelectorAll('.impair');

/* a) afficher ce qu'on obtient */

const impairs = document.querySelectorAll('.impair');
/*
for (let i = 0; i < impairs.length; i++) {
    console.log(impairs[i]);
}
*/

for (const impair of impairs) { // Better than for i
    console.log(impair);
}

/* b) afficher le 2e li de classe impair */

console.log(impairs[1]);


/* c) afficher chacun des li impair */

impairs.forEach((e) => {console.log(e)});

/* d) compter le nombre de li de classe impair dans la page */

console.log(impairs.length);

/* 7. Cibler le 4e li puis, à partir de là, cibler son frère juste avant lui */

console.log(document.querySelector('li:nth-child(4)'));

/* 8. Cibler le 4e li puis, à partir de là, cibler le suivant */

console.log(document.querySelector('li:nth-child(4) + li'));


/* 9. Cibler le parent du 4e li */



/* 10. Récupérer tous les enfants de l'ul */


/* a) afficher ce qu'on obtient */

/* b) cibler le 1er enfant de l'ul */


/* c) cibler le dernier enfant de l'ul */


/* c) cibler le 4e enfant de l'ul */



/* 11. Chaînage de méthodes - que retournent les expressions suivantes ? */
/* a) document.getElementById("nav"). getElementsByTagName("li")[3].firstChild */


/* b) document. getElementsByTagName("li")[2].childNodes[3].firstChild */


/* c) document. getElementsByTagName("li")[2].firstChild.firstChild */



/* 12. Afficher les propriétés (nom du nœud, type de nœud, valeur du nœud) d'un nœud
*/
/* a) du noeud document.getElementById("nav").getElementsByTagName("li")[3].firstChild */


/* b) du noeud document.getElementById("nav").getElementsByTagName("a")[2].firstChild */



/* 13. Changer le texte "Photos" en "Visuals" */



/* 14. Modifier les attributs d'un élément */
/* a) Changer la valeur de l'attribut href du lien "Photos" en "photos.php" */


/* a) Lui ajouter un attribut title avec la valeur "voir mes photos" */


/* 15. Supprimer le dernier li du menu
       (faites-le en utilisant la méthode querySelector pour cible l'ul
        et querySelectorAll pour cibler les li)
*/



/* 16. Ajouter un li à la fin de la liste */




/* 17. Ajouter un lien dans le menu. Ce lien doit
	- venir avant "photos",
	- afficher le texte "Bibliographie",
	- pointer vers la page "biblio.html" et
	- afficher au survol la boîte de dialogue avec le texte "consulter ma bibliographie"  */






/* 18. Modifier le lien "Photos" 
	  - changer son libellé en "Visuals" 
	  - ajouter une boîte de dialogue au survol avec le texte "voir la galerie" 
	  - changer la cible du lien en "visuals.html " */





/* 19. Dupliquer le li "Photos" et s'en servir pour ajouter un lien
	   - juste après le lien "Photos"
	   - dont le libellé est "Visuals" 
	   - avec une boîte de dialogue au survol qui affiche le texte "voir la galerie" 
	   - qui pointe vers la page "visuals.html " */





/* 20. Remplacer le dernier lien par le texte (non cliquable) "Contact : monmail@gmail.com"*/
