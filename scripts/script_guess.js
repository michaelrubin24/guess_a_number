
/*
var telephone = prompt("Здравствуйте, введите номер телефона:","не указано");
var address_street = prompt("Улица","не указано");
var address_house = prompt("Номер дома:","не указано");
var address_flat = prompt("Квартира:","не указано");
var sum = +prompt("Сумма которую вы хотите вложить:","не указано");
var procent = +prompt("Процент под который вы хотите вложить деньги:","не указано");
var months = +prompt("На какой срок вы хотите положить свои деньги (кол-во месяцев):","не указано");
var deposit = (sum*procent)/100*months+sum;
var result = alert("Здравствуйте, на номер телефона "+telephone+",\n" + "На адрес: улица "+address_street+", дом " + address_house + ", квартира "+address_flat+"\n" + "Зарегистрирован счёт на сумму: " + sum + ", процент " + procent +",cрок "+ months +" месяцев" + "\n"+"После " + months + " месяцев вы сможете забрать вклад который = " + deposit +"$");
*/

var number = 35;
var guess;
var i = 0;

while(number != guess){
    guess = +prompt("Угадайте число от 0 до 100 (включительно)");
    if( !isNaN(guess) && guess >= 0 && guess <= 100){
      if(guess > number){
        alert("Вы ввели число БОЛЬШЕ чем загаданное");
        i++;
      }else if(guess < number){
        alert("Вы ввели число МЕНЬШЕ чем загаданное");
        i++;
      }
    }
    else{
      alert("Неправильный ввод");
    }
}
alert("Вы УГАДАЛИ число с " + (i+1) + "-ой попытки");
