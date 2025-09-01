export function getGreeting() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 11) return "Morning";
  if (hour >= 11 && hour < 14) return "Afternoon";
  if (hour >= 14 && hour < 18) return "Evening";
  return "Night";
}
