var arrayq = histoire;

var question = document.getElementById("q");
var response = document.getElementById("r");
var counter = document.getElementById("count");
var ingoto = document.getElementById("inputgoto").value;

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

function Fshuffle ()
{
	shuffle(arrayq)
}
