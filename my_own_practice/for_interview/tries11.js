'use strict';

function usersCountByCity(users) {
    const usersCountByCity = {}
    users.forEach(obj => usersCountByCity.hasOwnProperty(obj.city) ?
        usersCountByCity[obj.city] += 1 :
        usersCountByCity[obj.city] = 1)
    return usersCountByCity
}

const users = [{
        id: 888,
        name: 'Denis',
        age: 44,
        city: 'Kyiv',
    },
    {
        id: 333,
        name: 'Alex',
        age: 33,
        city: 'Lviv',
    },
    {
        id: 392,
        name: 'Nastya',
        age: 22,
        city: 'Kyiv',
    },
    {
        id: 123,
        name: 'Violetta',
        age: 15,
        city: 'Odesa',
    },
    {
        id: 640,
        name: 'Mykola',
        age: 31,
        city: 'Lviv',
    },
];


/**
 * @param {object[]} users
 * @return {object}
 */

console.log(usersCountByCity(users)); // example // ===> { 'Kyiv': 2, 'Lviv': 2, 'Odesa': 1 }