export default function addDataToWhishList(data = {}) {
  fetch("http://localhost:5173/wishList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data added successfully:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
