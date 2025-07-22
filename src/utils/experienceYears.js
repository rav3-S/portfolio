export function getExperienceYears(startYear = 2022, startMonth = 6) {
  const now = new Date();
  const years = now.getFullYear() - startYear;
  const isAfterStartMonth = now.getMonth() >= startMonth; // July = 6 (0-indexed)

  return isAfterStartMonth ? years : years - 1;
}
