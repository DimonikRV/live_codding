const allStudents = ['Ann', 'Bob', 'John', 'Jane'];
const failedStudents = ['John', 'Bob'];
function sendGreetings(allStudents, failedStudents) {
  return allStudents
    .filter(name => failedStudents.indexOf(name) === -1)
    .map(name => 'congratulations ' + name);
}
console.log(sendGreetings(allStudents, failedStudents));
