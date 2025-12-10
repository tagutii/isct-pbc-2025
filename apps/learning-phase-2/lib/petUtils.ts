/**
 * Convert pet age to human years
 * Dogs: age * 7
 * Cats: age * 5
 * Others: age * 3
 */
export function toHumanYears(age: number, species: string): number {
  if (species === "Dog") {
    return age * 7;
  } else if (species === "Cat") {
    return age * 5;
  } else {
    return age * 3;
  }
}

/**
 * Get age category
 */
export function getAgeCategory(age: number): string {
  if (age < 2) {
    return "Baby";
  } else if (age < 8) {
    return "Adult";
  } else {
    return "Senior";
  }
}

/**
 * Get emoji for species
 */
export function getSpeciesEmoji(species: string): string {
  switch (species) {
    case "Dog":
      return "🐕";
    case "Cat":
      return "🐱";
    case "Bird":
      return "🐦";
    case "Fish":
      return "🐠";
    default:
      return "🐾";
  }
}
