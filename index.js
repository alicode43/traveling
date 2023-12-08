function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}
  console.log(getCurrentDate());
  console.log(getCurrentDate());

document.getElementById('dateInput').value = getCurrentDate();
document.getElementById('dateInput2').value = getCurrentDate();
var inputDate = document.getElementById('dateInput').value;

   
// var date = new Date(getCurrentDate());


//       var dayOfWeek = date.getDay();




//       var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//       // Get the day name using the array
//       var dayName = daysOfWeek[dayOfWeek];

//       // Display the result
//       alert('The day is: ' + dayName);