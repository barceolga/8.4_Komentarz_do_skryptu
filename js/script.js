// scripts.js file
var name = prompt('Enter your name');
alert('Hello, ' + name + '.');
console.log('Hello, ' + name + '.');
      //const helloWording = Hello, $(name); Próbowałam wykorzystać const jako zmienną, ale kod nie działa, consola zwraca mi błąd SyntaxError: Missing initializer in const declaration.
    //console.log(helloWording); No i nie wiem, dlaczego tak sie dzieje, bo przecież const ma zadeklarowaną wartość po znaku równości...
var age = prompt ('Could you please state your age, ' + name + '? Please enter a numerical value, for example, 22.');
alert('You are ' + age + ' years old, ' + name + '.');
console.log ('You are ' + age + ' years old, ' + name + '.');
var country = prompt('Please tell us in which country do you live, ' + name + '.');
/*alert(country + ' is a very nice place to live in, ' + name + '. Specially if you are ' + age + ' years old:).');*/
console.log(country + ' is a very nice place to live in, ' + name + '. Specially if you are ' + age + ' years old:).');
