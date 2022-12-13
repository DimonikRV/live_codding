const rooms = {
  room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};
const rooms2 = {};

const getPeople = obj => {
  if (Object.keys(obj).length === 0) {
    return [];
  }
  return Object.values(obj)
    .map(names => names.map(item => item.name))
    .reduce((names, name) => names.concat(name));
};

console.log(getPeople(rooms));
console.log(getPeople(rooms2));
