import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let invoerJaar = parseFloat(await userInput.question('Geef een jaartal in om te bekijken of het een schrikkeljaar was: '))

if(invoerJaar % 4 == 0 ){
    console.log('Het aantal dagen in frebuari in '+ invoerJaar + ' zijn 28.')
}else{
    console.log('Het aantal dagenv oor februari in ' + invoerJaar + ' zijn 30.')
}

process.exit()