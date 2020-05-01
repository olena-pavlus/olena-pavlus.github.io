var requestURL = 'https://raw.githubusercontent.com/olena-pavlus/json/master/text.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();
request.onload = function () {
	var ourteam = request.response;
	showTeam(ourteam);
};
var team__inner = document.querySelector('.team__inner');
var team__item = document.querySelectorAll('.team__item');
var team__name = document.querySelectorAll('.team__name');
var team__prof = document.querySelectorAll('.team__prof');
var team__text = document.querySelectorAll('.team__text');
var par1 = document.querySelectorAll('.par1');
var par2 = document.querySelectorAll('.par2');

function showTeam(jsonObj) {
	var team = jsonObj['team'];

	for (var i = 0; i < team.length; i++) {
        
        par2[i].textContent = team[i].par2;
        par1[i].textContent = team[i].par1;
        team__prof[i].textContent = team[i].team__prof;
        team__name[i].textContent = team[i].team__name;
        team__text[i].appendChild(par1[i]);
        team__text[i].appendChild(par2[i]);
        team__item[i].appendChild(team__name[i]);
        team__item[i].appendChild(team__prof[i]);
        team__item[i].appendChild(team__text[i]);
		team__inner.appendChild(team__item[i]);
	}
}