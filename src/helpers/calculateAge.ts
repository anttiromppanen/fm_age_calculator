function calculateAge(birthDateStr: string): {
  years: number;
  months: number;
  days: number;
} {
  // Parse the birthDateStr into a Date object
  const birthDate = new Date(birthDateStr);

  // Check if the parsing was successful
  if (Number.isNaN(birthDate.getTime())) {
    throw new Error("Invalid date format");
  }

  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const difference = currentDate.getTime() - birthDate.getTime();

  // Calculate milliseconds per year, month, and day
  const msPerYear = 1000 * 60 * 60 * 24 * 365.25; // Taking into account leap years
  const msPerMonth = msPerYear / 12;
  const msPerDay = 1000 * 60 * 60 * 24;

  // Calculate years, months, and days
  const years = Math.floor(difference / msPerYear);
  const months = Math.floor((difference % msPerYear) / msPerMonth);
  const days = Math.floor(((difference % msPerYear) % msPerMonth) / msPerDay);

  return { years, months, days };
}

export default calculateAge;
