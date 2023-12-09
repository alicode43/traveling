function getDayOfWeek(date) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}

// Function to update the displayed day when the date changes
function updateDay(inputType) {
  const startDateInput = document.getElementById('dateInput');
  const endDateInput = document.getElementById('dateInputReturn');
  
  const startResultElement = document.getElementById('day');
  const endResultElement = document.getElementById('returnDay');
  console.log(endDateInput.value);

  const startDate = startDateInput.value ? new Date(startDateInput.value) : new Date();
  const endDate = endDateInput.value ? new Date(endDateInput.value) : new Date();

  // Get the days of the week
  const startDayOfWeek = getDayOfWeek(startDate);
  const endDayOfWeek = getDayOfWeek(endDate);

 
  startResultElement.textContent = `${startDayOfWeek}`;
  endResultElement.textContent = `${endDayOfWeek}`;
}


// Set the default dates and update the days on page load
document.addEventListener('DOMContentLoaded', () => {
  const startDateInput = document.getElementById('dateInput');
  const endDateInput = document.getElementById('dateInputReturn');

  const today = new Date().toISOString().split('T')[0];
  

  startDateInput.value = today;
  endDateInput.value = today;

  const start= updateDay('startDate');
  const end=updateDay('endDate');
  // console.log(start,end);
  
});

function change(){
  const departLocation= document.getElementById("departLocation");
  const departAirport= document.getElementById("departAirport");
  
  
  const destinationLocation= document.getElementById("destinationLocation");
  const destinationAirport= document.getElementById("destinationAirport");
  const DLval=destinationLocation.textContent;
  const DAval=destinationAirport.value;

  destinationLocation.textContent=departLocation.textContent;
  departLocation.textContent=DLval;

  destinationAirport.value=departAirport.value;
  departAirport.value=DAval;
  console.log('change clicked');
}