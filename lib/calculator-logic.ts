// All math lives here, separated from UI, so it's easy to unit test
// and to keep the numbers consistent between the tool and the article copy.

export type Gender = "male" | "female";

export interface CalculatorInputs {
  age: number; // years
  gender: Gender;
  heightCm: number;
  weightKg: number;
  speedKmh: number; // walking speed
  durationMin: number; // per session
  incline?: number; // percent grade, optional
}

export interface CalculatorResults {
  bmr: number; // kcal/day
  met: number;
  caloriesBurned: number; // for the session
  steps: number;
  distanceKm: number;
  weeklyCalorieBurn: number; // assuming same walk x7 (informational)
  projectedWeeklyLossKg: number;
  projectedMonthlyLossKg: number;
}

// Mifflin-St Jeor Equation
export function calculateBMR(age: number, gender: Gender, heightCm: number, weightKg: number): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return gender === "male" ? base + 5 : base - 161;
}

// MET values from the Compendium of Physical Activities, walking category,
// interpolated by speed. These are approximations for flat ground.
export function getMET(speedKmh: number, incline: number = 0): number {
  let met: number;
  if (speedKmh < 3.2) met = 2.8;
  else if (speedKmh < 4.0) met = 3.0;
  else if (speedKmh < 4.8) met = 3.5;
  else if (speedKmh < 5.6) met = 4.3;
  else if (speedKmh < 6.4) met = 5.0;
  else if (speedKmh < 7.2) met = 6.3;
  else met = 8.3; // brisk/power walking

  // Rough incline adjustment: add ~0.5 MET per percent grade above flat,
  // a commonly used approximation for walking energy cost.
  if (incline && incline > 0) {
    met += incline * 0.5;
  }
  return met;
}

// Calories burned via MET formula: kcal = MET x weight(kg) x duration(hours)
export function caloriesFromMET(met: number, weightKg: number, durationMin: number): number {
  return met * weightKg * (durationMin / 60);
}

// Average adult stride length is roughly 0.415 x height for walking;
// we use it to translate distance into an estimated step count.
export function estimateSteps(distanceKm: number, heightCm: number): number {
  const strideMeters = (heightCm / 100) * 0.415;
  const distanceMeters = distanceKm * 1000;
  return Math.round(distanceMeters / strideMeters);
}

export function estimateDistance(speedKmh: number, durationMin: number): number {
  return speedKmh * (durationMin / 60);
}

// 1 kg of body fat is approximately 7700 kcal (commonly cited estimate).
const KCAL_PER_KG_FAT = 7700;

export function runCalculator(inputs: CalculatorInputs): CalculatorResults {
  const bmr = calculateBMR(inputs.age, inputs.gender, inputs.heightCm, inputs.weightKg);
  const met = getMET(inputs.speedKmh, inputs.incline ?? 0);
  const caloriesBurned = caloriesFromMET(met, inputs.weightKg, inputs.durationMin);
  const distanceKm = estimateDistance(inputs.speedKmh, inputs.durationMin);
  const steps = estimateSteps(distanceKm, inputs.heightCm);
  const weeklyCalorieBurn = caloriesBurned * 7;
  const projectedWeeklyLossKg = weeklyCalorieBurn / KCAL_PER_KG_FAT;
  const projectedMonthlyLossKg = projectedWeeklyLossKg * 4.345; // avg weeks/month

  return {
    bmr: Math.round(bmr),
    met,
    caloriesBurned: Math.round(caloriesBurned),
    steps,
    distanceKm: Math.round(distanceKm * 100) / 100,
    weeklyCalorieBurn: Math.round(weeklyCalorieBurn),
    projectedWeeklyLossKg: Math.round(projectedWeeklyLossKg * 100) / 100,
    projectedMonthlyLossKg: Math.round(projectedMonthlyLossKg * 100) / 100,
  };
}

export const kgToLb = (kg: number) => kg * 2.20462;
export const lbToKg = (lb: number) => lb / 2.20462;
export const cmToFtIn = (cm: number) => {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return { feet, inches };
};
export const ftInToCm = (feet: number, inches: number) => (feet * 12 + inches) * 2.54;
