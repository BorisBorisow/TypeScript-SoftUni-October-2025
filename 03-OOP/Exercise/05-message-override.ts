class Message {
  send(): string {
    return "Sending message...";
  }
}

class EmailMessage {
  send(): string {
    return "Sending Email...";
  }
}

class SMSMessage {
  send(): string {
    return "Sending SMS...";
  }
}

const messages: Message[] = [
  new Message(),
  new EmailMessage(),
  new SMSMessage(),
];

messages.forEach((msg) => {
  console.log(msg.send());
});
