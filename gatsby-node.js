// These are customizable theme options we only need to check once
let basePath;

exports.onPreBootstrap = ({ store }, themeOptions) => {
  basePath = themeOptions.basePath || "/";
}

exports.createPages = ({ actions, reporter }, themeOptions) => {
  const nextYear = new Date().getFullYear() + 1;
  const newYearsEve = `${nextYear}-01-01 00:00:00`;
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/page.js"),
    context: {
      repoUrl: themeOptions.repoUrl || "https://github.com/rafaelquintanilha/gatsby-theme-countdown",
      targetDate: themeOptions.targetDate || newYearsEve,
      mainHeader: themeOptions.mainHeader || "Countdown to the New Year's Eve:",
      secondaryHeader: themeOptions.secondaryHeader || "Spread the word!",
      daysLabel: themeOptions.daysLabel || "Days",
      hoursLabel: themeOptions.hoursLabel || "Hours",
      minutesLabel: themeOptions.minutesLabel || "Minutes",
      secondsLabel: themeOptions.secondsLabel || "Seconds",
      hideSeconds: !!themeOptions.hideSeconds,
      hideMinutes: !!themeOptions.hideMinutes,
      hideHours: !!themeOptions.hideHours,
      hideDays: !!themeOptions.hideDays,
      hideGithubButton: !!themeOptions.hideGithubButton,
      hideWhatsappShareButton: !!themeOptions.hideWhatsappShareButton,
      hideTwitterShareButton: !!themeOptions.hideTwitterShareButton,
      hideFacebookShareButton: !!themeOptions.hideFacebookShareButton,
      hideParticles: !!themeOptions.hideParticles,
    }
  })
}
