/* eslint-disable */
// {"environmentRecord":{
// message:"Text",
// weight: 66
//}
// "outher: null"

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}
if (weight) {
  console.log('My weight is ' + weight);
}
const messanger = createMessenger();
run();
// ========
function counter() {
  let count = 0;
  return () => {
    count += 1;
    console.log(count);
  };
}
