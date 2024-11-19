

export default function deleteData(id){
fetch(`http://localhost:5173/basket/${id}`, {
    method: 'DELETE'
})
    .then(response => {
        if (response.ok) {
            console.log('Record deleted successfully!');
        } else {
            console.error('Failed to delete the record.');
        }
    });}
