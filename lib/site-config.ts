// Central place to set the real domain once you've picked one.
// Every SEO helper, schema block, and sitemap entry reads from here,
// so changing the domain later is a one-line edit.
export const siteConfig = {
  name: "Walking Weight Loss Calculator",
  shortName: "WalkCalc",
  // TODO: replace with your real domain before deploying
  url: "https://www.your-domain-here.com",
  description:
    "A free, science-based calculator that estimates calories burned, steps, distance, and realistic weight-loss timelines from walking — plus in-depth guides to help you actually stick with it.",
  locale: "en_US",
  twitterHandle: "@walkingcalc",
  keywords: [
    "walking weight loss calculator",
    "calories burned walking calculator",
    "how many steps to lose weight",
    "walking for weight loss",
    "walking calorie calculator",
  ],
};

export type SiteConfig = typeof siteConfig;
