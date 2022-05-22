export const addToWaitListService = (emailData) => {
  fetch(
    "https://lyannah-default-rtdb.europe-west1.firebasedatabase.app/.json",
    {
      method: "POST",
      body: JSON.stringify(emailData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then(() => {
      // Show a success Notification
      return true;
      console.log("This email was successfully added to the server");
    })
    .catch((error) => {
      return false;
      console.log(
        "The user was not added to the wait-list on firebase server."
      );
    });
};
