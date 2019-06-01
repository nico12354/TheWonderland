var histoire = [
["Citer les différentes raisons qui expliquent l'émergence de l'extrèment droite en Europe durant la période des années 30","- Le Krach boursier de 1929 <br> - Augmentation du chômage, diminution de la production et de la valeur des titres boursiers. libéralistes donc l'Etat ne peut intervenir <br> - Mise en place du protectionnisme et de la dévaluation de la monnaie, ce qui aggrave la situation <br> - Défaite et diktat de Versailles = arrivée de régime Totalitaires <br> - Peur du communisme"],
["Citer l'exemple de huit pays et leader fascistes des années 30","- Léon Degrelle (Belgique) <br> - Benito Mussolini (Italie) <br> - Adolf Hitler (Allemagne) <br> - Géneral Franco (Espagne) <br> - Oswald Mosley (Angleterre) <br> - Charles Maurras (France) <br> - Marechal Pilsudski (Pologne) <br> - Amiral Horthy (Hongrie)"],
["Citer l'ensemble des éléments qui expliquent l'émergence du fascisme italien","- Crise générale (militaire, politique et sociale) après défaite guerre <br> - Honte pour les Italiens dû aux défaites de la 1ère guerre mondiale (Caporetto 1917) <br> - Guerre civile 1922 (défaite des socialistes) car chemises noires combattent violemment pr défendre nationalisme italien (la gauche) <br> - Partit fasciste prend le pouvoir par la force (marche sur rome 1922 25000 fasciste exigent le pouvoir) <br> - Remporte élection 1924 car guerre civile (répression)"],
["Citer l'ensemble des éléments qui expliquent l'émergence du nazisme allemand","-République Weimar (1919 - 1933) née dans des condition difficiles (révolution spartakiste + inflation des prix > république mal vue) <br> - Rancoeur défaite guerre <br> - Diktat de Versailles (pertes colonies + sanctions militaires + certains territoires occupés par alliés + dette) <br> - Etat n'intervient pas car libéralisme économique mais applique la dévaluation + protectionnisme (taxe d'importation pour pouser à utiliser les produits locaux) mais les mesures ne fonctionnent pas <br> - Peur du communisme (montée en Russie, peur de propagation en Europe) <br> - 1920 apparition NSDAP (parti national-socialiste) <br> - Crise 29, vote grandisssant pour communistes et nazis, Hitler se sert alors de la peur du communisme pour effrayer en prédisant que l'Allemagne va tomber dedans, nommé chancelier avec 1/3 des voies en 1933"],
["Citer l'ensemble des éléments qui expliquent l'émergence du communisme en Russie","- Les paysans moujiks et ouvrier de l'industrie sont mécontents (%soc, éco) et les bourgeois (%intellectuel car primauté noblesse et pas bourgeoisie même si intellectuels) <br> - 1905 : Dimanche Rouge à St Pétersbourg : Le Tsar fait tirer sur la foule + défaite contre le Japon <br> - Défaite militaire contre l'Allemagne en 1917 <br> - Quelques libertés ont été accordé au peuple après 1905, nottament la Douma, une assemblée législative <br> - Bolcheviks avec Lénine prennent le pouvoir en 1917 > 1918 le Tsar abdique puis tué avec sa famille, c'était un ordre de Lénine"],
["Citer l'ensemble des éléments qui expliquent le succès du VNV ou du Rexisme en Belgique durant les années 30","- Le traité de Versailles : la Belgique n'a droit à aucune reconnaissance <br> - Crise économique de 29 <br> - Faillite des banques, grands scandales financiers et cumul des mandats chez les parlementaires alimentent la critique <br> - Faillite des banques, grands scandales financiers et cumul de mandats chez les parlementaires alimentent la critique <br> - Tout cela alimente la critique des partis populistes + recherche d'un pouvoir fort qui mène au succès du Rex et de son équivalent flamand le VNV (vlaams nationaal verbond) <br> - Une grève générale en 1936 obtient des avantages : liberté syndicale, congés payés, salaire minimum, ... <br> - Mouvement nationaux en Flandres, Frontisme et activisme (Meilleur intégration de la langue flammande et indépendances de le Flandre)"],
["Placer dans le temps le Krach Boursier","1929 (24 octobre)"],
["Placer dans le temps le traité de Versailles","1919 (28 juin)"],
["Placer dans le temps Lénine","1870 (1917-1924) "],
["Placer dans le temps la défaite de l'URSS contre Japon","1905"],
["Placer dans le temps la défaite de l'URSS contre l'Allemagne","1917"],
["Placer dans le temps le dimanche rouge ","1905 "],
["Placer dans le temps Staline ","1878 (1925-1953)"],
["Placer dans le temps Hitler ","1889 (1933 - 1945) "],
["Placer dans le temps République Weimar ","1919 - 1933 "],
["Placer dans le temps NSDAP ","1920 "],
["Placer dans le temps lois de Nuremberg","1935 "],
["Placer dans le temps Mussolini ","1883 1922-1943 "],
["Placer dans le temps Marche sur Rome ","1922 (28 octobre) "],
["Placer dans le temps Caporetto ","1917 "],
["Placer dans le temps Lois fascistes ","1926 "],
["Décrire les caractéristiques principales d'un parti d'extrème-droite actuel (exemple du front national) ","-Individus naturellement inégaux <br> -problèmes réglés par la force/violence (mtn seulement dans propos car interdit par constition) <br> - opposés à la démocratie + au fonctionnement partis démocratique (membre égaux + décisions prises par la majorité) <br> - Propos racistes et xénophobes <br> - joue sur sentiment d'insécurité <br> - opposés aux autres partis surtout la gauche (socialistes/communistes) ou progressistes <br> - primauté nationale <br> - nationalisme/patriotisme"],
["Définir Totalitarisme ","Régime politique qui souhaite controler tous les secteurs de la société. Il veut imposer une idéologie visant à créer un homme nouveau"],
["Définir extrème droite ","Idéologie politique basée sur une critique radicale de la démocratie au nom d'une idéologie raciste et nationaliste"]






//[" "," "]
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
