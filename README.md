# Gatsby Theme Countdown

Create simple Countdown pages with this flexible [Gatsby Theme](https://www.gatsbyjs.org/docs/themes/).

## Demos

- [Simple](https://gatsby-theme-countdown-simple-example.netlify.com/) (default configs)
- [Theme Jam](https://gatsby-theme-countdown-theme-jam-example.netlify.com/) (config shadowing example)
- [World Cup](https://gatsby-theme-countdown-world-cup-example.netlify.com/) (component shadowing example)

## Usage

1. Create a Gatsby site

```sh
gatsby new countdown-example
```

2. Navigate to your project's folder and install the theme
```sh
cd countdown-example/
yarn add @rafaelquintanilha/gatsby-theme-countdown
```

3. Add the theme to your `gatsby-config.js`

```
module.exports = {
  siteMetadata: {
    title: "My Countdown",
    author: "Rafael Quintanilha"
  },
  plugins: [
    {
      resolve: "@rafaelquintanilha/gatsby-theme-countdown",
      options: {
        basePath: "/countdown",
        mainHeader: "My countdown will end in:",
        targetDate: "2020-04-28 00:00:00",
      }
    }
  ],
}
```

Then run `yarn develop` and go to http://localhost:8000/countdown to see your countdown working 🎉

## Options

This theme is fully configurable through plugin options and [shadowing](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/).

Here's the full list of plugin options (add it in your `gatsby-config.js`):

Option | Default | Description
--- | --- | ---
repoUrl | `"https://github.com/rafaelquintanilha/gatsby-theme-countdown"` | Link to the theme repository
targetDate | Next new year's eve (e.g. `"2020-01-01 00:00:00"`) | Date for the countdown. Accepts any string that is convertible by [MomentJS](https://momentjs.com)
mainHeader | `"Countdown to the New Year's Eve"` | Main text for the countdown
secondaryHeader | `"Spread the word!"` | Secondary text for the countdown
daysLabel | `"Days"` | Text that will be displayed below the days count
hoursLabel | `"Hours"` | Text that will be displayed below the hours count
minutesLabel | `"Minutes"` | Text that will be displayed below the minutes count
secondsLabel | `"Seconds"` | Text that will be displayed below the seconds count
hideGithubButton | `false` | Hide the top right Github link to the repo
hideDays | `false` | Hide days count
hideHours | `false` | Hide hours count
hideMinutes | `false` | Hide minutes count
hideSeconds | `false` | Hide seconds count
hideWhatsappShareButton | `false` | Hide Whatsapp share button 
hideTwitterShareButton | `false` | Hide Whatsapp share button 
hideFacebookShareButton | `false` | Hide Whatsapp share button 
hideParticles | `false` | Hide [particles.js](https://vincentgarreau.com/particles.js) in the background

You can see options in action for the [theme-jam](https://github.com/rafaelquintanilha/gatsby-theme-countdown/blob/master/examples/theme-jam/gatsby-config.js) and [world-cup](https://github.com/rafaelquintanilha/gatsby-theme-countdown/blob/master/examples/world-cup/gatsby-config.js) examples.

## Shadowing

### Configs

This theme also comes with two configuration files for [react-particles-js](https://github.com/Wufe/react-particles-js) and [react-share](https://github.com/nygardk/react-share). You can override their default props using a technique called **shadowing**.

In order to do this, create a `src/@rafaelquintanilha/gatsby-theme-countdown/configs` folder from the root of your app. In there, you can override both `particles.js` and `share-buttons.js`.

[Example of an extended particles.js config file](https://github.com/rafaelquintanilha/gatsby-theme-countdown/blob/master/examples/theme-jam/src/%40rafaelquintanilha/gatsby-theme-countdown/configs/particles.js)

### Components

You can also override the default implementation of one of the base components. 

Component | Path | Description
--- | --- | ---
MainHeader | src/components/main-header.js | Displays the `mainHeader` text as configured in options
SecondaryHeader | src/components/secondary-header.js | Displays the `secondaryHeader` text as configured in options
GithubLink | src/components/github-link.js | Component for the Github button displayed in the page
ShareButtons | src/components/share-buttons.js | Component for the share buttons displayed below `SecondaryHeader`
Credits | src/components/credits.js | Credits displayed in the footer
SEO | src/components/seo.js | `<Helmet>` for the page
Particles | src/components/particles.js | Wrapper for `particles.js`
CountdownContainer | src/components/countdown-container | Container for the countdown
CountNumber | src/components/count-number | Individual count number container

[Example of how to override a component](https://github.com/rafaelquintanilha/gatsby-theme-countdown/blob/master/examples/world-cup/src/%40rafaelquintanilha/gatsby-theme-countdown/components/main-header.js)

### Theme

Finally, it is also possible to override the theme's styling using [theme-ui](https://theme-ui.com).

In order to do this, create a `src/gatsby-plugin-theme-ui/index.js` from the root of your project and override the styles you want.

Example:

```jsx
import merge from "lodash.merge";
import theme from "@rafaelquintanilha/gatsby-theme-countdown/src/gatsby-plugin-theme-ui/index";

export default merge({}, theme, {
  colors: {
    primary: "#663399",
  },
  svg: {
    fill: "#663399"
  }
})
```

## Development

This theme runs with Yarn workspaces, so you can run each example separately:

```sh
yarn dev
yarn dev:theme-jam
yarn dev:world-cup
```

By default, `yarn dev` will run the `simple` example.

## Author

Created by [Rafael Quintanilha](https://rafaelquintanilha.com).

<a href="https://twitter.com/intent/follow?screen_name=webquintanilha">
  <img src="https://img.shields.io/twitter/follow/webquintanilha.svg?label=Follow%20@webquintanilha" alt="Follow @webquintanilha" />
</a>
