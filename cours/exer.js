document.write("test 3 ");
var histoire = [
["what is that ?","a chicken" ],
["who is that ?","me"]
]

var question = document.getElementById("q");
var response = document.getElementById("r");

question.innerHTML = histoire[0][0];
response.innerHTML = histoire[0][1];

function nextquestion () {
question.innerHTML = histoire[1][0];
question.innerHTML = histoire[1][1];
}

function reveal () {

}
