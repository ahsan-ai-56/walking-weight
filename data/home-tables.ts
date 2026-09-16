// Calories burned in a 30-minute walk, by body weight and pace.
// Figures derived from standard MET values x weight x time — see lib/calculator-logic.ts
export const calorieReferenceTable = {
  headers: ["Body weight", "Easy (2.5 mph)", "Moderate (3 mph)", "Brisk (4 mph)"],
  rows: [
    ["130 lb (59 kg)", "89 kcal", "102 kcal", "149 kcal"],
    ["160 lb (73 kg)", "109 kcal", "125 kcal", "183 kcal"],
    ["190 lb (86 kg)", "129 kcal", "148 kcal", "217 kcal"],
    ["220 lb (100 kg)", "150 kcal", "172 kcal", "251 kcal"],
    ["250 lb (113 kg)", "170 kcal", "195 kcal", "285 kcal"],
  ],
};

export const beginnerPlan = {
  headers: ["Day", "Session"],
  rows: [
    ["Mon", "15 min easy walk"],
    ["Tue", "Rest or gentle stretch"],
    ["Wed", "15 min easy walk"],
    ["Thu", "20 min easy walk"],
    ["Fri", "Rest"],
    ["Sat", "20-25 min easy walk"],
    ["Sun", "Rest or light stroll"],
  ],
};

export const intermediatePlan = {
  headers: ["Day", "Session"],
  rows: [
    ["Mon", "30 min moderate pace"],
    ["Tue", "20 min brisk pace"],
    ["Wed", "Rest or gentle stretch"],
    ["Thu", "35 min moderate pace"],
    ["Fri", "25 min brisk + 2 hill repeats"],
    ["Sat", "40-45 min moderate pace"],
    ["Sun", "Rest"],
  ],
};

export const advancedPlan = {
  headers: ["Day", "Session"],
  rows: [
    ["Mon", "45 min brisk pace"],
    ["Tue", "30 min power walk + incline intervals"],
    ["Wed", "30 min moderate recovery walk"],
    ["Thu", "50 min brisk pace"],
    ["Fri", "35 min power walk"],
    ["Sat", "60-75 min long walk, moderate pace"],
    ["Sun", "Rest or gentle stroll"],
  ],
};

export const references = [
  "Centers for Disease Control and Prevention (CDC) — physical activity guidelines",
  "Mayo Clinic — walking for weight loss and general fitness guidance",
  "Harvard Health Publishing — calorie burn and exercise physiology articles",
  "National Institutes of Health (NIH) — obesity and weight management research",
  "Compendium of Physical Activities — standard MET value reference",
];
