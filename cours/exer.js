document.write("test 5");
var histoire = [
["what is that ?","a chicken" ],
["who is that ?","me"]
]
//document.write(histoire.length)

var question = document.getElementById("q");
var response = document.getElementById("r");
var counter = document.getElementById("count");

var nq = 0;
var lq = (histoire.length - 1);


counter.innerHTML = "${nq+1}/${lq+1}"
question.innerHTML = histoire[nq][0];
response.innerHTML = " ";

function nextquestion () {

if (nq == lq) {
nq = -1
}

nq += 1;
question.innerHTML = histoire[nq][0];
response.innerHTML = " ";
}

function reveal () {
response.innerHTML = histoire[nq][1];
}
