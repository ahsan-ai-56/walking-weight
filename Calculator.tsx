"use client";

import { useMemo, useState } from "react";
import {
  runCalculator,
  kgToLb,
  lbToKg,
  cmToFtIn,
  ftInToCm,
  type Gender,
} from "@/lib/calculator-logic";

type UnitSystem = "metric" | "imperial";
type SpeedPreset = "stroll" | "moderate" | "brisk" | "power";

const SPEED_PRESETS: Record<SpeedPreset, { label: string; kmh: number; helper: string }> = {
  stroll: { label: "Easy stroll", kmh: 3.2, helper: "~20 min/mile · casual pace" },
  moderate: { label: "Moderate pace", kmh: 4.8, helper: "~12.5 min/mile · everyday walk" },
  brisk: { label: "Brisk walk", kmh: 5.6, helper: "~10.7 min/mile · purposeful pace" },
  power: { label: "Power walk", kmh: 6.4, helper: "~9.4 min/mile · fast, arms pumping" },
};

export default function Calculator() {
  const [units, setUnits] = useState<UnitSystem>("imperial");
  const [age, setAge] = useState(35);
  const [gender, setGender] = useState<Gender>("female");
  const [weightLb, setWeightLb] = useState(170);
  const [weightKg, setWeightKg] = useState(77);
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(6);
  const [heightCm, setHeightCm] = useState(168);
  const [speedPreset, setSpeedPreset] = useState<SpeedPreset>("moderate");
  const [customSpeedKmh, setCustomSpeedKmh] = useState<number | null>(null);
  const [duration, setDuration] = useState(30);
  const [incline, setIncline] = useState(0);

  const heightCmResolved = units === "imperial" ? ftInToCm(feet, inches) : heightCm;
  const weightKgResolved = units === "imperial" ? lbToKg(weightLb) : weightKg;
  const speedKmh = customSpeedKmh ?? SPEED_PRESETS[speedPreset].kmh;

  const results = useMemo(
    () =>
      runCalculator({
        age,
        gender,
        heightCm: heightCmResolved,
        weightKg: weightKgResolved,
        speedKmh,
        durationMin: duration,
        incline,
      }),
    [age, gender, heightCmResolved, weightKgResolved, speedKmh, duration, incline]
  );

  function handleUnitSwitch(next: UnitSystem) {
    if (next === units) return;
    if (next === "imperial") {
      const { feet: f, inches: i } = cmToFtIn(heightCm);
      setFeet(f);
      setInches(i);
      setWeightLb(Math.round(kgToLb(weightKg)));
    } else {
      setHeightCm(Math.round(ftInToCm(feet, inches)));
      setWeightKg(Math.round(lbToKg(weightLb)));
    }
    setUnits(next);
  }

  return (
    <div
      id="calculator"
      className="rounded-2xl border border-trail-100 bg-surface shadow-[0_1px_0_rgba(0,0,0,0.04)] overflow-hidden scroll-mt-24"
    >
      <div className="bg-trail-600 px-6 py-5 sm:px-8">
        <p className="font-display text-xs uppercase tracking-wide text-trail-100">Free tool</p>
        <h2 className="font-display text-2xl sm:text-3xl text-white mt-1">
          Walking weight loss calculator
        </h2>
        <p className="text-trail-50 text-sm mt-2 max-w-prose">
          Enter your details once — every field below feeds the same formulas explained further
          down this page, so the numbers you see are never a black box.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-0">
        {/* Inputs */}
        <div className="p-6 sm:p-8 space-y-6 border-b lg:border-b-0 lg:border-r border-trail-100">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-ink">Units</span>
            <div className="inline-flex rounded-full border border-trail-200 p-1 bg-canvas">
              {(["imperial", "metric"] as UnitSystem[]).map((u) => (
                <button
                  key={u}
                  type="button"
                  onClick={() => handleUnitSwitch(u)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    units === u ? "bg-trail-600 text-white" : "text-inkmuted"
                  }`}
                >
                  {u === "imperial" ? "lb / ft" : "kg / cm"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-ink">Age</span>
              <input
                type="number"
                min={13}
                max={100}
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-trail-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sunrise-400"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-ink">Gender</span>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value as Gender)}
                className="mt-1 w-full rounded-lg border border-trail-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-sunrise-400"
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </label>
          </div>

          {units === "imperial" ? (
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-ink">Weight (lb)</span>
                <input
                  type="number"
                  min={70}
                  max={500}
                  value={weightLb}
                  onChange={(e) => setWeightLb(Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-trail-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sunrise-400"
                />
              </label>
              <div>
                <span className="text-sm font-medium text-ink">Height</span>
                <div className="mt-1 flex gap-2">
                  <input
                    type="number"
                    min={3}
                    max={8}
                    value={feet}
                    onChange={(e) => setFeet(Number(e.target.value))}
                    className="w-1/2 rounded-lg border border-trail-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sunrise-400"
                    aria-label="Feet"
                  />
                  <input
                    type="number"
                    min={0}
                    max={11}
                    value={inches}
                    onChange={(e) => setInches(Number(e.target.value))}
                    className="w-1/2 rounded-lg border border-trail-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sunrise-400"
                    aria-label="Inches"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-ink">Weight (kg)</span>
                <input
                  type="number"
                  min={30}
                  max={230}
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-trail-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sunrise-400"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-ink">Height (cm)</span>
                <input
                  type="number"
                  min={120}
                  max={220}
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-trail-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sunrise-400"
                />
              </label>
            </div>
          )}

          <div>
            <span className="text-sm font-medium text-ink">Walking pace</span>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {(Object.keys(SPEED_PRESETS) as SpeedPreset[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setSpeedPreset(key);
                    setCustomSpeedKmh(null);
                  }}
                  className={`text-left rounded-lg border px-3 py-2 transition-colors ${
                    speedPreset === key && customSpeedKmh === null
                      ? "border-sunrise-500 bg-sunrise-50"
                      : "border-trail-200 hover:border-trail-300"
                  }`}
                >
                  <span className="block text-sm font-medium text-ink">
                    {SPEED_PRESETS[key].label}
                  </span>
                  <span className="block text-xs text-inkmuted">{SPEED_PRESETS[key].helper}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-ink">Duration (minutes)</span>
              <input
                type="number"
                min={5}
                max={240}
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-trail-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sunrise-400"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-ink">Incline (% grade)</span>
              <input
                type="number"
                min={0}
                max={15}
                value={incline}
                onChange={(e) => setIncline(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-trail-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sunrise-400"
              />
            </label>
          </div>
        </div>

        {/* Results */}
        <div className="p-6 sm:p-8 bg-canvas">
          <p className="text-sm font-medium text-inkmuted mb-4">Your estimated results</p>

          <div className="grid grid-cols-2 gap-4">
            <ResultStat label="Calories burned" value={`${results.caloriesBurned}`} unit="kcal this walk" highlight />
            <ResultStat label="Distance covered" value={`${results.distanceKm}`} unit="km" />
            <ResultStat label="Steps taken" value={results.steps.toLocaleString()} unit="steps" />
            <ResultStat label="Estimated BMR" value={`${results.bmr}`} unit="kcal/day at rest" />
          </div>

          <div className="mt-6 rounded-xl bg-trail-700 text-white p-5">
            <p className="text-sm text-trail-100">
              If you repeated this exact walk daily and changed nothing else about your diet
            </p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-3xl">{results.projectedWeeklyLossKg} kg</span>
              <span className="text-trail-100 text-sm">/ week</span>
            </div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-display text-xl">{results.projectedMonthlyLossKg} kg</span>
              <span className="text-trail-100 text-sm">/ month (≈ {Math.round(results.projectedMonthlyLossKg * 2.20462 * 10) / 10} lb)</span>
            </div>
            <p className="text-xs text-trail-100 mt-3">
              Based on ~7,700 kcal per kg of body fat. Real-world results vary with diet, sleep,
              hormones, and consistency — see the disclaimer below.
            </p>
          </div>

          <p className="text-xs text-inkmuted mt-4">
            MET used for this pace: {results.met.toFixed(1)} · This tool is for general
            information only and is not medical advice.
          </p>
        </div>
      </div>
    </div>
  );
}

function ResultStat({
  label,
  value,
  unit,
  highlight,
}: {
  label: string;
  value: string;
  unit: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlight ? "border-sunrise-300 bg-sunrise-50" : "border-trail-100 bg-white"
      }`}
    >
      <p className="text-xs text-inkmuted">{label}</p>
      <p className="font-display text-2xl text-ink mt-1">{value}</p>
      <p className="text-xs text-inkmuted">{unit}</p>
    </div>
  );
}
