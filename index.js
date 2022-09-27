// dit is de plek waar onze functies moeten komen te staan.

function add(num1, num2) {
    return num1 + num2;
}

function findByName(names, user ) {
    // HET GEHELE OBJECT MOET WORDEN TERUGGEGEVEN
    for (let i = 0; i <names.length; i++) {
        const currentUser = names[i];
        if (currentUser.name === user) {
            console.log('Het is gelukt!')
            return currentUser;
        }
    }
    return  null;
}


module.exports = {
    add: add,
    findByName: findByName,
}




