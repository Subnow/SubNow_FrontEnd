export function formatDate(dateObj) {
  const { day, month, year } = dateObj;
  // Pad the day and month with zeros if they are less than 10
  const formattedDay = day.toString().padStart(2, '0');
  const formattedMonth = month.toString().padStart(2, '0');
  return `${formattedDay}/${formattedMonth}/${year}`;
}
export function formatStringDate(dateString){
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  return  `${year}-${month}-${day}T00:00:00`;
}
