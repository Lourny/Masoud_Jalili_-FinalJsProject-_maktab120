export default function unlike(id) {
  fetch(`http://localhost:5173/wishList/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (response.ok) {
      console.log("Record deleted successfully!");
    } else {
      console.error("Failed to delete the record.");
    }
  });
}
