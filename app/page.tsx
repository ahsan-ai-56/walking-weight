import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import JsonLd from "@/components/JsonLd";
import { webApplicationSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { homeFaq } from "@/data/home-faq";
import {
  calorieReferenceTable,
  beginnerPlan,
  intermediatePlan,
  advancedPlan,
  references,
} from "@/data/home-tables";

export const metadata: Metadata = {
  title: "Walking Weight Loss Calculator — Calories, Steps & Timeline",
  description:
    "Free walking weight loss calculator: estimate calories burned, steps, distance, and a realistic timeline to your goal weight, backed by the Mifflin-St Jeor formula and MET science.",
  alternates: { canonical: "/" },
};

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webApplicationSchema(),
          faqSchema(homeFaq),
          breadcrumbSchema([{ name: "Home", url: siteConfig.url }]),
        ]}
      />

      {/* Hero */}
      <section className="border-b border-trail-100 bg-gradient-to-b from-trail-50 to-canvas">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-10 grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2">
            <p className="font-display text-xs uppercase tracking-wide text-sunrise-600">
              Free · No sign-up · Science-based
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-trail-800 mt-3 leading-[1.05]">
              Find out exactly what your daily walk is doing for your weight
            </h1>
            <p className="text-inkmuted mt-4 max-w-prose">
              This walking weight loss calculator turns your age, weight, pace, and walk duration
              into real numbers — calories burned, steps taken, and a realistic timeline for your
              goal — using the same formulas exercise scientists use.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#calculator"
                className="inline-flex items-center rounded-full bg-sunrise-500 px-5 py-3 text-sm font-medium text-white hover:bg-sunrise-600 transition-colors"
              >
                Calculate my results
              </a>
              <a
                href="#formulas"
                className="inline-flex items-center rounded-full border border-trail-300 px-5 py-3 text-sm font-medium text-trail-700 hover:bg-trail-50 transition-colors"
              >
                See how it's calculated
              </a>
            </div>
          </div>
          <div className="lg:col-span-3" id="calculator-wrap">
            <Calculator />
          </div>
        </div>
      </section>

      <article className="prose-article max-w-6xl mx-auto px-4 sm:px-6 py-4">
        {/* 1. Introduction */}
        <section>
          <h2>Why a simple walk deserves a real calculator</h2>
          <p>
            Walking is the most accessible form of exercise there is. No gym membership, no
            learning curve, no equipment beyond a decent pair of shoes — just you, a bit of time,
            and somewhere to go. That accessibility is exactly why it's so easy to underestimate.
            When you don't know how many calories a 30-minute walk actually burns, or how that
            number compares to what you eat in a day, it's hard to trust that the habit is working.
          </p>
          <p>
            That's the gap this walking weight loss calculator is built to close. Instead of
            vague reassurances that "walking is good for you," you get a specific estimate of
            calories burned, distance covered, steps taken, and a projected weight-loss timeline
            based on your own body and pace — grounded in established exercise-science formulas,
            not guesswork.
          </p>
        </section>

        {/* 2. How to use */}
        <section>
          <h2>How to use the calculator</h2>
          <p>
            The calculator above asks for a handful of details. Here's what each one does and why
            it matters to the result:
          </p>
          <ul>
            <li>
              <strong>Age</strong> — used in the Mifflin-St Jeor formula to estimate your resting
              metabolism, which puts your walking calorie burn in context.
            </li>
            <li>
              <strong>Gender</strong> — the Mifflin-St Jeor formula applies a different constant
              for men and women, reflecting average differences in body composition.
            </li>
            <li>
              <strong>Height and weight</strong> — the two biggest levers on how many calories you
              burn per minute of walking. Heavier bodies and taller strides both burn more.
            </li>
            <li>
              <strong>Walking pace</strong> — choose from easy, moderate, brisk, or power walking
              presets, or let the calculator estimate a custom speed. Pace changes the MET value
              used in the calorie formula.
            </li>
            <li>
              <strong>Duration</strong> — how long your walk lasts, in minutes. This scales your
              total calorie burn linearly alongside your pace.
            </li>
            <li>
              <strong>Incline</strong> — an optional field for treadmill or hilly-route walkers.
              Even a modest incline meaningfully increases effort.
            </li>
          </ul>
          <p>
            Once you enter your numbers, results update instantly — no submit button, no waiting.
            You can adjust any field and immediately see how it changes your calorie burn and
            projected weight loss.
          </p>
        </section>

        {/* 3. Worked example */}
        <section>
          <h2>A worked example</h2>
          <p>
            Say you're a 35-year-old woman, 5&apos;6&quot; and 170 lb, who walks at a moderate 3
            mph pace for 30 minutes. The calculator estimates a burn of roughly 125 calories for
            that single walk, covering about 1.5 miles and 3,200 steps. Repeated daily with no
            other changes, that adds up to close to 875 calories a week from walking alone — a
            meaningful contribution toward the 3,500-calorie deficit commonly associated with
            losing about one pound of body fat.
          </p>
        </section>

        {/* 4. How walking helps */}
        <section>
          <h2>How walking helps you lose weight</h2>
          <p>
            Weight loss, at its core, comes down to a sustained calorie deficit — burning more
            energy than you take in. Walking contributes to that deficit directly, by increasing
            the calories your body burns each day, and indirectly, by supporting the habits that
            make a deficit sustainable.
          </p>
          <h3>The calorie deficit connection</h3>
          <p>
            Every walk adds to your total daily energy expenditure on top of your resting
            metabolic rate. A 30-45 minute walk most days of the week can realistically add
            150-300 extra calories burned per day — which, held consistently over weeks, becomes
            a substantial contributor to fat loss without requiring intense exercise.
          </p>
          <h3>Belly fat and metabolic health</h3>
          <p>
            Regular walking is consistently associated with reductions in visceral fat — the fat
            stored around your abdominal organs that's linked to higher health risk. Walking
            can't target belly fat specifically (no exercise can spot-reduce fat from one area),
            but as part of an overall calorie deficit, it reduces fat proportionally across the
            body, including the midsection.
          </p>
          <h3>Mental health and adherence</h3>
          <p>
            Weight loss efforts fail more often from inconsistency than from a flawed plan.
            Walking's low barrier to entry — and its well-documented mood and stress benefits —
            make it one of the easier habits to sustain for months rather than weeks, which
            matters more for long-term results than any single workout's intensity.
          </p>
          <h3>Why sustainability wins</h3>
          <p>
            A walking routine you can maintain for a year will outperform an intense routine you
            abandon after three weeks. That's the quiet advantage walking has over higher-impact
            exercise for many beginners: it's rarely the thing that burns you out.
          </p>
        </section>

        {/* 5. What happens in your body */}
        <section>
          <h2>What happens in your body when you walk</h2>
          <p>
            A walk isn't just "calories out" — it's a cascade of physiological responses that
            build on each other the longer you keep moving.
          </p>
          <ul>
            <li>
              <strong>Minutes 0-5:</strong> Your heart rate rises, blood flow redirects toward
              working muscles, and your body draws on readily available glucose for quick energy.
            </li>
            <li>
              <strong>Minutes 5-20:</strong> Your body shifts toward a greater proportion of fat
              oxidation for fuel as your cardiovascular system settles into a steady rhythm.
            </li>
            <li>
              <strong>Minutes 20-45:</strong> Sustained aerobic activity continues to draw on fat
              stores, while muscles in your legs, core, and glutes work continuously to maintain
              your pace and posture.
            </li>
            <li>
              <strong>After you stop:</strong> A smaller but real effect called excess
              post-exercise oxygen consumption (EPOC), or the "afterburn," keeps your metabolism
              slightly elevated as your body returns to baseline — typically a modest effect for
              walking compared to high-intensity exercise, but part of the full picture.
            </li>
          </ul>
        </section>

        {/* 6. Formulas */}
        <section id="formulas" className="scroll-mt-24">
          <h2>How the calculator works — formulas explained</h2>
          <p>
            Nothing about this walking weight loss calculator is a black box. Here's exactly what
            runs behind the scenes.
          </p>
          <h3>Step 1: Basal Metabolic Rate (Mifflin-St Jeor)</h3>
          <p>
            The calculator estimates your resting calorie burn using the Mifflin-St Jeor
            equation, widely regarded as one of the more accurate BMR formulas in current use:
          </p>
          <ul>
            <li>Men: BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5</li>
            <li>Women: BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age − 161</li>
          </ul>
          <h3>Step 2: MET value for your pace</h3>
          <p>
            MET stands for Metabolic Equivalent of Task — a standardized way to express how much
            energy an activity requires relative to resting. Walking's MET value rises with
            speed: an easy 2 mph stroll sits around 2.8 METs, while a brisk 4 mph pace climbs
            toward 5.0 METs or higher. These values come from the Compendium of Physical
            Activities, a standard reference used in exercise science research.
          </p>
          <h3>Step 3: Calories burned</h3>
          <p>
            Calories burned = MET × weight (kg) × duration (hours). This is the same core formula
            used across most fitness trackers and clinical calculators for estimating activity
            energy expenditure.
          </p>
          <h3>Step 4: Steps and distance</h3>
          <p>
            Distance is derived from your selected pace and duration. Step count is then
            estimated using an average stride length approximated from your height, since taller
            people generally cover more ground per step.
          </p>
          <h3>Step 5: Projected weight loss</h3>
          <p>
            The calculator applies the commonly cited estimate that one kilogram of body fat is
            roughly equivalent to 7,700 calories, projecting how your weekly calorie burn from
            walking alone could translate into weight change over time — assuming everything else
            about your diet stays constant.
          </p>
        </section>

        {/* 7. Calorie reference table */}
        <section>
          <h2>Calories burned reference table</h2>
          <p>
            For a quick reference without opening the calculator, here's roughly how many
            calories a 30-minute walk burns at three common paces, across a range of body
            weights.
          </p>
          <DataTable headers={calorieReferenceTable.headers} rows={calorieReferenceTable.rows} />
          <p>
            These figures are estimates based on standard MET values and will vary with
            individual metabolism, terrain, and walking technique — use the calculator above for
            numbers tailored to your exact stats.
          </p>
        </section>

        {/* 8. Factors affecting calorie burn */}
        <section>
          <h2>Factors that affect how many calories you burn</h2>
          <ul>
            <li>
              <strong>Body weight:</strong> Heavier bodies require more energy to move the same
              distance, so calorie burn scales up with weight for any given pace.
            </li>
            <li>
              <strong>Walking speed:</strong> Faster paces raise your MET value, burning more
              calories per minute — though very fast walking eventually becomes less efficient
              than a light jog for some people.
            </li>
            <li>
              <strong>Incline and terrain:</strong> Hills, sand, and uneven trails all increase
              effort compared to flat pavement, sometimes substantially.
            </li>
            <li>
              <strong>Duration:</strong> Total calorie burn scales directly with time spent
              walking, making duration one of the easiest variables to adjust.
            </li>
            <li>
              <strong>Age and gender:</strong> Metabolic rate tends to decline gradually with age,
              and body composition differences between genders affect baseline calorie needs.
            </li>
            <li>
              <strong>Extra load:</strong> Carrying a backpack, hand weights, or a stroller adds
              resistance and increases calorie expenditure.
            </li>
            <li>
              <strong>Weather:</strong> Walking in heat, cold, or wind can increase energy cost
              as your body works harder to regulate temperature and maintain pace.
            </li>
          </ul>
        </section>

        {/* 9. How much walking needed */}
        <section>
          <h2>How much walking is needed to lose weight</h2>
          <p>
            There's no single step count that guarantees weight loss for everyone, because it
            depends on your starting activity level, diet, and goals. That said, general patterns
            hold up well across research and clinical guidance:
          </p>
          <ul>
            <li>
              Going from a sedentary baseline (2,000-3,000 steps/day) to 7,000-8,000 steps/day
              often creates a noticeable calorie deficit on its own.
            </li>
            <li>
              Many people pursuing steady weight loss target 8,000-12,000 steps a day, combined
              with mindful eating.
            </li>
            <li>
              A realistic timeline for losing 5 lb through walking alone, at a moderate deficit,
              is roughly 3-5 weeks; 10 lb is closer to 7-10 weeks; 20 lb often takes 4-6 months.
            </li>
          </ul>
          <p>
            These are general ranges, not guarantees — individual results depend on consistency,
            starting weight, and whether diet is also adjusted alongside activity.
          </p>
        </section>

        {/* 10. Plans */}
        <section id="plans" className="scroll-mt-24">
          <h2>Walking plans by fitness level</h2>
          <p>
            Pick the plan that matches where you're starting from. Each is a weekly structure you
            can repeat and gradually build on — the goal is consistency, not perfection.
          </p>
          <h3>Beginner plan</h3>
          <p>Best if you're new to regular exercise or returning after a long break.</p>
          <DataTable headers={beginnerPlan.headers} rows={beginnerPlan.rows} />
          <h3>Intermediate plan</h3>
          <p>Best if you can already walk 20-30 minutes comfortably several times a week.</p>
          <DataTable headers={intermediatePlan.headers} rows={intermediatePlan.rows} />
          <h3>Advanced plan</h3>
          <p>Best if you're walking regularly and ready to push pace, distance, and incline.</p>
          <DataTable headers={advancedPlan.headers} rows={advancedPlan.rows} />
        </section>

        {/* 11. Tips */}
        <section>
          <h2>Top tips to maximize weight loss from walking</h2>
          <ol>
            <li>
              <strong>Walk in the fat-burning pace zone.</strong> Aim for a pace where you can
              talk but not sing comfortably — that's usually brisk enough to matter.
            </li>
            <li>
              <strong>Add incline whenever you can.</strong> A hill route or a treadmill incline
              of 5-8% noticeably increases calorie burn for the same duration.
            </li>
            <li>
              <strong>Break it into chunks if needed.</strong> Three 10-minute walks can be nearly
              as effective as one 30-minute walk for total calorie burn.
            </li>
            <li>
              <strong>Track your steps.</strong> A simple step tracker keeps you honest about
              actual daily movement, not just intentional workouts.
            </li>
            <li>
              <strong>Pair walking with a modest calorie deficit.</strong> Walking amplifies
              results from diet changes — it rarely replaces them entirely.
            </li>
            <li>
              <strong>Add light strength training.</strong> Preserving muscle mass while losing
              weight keeps your metabolism higher long-term.
            </li>
            <li>
              <strong>Walk after meals when possible.</strong> A 10-15 minute walk after eating
              can help moderate blood sugar response.
            </li>
            <li>
              <strong>Prioritize consistency over intensity.</strong> Five moderate walks a week
              beat one exhausting walk followed by four missed days.
            </li>
            <li>
              <strong>Recalculate as your weight changes.</strong> Your calorie burn shifts as
              your weight does — revisit the calculator monthly to stay accurate.
            </li>
            <li>
              <strong>Sleep and hydrate.</strong> Both affect recovery and appetite regulation,
              which influence how well your walking routine translates into results.
            </li>
          </ol>
        </section>

        {/* 12. Gear */}
        <section>
          <h2>Walking gear essentials</h2>
          <p>
            You can start walking today with whatever you already own, but a few pieces of gear
            make a consistent routine easier to sustain:
          </p>
          <ul>
            <li>
              <strong>Supportive shoes:</strong> The single highest-impact purchase. Look for
              proper arch support and enough room in the toe box.
            </li>
            <li>
              <strong>Moisture-wicking clothing:</strong> Reduces chafing and discomfort on longer
              or faster walks, especially in warm weather.
            </li>
            <li>
              <strong>A step or fitness tracker:</strong> Useful for accountability, though
              entirely optional — this calculator works without one.
            </li>
            <li>
              <strong>Reflective gear:</strong> Worth it if you walk early morning or evening
              along roads.
            </li>
            <li>
              <strong>Optional extras:</strong> Hand weights, a weighted vest, or trekking poles
              can add intensity once walking alone feels easy.
            </li>
          </ul>
        </section>

        {/* 13. Mistakes */}
        <section>
          <h2>Common mistakes to avoid</h2>
          <ul>
            <li>
              <strong>Walking too slowly to matter.</strong> Fix: aim for a pace that noticeably
              raises your heart rate, not a casual browsing-stroll pace.
            </li>
            <li>
              <strong>Skipping warm-up and cool-down.</strong> Fix: spend the first and last few
              minutes at an easier pace to ease your joints in and out of effort.
            </li>
            <li>
              <strong>Ignoring diet entirely.</strong> Fix: pair your walking routine with basic
              awareness of portion sizes and food quality.
            </li>
            <li>
              <strong>Expecting spot reduction.</strong> Fix: understand that fat loss happens
              across the whole body, not just the area you want to change most.
            </li>
            <li>
              <strong>Doing the same walk every single day.</strong> Fix: vary pace, route, or
              incline to keep your body adapting and your routine interesting.
            </li>
            <li>
              <strong>Wearing worn-out or wrong shoes.</strong> Fix: replace walking shoes roughly
              every 300-500 miles or when tread wears thin.
            </li>
            <li>
              <strong>Setting an unrealistic step goal on day one.</strong> Fix: build up
              gradually from your current baseline rather than jumping straight to 10,000.
            </li>
            <li>
              <strong>Not tracking progress at all.</strong> Fix: log walks, weight, or how
              clothes fit so you can see trends the scale alone might miss.
            </li>
            <li>
              <strong>Quitting after a plateau.</strong> Fix: adjust pace, duration, or diet
              slightly rather than abandoning the routine altogether.
            </li>
          </ul>
        </section>

        {/* 14. Habit building */}
        <section>
          <h2>How to build a walking habit that sticks</h2>
          <p>
            The routines that last aren't the most intense ones — they're the ones that fit into
            a life without constant willpower. Anchor your walk to an existing habit, like right
            after your morning coffee or immediately after your commute ends, so you're not
            relying on motivation to remember it.
          </p>
          <p>
            Start smaller than feels necessary. A 10-minute walk you actually do beats a
            45-minute walk you plan and skip. Once the habit itself feels automatic — usually
            after a few consistent weeks — extending duration or pace becomes much easier than it
            would have been on day one.
          </p>
        </section>

        {/* 15. Tracking beyond scale */}
        <section>
          <h2>Tracking progress beyond the scale</h2>
          <p>
            Body weight fluctuates daily from water retention, sodium intake, and hormones,
            which can make the scale a frustrating single source of truth. Track alongside it:
          </p>
          <ul>
            <li>How your clothes fit, especially around the waist</li>
            <li>Resting heart rate trends over weeks, which often improve with consistent walking</li>
            <li>Energy levels and sleep quality</li>
            <li>Total weekly steps or walking minutes, which reflect consistency directly</li>
          </ul>
        </section>

        {/* 16. Safety */}
        <section>
          <h2>Safety considerations</h2>
          <p>
            Walking is one of the lowest-risk forms of exercise, but a few situations call for
            caution. Talk to a doctor before starting a new walking routine if you have a heart
            condition, joint issues that limit mobility, are pregnant, or are returning to
            activity after an injury or surgery.
          </p>
          <p>
            Stop and seek medical attention if you experience chest pain, severe shortness of
            breath, dizziness, or unusual joint pain during or after a walk.
          </p>
          <p className="text-sm">
            This page and the walking weight loss calculator are provided for general educational
            purposes only and are not a substitute for professional medical advice. See our{" "}
            <Link href="/disclaimer">full medical disclaimer</Link> for details.
          </p>
        </section>

        {/* 17. FAQ */}
        <section id="faq" className="scroll-mt-24">
          <h2>Frequently asked questions</h2>
          <div className="space-y-6">
            {homeFaq.map((item) => (
              <div key={item.question}>
                <h3 className="!mt-0">{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 18. Closing CTA */}
        <section>
          <h2>Ready to see your own numbers?</h2>
          <p>
            You don't need a perfect plan to start — you need one accurate estimate to build on.
            Scroll back up to the walking weight loss calculator, enter your details, and use
            today's number as the baseline you'll beat next week.
          </p>
          <a
            href="#calculator"
            className="inline-flex items-center rounded-full bg-sunrise-500 px-5 py-3 text-sm font-medium text-white hover:bg-sunrise-600 transition-colors no-underline"
          >
            Open the calculator
          </a>
          <p className="mt-6">
            Want more structured guidance? Read our{" "}
            <Link href="/blog/30-day-walking-plan-for-beginners">30-day beginner walking plan</Link>{" "}
            or explore{" "}
            <Link href="/blog">the full blog</Link> for step-count guides, gear reviews, and
            walking-vs-running comparisons.
          </p>
        </section>

        {/* 19. References */}
        <section>
          <h2>References</h2>
          <ul>
            {references.map((ref) => (
              <li key={ref}>{ref}</li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
