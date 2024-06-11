export function formatDate(dateObj) {
  const { day, month, year } = dateObj;
  // Pad the day and month with zeros if they are less than 10
  const formattedDay = day.toString().padStart(2, '0');
  const formattedMonth = month.toString().padStart(2, '0');
  return `${formattedDay}/${formattedMonth}/${year}`;
}
