const sendWelcomeMessage = () => {
  setTimeout(async () => {
    console.log("Welcome to GBG! Best of luck on your challenge project!");

    sendWelcomeMessage()
  }, 5000);
};

sendWelcomeMessage();
