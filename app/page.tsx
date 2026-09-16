import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description: "Important information about the limits of the walking weight loss calculator and site content.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 prose-article">
      <p className="font-display text-xs uppercase tracking-wide text-sunrise-600">Legal</p>
      <h1 className="font-display text-4xl text-trail-800 mt-2 mb-6">Medical Disclaimer</h1>

      <p>
        Walking Weight Loss Calculator and all associated content — including the calculator
        tool, blog articles, and guides — are provided for general informational and educational
        purposes only.
      </p>

      <h2>Not a substitute for professional advice</h2>
      <p>
        Nothing on this site is intended to be, and should not be taken as, medical, nutritional,
        or fitness advice specific to your individual health circumstances. Always consult a
        qualified physician, registered dietitian, or other healthcare professional before
        starting any new exercise routine, especially if you have an existing health condition.
      </p>

      <h2>Calculator results are estimates</h2>
      <p>
        All calorie, step, distance, and weight-loss projections produced by our calculator are
        estimates based on standardized formulas (the Mifflin-St Jeor equation and MET values
        from the Compendium of Physical Activities). Individual results vary based on metabolism,
        body composition, terrain, and many other factors we cannot account for. These figures
        should be used as general guidance, not precise medical measurements.
      </p>

      <h2>Consult a doctor before starting if you</h2>
      <ul>
        <li>Have a diagnosed heart condition or cardiovascular disease</li>
        <li>Are pregnant or recently gave birth</li>
        <li>Have joint, mobility, or musculoskeletal conditions</li>
        <li>Are recovering from a recent injury or surgery</li>
        <li>Have any chronic condition that affects exercise tolerance</li>
      </ul>

      <h2>Stop and seek help if you experience</h2>
      <p>
        Chest pain, severe shortness of breath, dizziness, fainting, or unusual joint pain during
        or after walking. These symptoms warrant prompt medical attention.
      </p>

      <h2>No guarantee of results</h2>
      <p>
        We make no guarantees regarding weight loss outcomes. Actual results depend on
        consistency, diet, individual physiology, and many factors outside the scope of this
        site&apos;s content.
      </p>
    </div>
  );
}
