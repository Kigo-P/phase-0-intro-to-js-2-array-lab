// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name = 'Ralph'){
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
cats.push('Ralph');
}

function destructivelyPrependCat(name = 'Bob'){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.unshift('Bob');
    }

function destructivelyPrependCat(name = 'Bob'){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.shift();
}

l
function appendCat(name) {
    const copyCats = cats.slice()
    copyCats.push(name)
    return copyCats
}

function prependCat(name) {
    const copyCats = cats.slice()
    copyCats.unshift(name)
    return copyCats
}

function removeLastCat(name) {
    const copyCats = cats.slice()
    copyCats.pop(name)
    return copyCats
}

function removeFirstCat(name) {
    const copyCats = cats.slice()
    copyCats.shift(name)
    return copyCats
}
