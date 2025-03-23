document.addEventListener("DOMContentLoaded", () => {
  const URL = "http://192.168.1.58:4000";
  //   const URL = "http://localhost:4000";

  const button = document.getElementById("button");

  let clickNum = 0;
  button.addEventListener("click", () => {
    clickNum++;
    let stat = "off";
    if (clickNum % 2 == 1) {
      stat = "on";
    }

    const timestamp = Date.now();
    const date = new Date(timestamp);
    const sumdata = {
      message: "Button was clicked",
      date: date.toLocaleString(),
      status: stat,
    };
    // console.log(JSON.stringify(sumdata));

    fetch(`${URL}/log`, {
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
