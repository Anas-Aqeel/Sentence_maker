
async function getApi() {
var subject;    
var subjdet = 'the';
var subjnum = 'singular';
var verb;
var object;
var objdet = 'a';
var objnum = 'singular';
var objmod = '';
var tense = 'present';
var progressive ;
var perfect;
var negated;
var passive;
var modal;
var sentencetype = 'declarative';

var show = document.getElementById('result')




    var data = await
        fetch('https://lt-nlgservice.herokuapp.com/rest/english/realise?subject=dog&verb=eat&object=watter&tense=past&progressive=progressive&festesmerkmal=tense,progressive')
    var result = await data.json();

    console.log(result)
}