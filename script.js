let coin = 0;

const Cel = document.getElementById("console");
const Iel = document.getElementById("input");

let GameS = "start";


function log(message) {
    Cel.textContent += `\n> ${message}`;
    Cel.scrollTop = Cel.scrollHeight;
}

function GameScroll(event) {
    if (event.key === 'Enter') {
        const userInput = Iel.value;
        Iel.value = '';
        Thegame(userInput);
    }
}

function Thegame(command) {
    switch (GameS) {
        case 'start':
            if (command === "go") {
                
                GameS = "pear";
                log("Как будет груша?");
                log("1.paer");
                log("2.pear");
                log("3.apple");
                log("ответ вы должны написать буквами, а не цифрами, по типу: (вопрос): Как по английски будет да?, ответ:yes")

            }
            else if (command === "5348") {
                
                GameS = "bird"
                log("Хорошо, как будет птица?");
                log("1.bird");
                log("2.berd");
                log("3.bord");
                coin += 25;
                document.getElementById("coin").innerText = coin;
            
            }
            else if (command === "1043") {
                GameS = "one";
                log('Хорошо, 1 на английском?');
                log("1.ona");
                log("2.one");
                log("3.two");
                coin += 45;
                document.getElementById("coin").innerText = coin;
            }
            break;
        case "pear":
            if (command === "pear") {
                GameS = "apple";
                log("Правильно! Я вам даю 5 коинов за ответ, в будующем вы можете их тратить ");
                log("Как будет по английски яблоко?");
                log("1.apple");
                log("2.yabloko");
                log("3.opple");
                coin += 5;
                document.getElementById("coin").innerText = coin;
            }
            else {
                log("Неправильно! Груша будет - pear");
            }
            break;
        case "apple":
            if (command === "apple") {
                GameS = "bread";
                log("Правильно! Я вам даю 5 коинов за ответ, в будующем вы можете их тратить ");
                log("Как будет по английски хлеб?");
                log("1.bred");
                log("2.hleb");
                log("3.bread");

                coin += 5;
                document.getElementById("coin").innerText = coin;
            }
            else {
                log("Неправильно! Яблоко будет - apple");
            }
            break;
        case "bread":
            if (command === "bread") {
                GameS = "orange";
                log("Правильно! Я вам даю 5 коинов за ответ, в будующем вы можете их тратить ");
                log("Как будет апельсин по английски?");
                log("1.orange");
                log("2.orangev");
                log("3.oran");
                coin += 5;
                document.getElementById("coin").innerText = coin;
            }
            else {
                log("Неправильно! хлеб будет - bread");
            }
            break;
        case "orange":
            if (command === "orange") {
                GameS = "salt";
                log("Правильно! Я вам даю 5 коинов за ответ, в будующем вы можете их тратить ");
                log("Как будет по английски соль?");
                log("1.solt");
                log("2.salt");
                log("3.selt");
                coin += 5;
                document.getElementById("coin").innerText = coin;
            }
            else {
                log("Неправильно! апельсин будет - orange");
            }
            break;
        case "salt":
            if (command === "salt") {
                GameS = "5445";
                log("Правильно! Я вам даю 5 коинов за ответ, в будующем вы можете их тратить");
                log("ВЫ прошли первый урок! Можете либо отдохнуть, либо учиться дальше, пароль если вы хотите пройти к этому уровню если вы уйдёте с сайта: 5348");
                log("Напиши go2 если хотите пройти дальше");

                coin += 5;
                document.getElementById("coin").innerText = coin;
            }
            else {
                log("Неправильно! Соль будет - salt");
            }
            break;
        case "5445":
            if (command === "go2") {
                GameS = "bird"
                log("Хорошо, как будет птица?");
                log("1.bird");
                log("2.berd");
                log("3.bord");
            }
        case "bird":
            if (command === "bird") {
                GameS = "cat";
                log("Правильно! Я вам даю 5 коинов за ответ, в будующем вы можете их тратить ");
                log("Как будет кот?");
                log("1.cot");
                log("2.kot");
                log("3.cat");
                coin += 5;
                document.getElementById("coin").innerText = coin;
                //log("Правильно! Я вам даю 5 коинов за ответ, в будующем вы можете их тратить ");
                //coin += 5;
                //document.getElementById("coin").innerText = coin;
            }
            else {
                log("Неправильно! птица будет - bird");
            }
            break;
        case "cat":
            if (command === "cat") {
                GameS = "dog";
                log("Правильно! Я вам даю 5 коинов за ответ, в будующем вы можете их тратить ");
                log("Как будет собака по англискому?");
                log("1.dog");
                log("2.get");
                log("3.sobaka");
                coin += 5;
                document.getElementById("coin").innerText = coin;
            }
            else {
                log("Неправильно! кот будет - cat");
            }
            break;
        case "dog":
            if (command === "dog") {
                GameS = "bear";
                log("Правильно! Я вам даю 5 коинов за ответ, в будующем вы можете их тратить ");
                log("Как будет по английски медведь?");
                log("1.bear");
                log("2.beer");
                log("3.bree");
                coin += 5;
                document.getElementById("coin").innerText = coin;
            }
            else {
                log("Неправильно! собака будет - dog");
            }
            break;
        case "bear":
            if (command === "bear") {
                GameS = "go3";
                log("Правильно! Я вам даю 5 коинов за ответ, в будующем вы можете их тратить ");
                log("2 урок закончен, вы также можете просто на сегодня отдохнуть, пароль:1043, чтобы пойти на 3 урок напишите go3");

                coin += 5;
                document.getElementById("coin").innerText = coin;
            }
            else {
                log("Неправильно! медведь будет - bear");
            }
            break;
        case "go3":
            if (command === "go3") {
                GameS = "one";
                log('Хорошо, 1 на английском?');
                log("1.ona");
                log("2.one");
                log("3.two");
            }
            break;
        case "one":
            if (command === "one") {
                GameS = "two";
                log("Правильно! Я вам даю 5 коинов за ответ, в будующем вы можете их тратить ");
                log("2 на английском");
                log("1.two");
                log("2.twa");
                log("3.tvo");

                coin += 5;
                document.getElementById("coin").innerText = coin;
            }
            else {
                log("Неправильно! 1 будет - one");
            }
            break;
        case "two":
            if (command === "two") {
                GameS = "three";
                log("Правильно! Я вам даю 5 коинов за ответ, в будующем вы можете их тратить ");
                log("3 на английском?");
                log("1.three");
                log("2.two");
                log('3.five');
                coin += 5;
                document.getElementById("coin").innerText = coin;
            }
            else {
                log("Неправильно! 2 будет - two");
            }
            break;
        case "three":
            if (command === "three") {
                GameS = "four";
                log("Правильно! Я вам даю 5 коинов за ответ, в будующем вы можете их тратить ");
                log("4 на английском?");
                log("1.faur");
                log("2.fuar");
                log("3.four");
                coin += 5;
                document.getElementById("coin").innerText = coin;
            }
            else {
                log("Неправильно! 3 будет - three");
            }
            break;
        case "four":
            if (command === "four") {
                GameS = "five";
                log("Правильно! Я вам даю 5 коинов за ответ, в будующем вы можете их тратить ");
                log("Как будет на английском 5?");
                log("1.five");
                log("2.six");
                log("3.fovi");
                coin += 5;
                document.getElementById("coin").innerText = coin;
            }
            else {
                log("Неправильно! 4 будет - four");
            }
            break;
        case "five":
            if (command === "five") {
                GameS = "hhh";

                log("Правильно! Я вам даю 5 коинов за ответ, в будующем вы можете их тратить ");
                log("Молодцы! ВЫ прошли курс (3 урок), пока на этом конец, скоро тут будет больше уроков, в будующем пароль для 2 курса будет 5243");
                coin += 5;
                document.getElementById("coin").innerText = coin;
            }
            break;


        
        


    }
}

Iel.addEventListener('keydown', GameScroll);
restartGame();

function restartGame() {
    
    GameS = 'start';
    Cel.textContent = '';
    log("Привет! Это игра `The Capybara English Game`, Игра где ты будешь учить слова по англискому с помощью этой игры, начинаем!");
    log("Напишите go чтобы пойти дальше, чтобы найти информацию по словам тыкайте по ссылке снизу от этого блока, или введите пароль который вам дал сайт чтобы вы дальше прошли");


    log("");
}