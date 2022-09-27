const {add, findByName}  = require('../index'); //DESTRUCTURING!!

test('controleer of deze test werkt', () => {
    console.log('Ik wordt uitgevoerd');
})

test('The Add function adds two numbers and returns the correct sum.', () => {
    //ARRANGE
    const num1 = 5;
    const num2 = 10;

    //ACT
    const sum = add(num1, num2);
    //ASSERT
    expect(sum).toBe(15);

});


test('findByName will return an object from an array with the pecified name', () => {
    //ARRANGE
    const userNames = [
        {name: 'Piet', id: 1},
        {name: 'Klaas', id: 2},
        {name: 'Henk', id: 3},
    ]

    const userToFind = "Klaas";
    //ACT
    const result = findByName(userNames, userToFind);

    //ASSERT
    expect(result).toEqual({name: 'Klaas', id: 2}); // LET OP REFERENCE IDENTITY!!!

} );

test('findByName return null if a user is not found.', () => {
    //ARRANGE
    const userNames = [
        {name: 'Piet', id: 1},
        {name: 'Klaas', id: 2},
        {name: 'Henk', id: 3},
    ]

    const userToFind = "Beppie";
    const result = findByName(userNames, userToFind);
    expect(result).toBeNull(); // LET OP REFERENCE IDENTITY!!!



    //ACT

    //ASSERT
})