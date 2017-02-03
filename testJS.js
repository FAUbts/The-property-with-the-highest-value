/*Свойство с наибольшим значением


Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

Если объект пустой, то пусть он выводит «нет сотрудников».*/

"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

// ... ваш код выведет "Петя"

function getHighest(obj){
	var name = "Нет сотрудников";
	var highest = 0;
	for (var key in obj){
		if (obj[key] >= highest) {
			highest = obj[key];
			name = key;
		};
	}
	return name;
}

console.log(getHighest(salaries));

salaries = {};
console.log(getHighest(salaries));