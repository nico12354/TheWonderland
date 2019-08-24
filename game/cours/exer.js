var arrayq = mots;

var question = document.getElementById("q");
var response = document.getElementById("r");
var counter = document.getElementById("count");
var ingoto = document.getElementById("inputgoto").value;
var lessonselect = document.getElementById("lessonlist");

var nq = 0;
var lq = (arrayq.length - 1);

counter.innerHTML = (nq+1) + " / " + (lq+1)
question.innerHTML = arrayq[nq][0];
response.innerHTML = " / ";

function nextquestion ()
{
	if (nq == lq)
	{
		nq = -1
	}
	nq += 1;
	counter.innerHTML = (nq+1) + " / " + (lq+1)
	question.innerHTML = arrayq[nq][0];
	response.innerHTML = " / ";
}

function reveal ()
{
	response.innerHTML = arrayq[nq][1];
}

function knowit ()
{
	arrayq.splice(nq,1)
	if (nq == lq)
	{
		nq = 0
	}
	lq = (arrayq.length - 1);
	counter.innerHTML = (nq+1) + " / " + (lq+1)
	if (lq == -1) {
		question.innerHTML = "Tu as terminé, Bravo !";
	} else {
		nq -= 1
		nextquestion()
	}
}

function save ()
{
	var textarray = JSON.stringify(arrayq)
	localStorage.setItem('arrayq', textarray);
}

function load ()
{
	var userload = JSON.parse(localStorage['arrayq']);
	arrayq = userload
	nq = 0;
	refresh ()
}

function refresh ()
{
	lq = (arrayq.length - 1);
	counter.innerHTML = (nq+1) + " / " + (lq+1)
	question.innerHTML = arrayq[nq][0];
	response.innerHTML = " / ";
}

function Igoto ()
{
	ingoto = document.getElementById("inputgoto").value;
	nq = parseInt(ingoto)
	lq = (arrayq.length - 1);
	if (isNaN(nq)){
		nq = 0
		refresh()
	} else if (nq <= 0){
		nq = 0
		refresh()
	} else if (nq > lq){
		nq = lq
		refresh()
	} else {
		nq -= 1
		refresh()
	}
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function fshuffle ()
{
	shuffle(arrayq)
	refresh()
}

function changelesson () 
{
	lessonselect = document.getElementById("lessonlist").value;
	if (lessonselect == "hi"){
		arrayq = histoire;
	} else if (lessonselect == "ec") {
		arrayq = economie;
	} else if (lessonselect == "hadi") {
		arrayq = histoireartdiapo;
	} else if (lessonselect == "mo") {
		arrayq = mots;
	}
	nq = 0;
	refresh()
}
