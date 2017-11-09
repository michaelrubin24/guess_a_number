
var number = 35;
var guess;
var i = 1;

while(number != guess){
    guess = +prompt("Угадайте число от 0 до 100 (включительно)");
    if( !isNaN(guess) && guess >= 0 && guess <= 100){
      if(guess == number){
        alert("Вы УГАДАЛИ число с " + i + "-ой попытки");
      }else{
        var help =  guess > number ? "Вы ввели число БОЛЬШЕ чем загаданное" : "Вы ввели число МЕНЬШЕ чем загаданное";
        alert(help);
        i++;
            }
    }else{
      alert("Неправильный ввод");
          }
}
