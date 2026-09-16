export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  faq: { question: string; answer: string }[];
  bodyHtml: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-many-steps-a-day-to-lose-weight",
    title: "How Many Steps a Day Should You Walk to Lose Weight?",
    metaTitle: "How Many Steps a Day to Lose Weight? | Walking Calculator",
    metaDescription:
      "Find out how many steps a day you actually need to lose weight, with realistic ranges by starting activity level and a simple way to calculate your own target.",
    excerpt:
      "10,000 steps is a marketing number, not a medical one. Here's what the actual research and step-count math suggest for weight loss.",
    datePublished: "2026-08-10",
    dateModified: "2026-09-01",
    readingMinutes: 7,
    faq: [
      {
        question: "Is 10,000 steps a day necessary to lose weight?",
        answer:
          "No. The 10,000-step target began as a 1960s Japanese marketing figure for a pedometer, not a research-derived threshold. Meaningful weight loss can start well below that number, especially for people moving up from a sedentary baseline.",
      },
      {
        question: "How many steps burn 500 calories?",
        answer:
          "For most adults, roughly 10,000-12,000 steps at a moderate pace burns somewhere near 400-500 calories, though this varies with body weight, stride length, and terrain.",
      },
      {
        question: "What if I can only manage 4,000 steps a day right now?",
        answer:
          "Start there. Moving from 2,000 to 4,000 steps daily still creates a real calorie deficit contribution. Build up gradually in increments of 1,000-2,000 steps every one to two weeks rather than jumping straight to a high target.",
      },
      {
        question: "Do steps matter more than walking speed?",
        answer:
          "Both count, but total steps is the easier number to track consistently throughout a full day, including incidental movement, while speed matters most during dedicated walking sessions.",
      },
    ],
    bodyHtml: `
      <p>If you've ever set a fitness tracker's default goal, you've seen it: 10,000 steps a day. It's become so common that most people assume it's a scientifically established target for weight loss. It isn't — and understanding where that number actually came from changes how you should think about your own step target.</p>

      <h2>Where the 10,000-step number actually comes from</h2>
      <p>The figure traces back to a 1965 Japanese pedometer called "manpo-kei," which translates roughly to "10,000 steps meter." It was a catchy marketing name, not a conclusion from a clinical trial. That doesn't mean 10,000 steps is a bad goal — it's a reasonable, achievable target for many adults — but treating it as a hard requirement for weight loss overstates what the number was ever meant to represent.</p>

      <h2>What actually matters for weight loss</h2>
      <p>Weight loss comes down to a sustained calorie deficit. Steps are simply a convenient way to measure movement, which contributes to that deficit. The real question isn't "did I hit 10,000?" but "did I move meaningfully more today than my body is used to?"</p>
      <p>For someone starting from a sedentary baseline of 2,000-3,000 steps a day, reaching 7,000-8,000 steps can create a calorie deficit large enough to support steady weight loss — without ever touching five digits.</p>

      <h2>Realistic step ranges by starting point</h2>
      <table>
        <thead><tr><th>Current activity level</th><th>Reasonable next target</th><th>Longer-term target</th></tr></thead>
        <tbody>
          <tr><td>Sedentary (under 3,000 steps/day)</td><td>5,000-6,000 steps/day</td><td>8,000 steps/day</td></tr>
          <tr><td>Lightly active (3,000-6,000 steps/day)</td><td>7,000-8,000 steps/day</td><td>10,000 steps/day</td></tr>
          <tr><td>Moderately active (6,000-9,000 steps/day)</td><td>10,000 steps/day</td><td>12,000+ steps/day</td></tr>
        </tbody>
      </table>
      <p>Jumping several thousand steps beyond your current baseline overnight raises injury risk, particularly for joints unaccustomed to the added load. Progressing in 1,000-2,000 step increments every one to two weeks is a safer, more sustainable path.</p>

      <h2>Turning steps into a calorie estimate</h2>
      <p>Roughly speaking, 2,000 steps at a moderate pace burns somewhere around 80-100 calories for an average adult, though this scales with body weight and pace. That means 8,000 extra steps a day, sustained consistently, could add up to a meaningful weekly calorie deficit — enough to matter for gradual weight loss over a few months.</p>
      <p>Rather than doing this math by hand, our <a href="/#calculator">walking weight loss calculator</a> converts your pace and duration directly into calories burned and an estimated step count, tailored to your height and weight.</p>

      <h2>Steps vs. dedicated walks</h2>
      <p>Total daily steps include incidental movement — walking around the house, parking further from the entrance, pacing during a phone call — on top of any dedicated walking session. Both count toward your total, and both matter. If a formal 30-minute walk feels daunting some days, focusing on incidental step accumulation is a legitimate strategy on its own.</p>

      <h2>The bottom line</h2>
      <p>There's no single step count that guarantees weight loss for everyone. What matters is moving consistently more than your body is currently used to, tracking that trend over weeks rather than days, and pairing it with reasonable attention to diet. Use your current baseline as the true starting line — not an arbitrary five-digit number designed to sell pedometers six decades ago.</p>
    `,
  },
  {
    slug: "walking-vs-running-for-weight-loss",
    title: "Walking vs Running for Weight Loss: Which Is Actually Better?",
    metaTitle: "Walking vs Running for Weight Loss | Which Wins?",
    metaDescription:
      "Walking or running for weight loss — which burns more calories, which is easier to sustain, and which is right for your body? A clear, honest comparison.",
    excerpt:
      "Running burns more calories per minute. Walking is easier to sustain for months. Here's how to decide which fits your situation.",
    datePublished: "2026-08-17",
    dateModified: "2026-09-01",
    readingMinutes: 8,
    faq: [
      {
        question: "Does running burn more calories than walking?",
        answer:
          "Per minute, yes — running typically burns roughly double the calories of walking at a comparable effort level, because it requires more total muscular work and a higher metabolic rate to sustain.",
      },
      {
        question: "Is walking enough for weight loss, or do I need to run?",
        answer:
          "Walking alone is enough to support weight loss when it's consistent and paired with attention to diet. Running accelerates calorie burn per session, but it isn't required for meaningful results.",
      },
      {
        question: "Which is easier on the joints, walking or running?",
        answer:
          "Walking places substantially less impact stress on knees, hips, and ankles than running, which involves ground-reaction forces several times body weight with every stride.",
      },
      {
        question: "Can I switch from walking to running over time?",
        answer:
          "Yes — a common and effective progression is building a consistent walking base first, then introducing short running intervals (run-walk intervals) once your cardiovascular fitness and joint tolerance have improved.",
      },
    ],
    bodyHtml: `
      <p>This comparison comes up constantly, and the honest answer is: it depends on what "better" means to you. If better means calories burned per minute, running wins clearly. If better means a routine you'll still be doing in a year, walking often wins by default — because more people stick with it.</p>

      <h2>The calorie math</h2>
      <p>Running at a moderate pace typically carries a MET value around 8-10, compared to roughly 3-5 for walking at moderate-to-brisk speeds. In practical terms, a 30-minute run burns roughly double the calories of a 30-minute walk for the same person. If pure calorie burn per session is your only variable, running is objectively more efficient.</p>
      <table>
        <thead><tr><th>Activity (30 min, 160 lb person)</th><th>Approx. calories burned</th></tr></thead>
        <tbody>
          <tr><td>Walking, moderate pace (3 mph)</td><td>~125 kcal</td></tr>
          <tr><td>Walking, brisk pace (4 mph)</td><td>~183 kcal</td></tr>
          <tr><td>Jogging (5 mph)</td><td>~250 kcal</td></tr>
          <tr><td>Running (6 mph)</td><td>~325 kcal</td></tr>
        </tbody>
      </table>

      <h2>But calories per minute isn't the whole story</h2>
      <p>Weight loss plays out over weeks and months, not single sessions. A walking routine you sustain five days a week for six months will very often out-produce a running routine that gets abandoned after three weeks due to burnout, soreness, or injury. Adherence — simply continuing to show up — is one of the strongest predictors of long-term results in exercise research.</p>

      <h2>Impact and injury risk</h2>
      <p>Running generates ground-reaction forces of roughly 2-3 times body weight with every stride, compared to walking's much gentler load. That difference matters most for beginners, people carrying extra weight, or anyone with existing joint sensitivity — all groups where starting with running can raise injury risk before a base level of fitness is built.</p>
      <p>Walking's low-impact nature is precisely why it's often recommended as the entry point, with running introduced later once joints, tendons, and cardiovascular fitness have adapted.</p>

      <h2>Time efficiency</h2>
      <p>If your primary constraint is time rather than joint health, running does deliver more calorie burn per minute spent exercising. Someone with 20 minutes to spare might get more out of a run than a walk, purely on a time-efficiency basis.</p>

      <h2>A practical middle path: run-walk intervals</h2>
      <p>Many people find success alternating between the two — walking as the daily foundation, with occasional running intervals mixed in once walking feels comfortable. This approach builds cardiovascular capacity gradually while keeping total impact stress manageable.</p>

      <h2>So which should you choose?</h2>
      <ul>
        <li>Choose walking if you're new to exercise, managing joint concerns, or need a routine you can realistically sustain daily.</li>
        <li>Choose running if you already have a base fitness level, want maximum calorie burn per minute, and enjoy the higher-intensity effort.</li>
        <li>Combine both if you want walking as your consistent foundation with running intervals layered in for extra intensity.</li>
      </ul>
      <p>Whichever you choose, use the <a href="/#calculator">walking weight loss calculator</a> to see exactly how your chosen pace and duration translate into calories burned, so your decision is based on your own numbers rather than general averages.</p>
    `,
  },
  {
    slug: "30-day-walking-plan-for-beginners",
    title: "A Simple 30-Day Walking Plan for Complete Beginners",
    metaTitle: "30-Day Walking Plan for Beginners | Free Weekly Guide",
    metaDescription:
      "A realistic, no-pressure 30-day walking plan for complete beginners — starting from 10 minutes a day and building toward a sustainable weight-loss habit.",
    excerpt:
      "No 10,000-step jump-in. This 30-day plan starts small, builds gradually, and is designed to still feel doable on day 30.",
    datePublished: "2026-08-24",
    dateModified: "2026-09-01",
    readingMinutes: 7,
    faq: [
      {
        question: "Do I need any equipment for this 30-day walking plan?",
        answer:
          "Just a supportive pair of shoes. Everything else — a fitness tracker, hand weights, specific clothing — is optional and can be added later if you want it.",
      },
      {
        question: "What if I miss a day in the plan?",
        answer:
          "Simply continue where you left off, or repeat the missed day's session. One missed day has no meaningful impact on a 30-day plan — consistency over the full month is what matters, not a perfect unbroken streak.",
      },
      {
        question: "Will I lose weight in 30 days just from this plan?",
        answer:
          "You may see some early progress, especially if you're moving from a sedentary baseline, but 30 days is primarily about building the habit. Most meaningful, lasting weight loss unfolds over several months of consistent walking.",
      },
      {
        question: "Can I repeat week 4 instead of stopping after day 30?",
        answer:
          "Yes — many people repeat or extend the final week's structure for several more weeks before moving on to our intermediate walking plan, which introduces more pace and distance progression.",
      },
    ],
    bodyHtml: `
      <p>Most beginner walking plans start too aggressively — jumping straight to daily 30-45 minute sessions that feel great on paper and exhausting in week two. This plan is built the other way around: start small enough that skipping isn't tempting, and let duration grow only once the habit itself feels automatic.</p>

      <h2>The philosophy behind this plan</h2>
      <p>The goal for the first two weeks isn't calorie burn — it's habit formation. A 10-minute walk you actually do every day builds more long-term momentum than a 30-minute walk you plan for and skip three times a week. Duration increases only after consistency is established, not before.</p>

      <h2>Week 1: Establish the habit</h2>
      <table>
        <thead><tr><th>Day</th><th>Walk</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>10 minutes, easy pace</td></tr>
          <tr><td>2</td><td>Rest</td></tr>
          <tr><td>3</td><td>10 minutes, easy pace</td></tr>
          <tr><td>4</td><td>Rest</td></tr>
          <tr><td>5</td><td>15 minutes, easy pace</td></tr>
          <tr><td>6</td><td>15 minutes, easy pace</td></tr>
          <tr><td>7</td><td>Rest or light stroll</td></tr>
        </tbody>
      </table>

      <h2>Week 2: Add frequency</h2>
      <table>
        <thead><tr><th>Day</th><th>Walk</th></tr></thead>
        <tbody>
          <tr><td>8</td><td>15 minutes, easy pace</td></tr>
          <tr><td>9</td><td>15 minutes, easy pace</td></tr>
          <tr><td>10</td><td>Rest</td></tr>
          <tr><td>11</td><td>20 minutes, easy pace</td></tr>
          <tr><td>12</td><td>15 minutes, easy pace</td></tr>
          <tr><td>13</td><td>20 minutes, easy pace</td></tr>
          <tr><td>14</td><td>Rest</td></tr>
        </tbody>
      </table>

      <h2>Week 3: Introduce pace</h2>
      <p>By now the daily habit should feel far more automatic. This week, start picking up the pace on some sessions — aim for a speed where talking is still comfortable but singing wouldn't be.</p>
      <table>
        <thead><tr><th>Day</th><th>Walk</th></tr></thead>
        <tbody>
          <tr><td>15</td><td>20 minutes, moderate pace</td></tr>
          <tr><td>16</td><td>20 minutes, easy pace</td></tr>
          <tr><td>17</td><td>Rest</td></tr>
          <tr><td>18</td><td>25 minutes, moderate pace</td></tr>
          <tr><td>19</td><td>20 minutes, moderate pace</td></tr>
          <tr><td>20</td><td>25 minutes, easy pace</td></tr>
          <tr><td>21</td><td>Rest</td></tr>
        </tbody>
      </table>

      <h2>Week 4: Build toward 30 minutes</h2>
      <table>
        <thead><tr><th>Day</th><th>Walk</th></tr></thead>
        <tbody>
          <tr><td>22</td><td>25 minutes, moderate pace</td></tr>
          <tr><td>23</td><td>25 minutes, moderate pace</td></tr>
          <tr><td>24</td><td>Rest</td></tr>
          <tr><td>25</td><td>30 minutes, moderate pace</td></tr>
          <tr><td>26</td><td>25 minutes, brisk pace</td></tr>
          <tr><td>27</td><td>30 minutes, moderate pace</td></tr>
          <tr><td>28</td><td>Rest</td></tr>
          <tr><td>29</td><td>30 minutes, brisk pace</td></tr>
          <tr><td>30</td><td>30-35 minutes, moderate-to-brisk pace</td></tr>
        </tbody>
      </table>

      <h2>What to do after day 30</h2>
      <p>By the end of the month, a 25-30 minute walk should feel like a normal part of your day rather than a chore you have to talk yourself into. From here, most people either repeat a version of week 4 for a few more weeks to fully cement the habit, or move on to our intermediate walking plan, which introduces more structured pace variation and longer weekend walks.</p>
      <p>Throughout the month, plug your numbers into the <a href="/#calculator">walking weight loss calculator</a> to see how your growing duration and pace are translating into calories burned and projected progress — it's a good way to stay motivated without relying on the scale alone.</p>
    `,
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
