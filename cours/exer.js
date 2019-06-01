document.write("test 4");
var histoire = [
["what is that ?","a chicken" ],
["who is that ?","me"]
]

var question = document.getElementById("q");
var response = document.getElementById("r");

var nq = 0;

question.innerHTML = histoire[nq][0];
response.innerHTML = " ";

function nextquestion () {
nq += 1;
question.innerHTML = histoire[nq][0];
response.innerHTML = " ";
}

function reveal () {
response.innerHTML = histoire[nq][1];
}
