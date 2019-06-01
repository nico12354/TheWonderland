var histoire = [
["Citer les différentes raisons qui expliquent l'émergence de l'extrèment droite en Europe durant la période des années 30","- Le Krach boursier de 1929 <br> - Les pays touchés douvent faire face à une augmentation du chômage, une diminution de la production et de la valeur des titres boursiers. Comme ces pays sont libéralistes, l'Etat ne peut intervenir <br> - Mise en place du protectionnisme et de la dévaluation de la monnaie, ce qui aggrave la situation <br> - Défaite et diktat de Versailles = arrivée de régime Totalitaires <br> - Peur du communisme"],
["Citer l'exemple de huit pays et leader fascistes des années 30","- Léon Degrelle (Belgique) <br> - Benito Mussolini (Italie) <br> - Adolf Hitler (Allemagne) <br> - Géneral Franco (Espagne) <br> - Oswald Mosley (Angleterre) <br> - Charles Maurras (France) <br> - Marechal Pilsudski (Pologne) <br> - Amiral Horthy (Hongrie)"],
["Citer l'ensemble des éléments qui expliquent l'émergence du fascisme italien","- Crise générale (militaire, politique et sociale) après défaite guerre <br> - Honte pour les Italiens dû aux défaites de la 1ère guerre mondiale (Caporetto 1917) <br> - Guerre civile 1922 (défaite des socialistes) car chemises noires combattent violemment pr défendre nationalisme italien (la gauche) <br> Partit fasciste prend le pouvoir par la force (marche sur rome 1922 25000 fasciste exigent le pouvoir) <br> - Remporte élection 1924 car guerre civile (répression)"],
[" "," "],
[" "," "],
[" "," "]


//[" "," "],
]

var question = document.getElementById("q");
var response = document.getElementById("r");
var counter = document.getElementById("count");

var nq = 0;
var lq = (histoire.length - 1);


counter.innerHTML = (nq+1) + " / " + (lq+1)
question.innerHTML = histoire[nq][0];
response.innerHTML = " / ";

function nextquestion () {

if (nq == lq) {
nq = -1
}

nq += 1;
counter.innerHTML = (nq+1) + " / " + (lq+1)

question.innerHTML = histoire[nq][0];
response.innerHTML = " / ";
}

function reveal () {
response.innerHTML = histoire[nq][1];
}
