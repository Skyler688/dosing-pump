document.addEventListener("DOMContentLoaded", () => {
  const URL = "http://192.168.1.58:4000";
  //   const URL = "http://localhost:4000";

  const button = document.getElementById("button");

  button.addEventListener("click", () => {
    const timestamp = Date.now();
    const date = new Date(timestamp);
    const sumdata = {
      message: "Button was clicked",
      date: date.toLocaleString(),
    };
    // console.log(JSON.stringify(sumdata));

    fetch(`${URL}/data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sumdata),
    })
      .then((response) => response.json())
      .then((resData) => console.log("Server response:", resData))
      .catch((error) => console.error("Error:", error));
  });
});
