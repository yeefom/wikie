export function getTimeStamp() {
  const timeStamp = new Date();
  const year = timeStamp.getFullYear();
  let [month, day] = [timeStamp.getMonth() + 1, timeStamp.getDate()];
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }

  return {
    year,
    month,
    day
  };
}
