function randomDate() {
  const randomDays = Math.floor(Math.random() * 104);
  const date = new Date();
  date.setDate(date.getDate() - randomDays);
  return date;
}

function generateRandomNotifications(amount) {
  return Array.from({ length: amount }, () => ({
    type: ["feedback", "course", "certificate", "maintenance"][Math.floor(Math.random() * 4)],
    date: randomDate(),
    read: Math.random() > 0.5,
    user: ["Jantje", "Henkie", "Klaasie", "Bert"][Math.floor(Math.random() * 4)],
    content: [
      "Navigating Computer Hardware - Level 1",
      "Essential Coding Skills - Level 2",
      "Fundamental Electronic Skills - Level 1",
      "Essential Robotics Skills - Level 3",
    ][Math.floor(Math.random() * 4)],
  }));
}

export { generateRandomNotifications };