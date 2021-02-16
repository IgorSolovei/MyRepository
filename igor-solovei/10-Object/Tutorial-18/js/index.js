const sender = { firstName: "Maryna", lastName: "Makukhina" };
const recipient = { ...sender };

recipient.firstName = "Mark";
recipient.lastName = "Zuckerberg";
const message = { text: "New text", dateTime: new Date() };

const request = {
  sender: Object.assign({}, sender),
  recipient: Object.assign({}, recipient),
  message: Object.assign({}, message),
};

const requestCopy = JSON.parse(JSON.stringify(request));
delete requestCopy.recipient;
request.sender.id = 983;

console.log(request);
console.log(requestCopy);