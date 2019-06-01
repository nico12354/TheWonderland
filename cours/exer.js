document.write("test 5");
var histoire = [
["what is that ?","a chicken" ],
["who is that ?","me"]
]
document.write(histoire.length)

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
