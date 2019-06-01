var arrayq = histoire;

var question = document.getElementById("q");
var response = document.getElementById("r");
var counter = document.getElementById("count");

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
	if (nq == lq) 
	{
		nq = -1
	}
	arrayq.splice(nq,1)
	lq = (arrayq.length - 1);
	counter.innerHTML = (nq+1) + " / " + (lq+1)
	nq -= 1
	nextquestion()
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
	refresh ()
}

function refresh ()
{
	nq = 0;
	lq = (arrayq.length - 1);
	counter.innerHTML = (nq+1) + " / " + (lq+1)
	question.innerHTML = arrayq[nq][0];
	response.innerHTML = " / ";
}