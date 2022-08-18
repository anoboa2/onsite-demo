# File Structure

This app utilizes an [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) file structure.  Most "Atom" components are taken from the [MUI Core Material UI v5.10.0 component library](https://mui.com/material-ui/getting-started/overview/)

# Branching Strategy

This repo use a [Trunk Based](https://trunkbaseddevelopment.com) branching model, with the Master branch serving as the live Trunk.  Merges into Master will trigger an automated build cycle through AWS Amplify.

# Styling Patterns

The foundation of styling for this app is found in `components/theme.js`.  The theme file uses the [MUI css-in-js paradigm](https://mui.com/material-ui/customization/theming/).  Any lower level styling should using a [Styled Component](https://mui.com/material-ui/guides/interoperability/#styled-components), the [MUI system package](https://mui.com/system/getting-started/the-sx-prop/) (aka the "sx" prop), or the.  Use the following three directions to determine where styling should be done.

1. Should the style be applied to all HTML elements/JSX components in the app?  Styling should be done in theme.js
2. Should the style be applied to a certain page or only one class of elements?  Styling should be done as a reusable style variable that is injected into the SX prop.  However, consider the value of making a [styled component](https://mui.com/material-ui/guides/interoperability/#styled-components) that is accessible from the /atoms or /molecules libraries.  Consider the value of making a [component variant](https://mui.com/material-ui/customization/theme-components/#creating-new-component-variants) in theme.js as well.
3. Should the style be applied to only one element?  Styling should be done inline using the root component's SX prop.

Should there need to be an exception to any of the above scenarios to use an alternate styling pattern, please reference the [MUI Style Interoperability guide](https://mui.com/material-ui/guides/interoperability/)

# Code Style Guide

While this is not fully implemented yet, we will seek to use Airbnb Style Guides for...
1. [Javascript](https://github.com/airbnb/javascript)
2. [React](https://github.com/airbnb/javascript/tree/master/react)

For CSS-in-JS usage, we will use the styling patterns demonstrated in the MUI/system guide...
3. [CSS-in-JS](https://mui.com/system/basics/)

# Media Query vs Breakpoints

Please reference utilizing [MUI breakpoints here](https://mui.com/system/basics/#responsive-values)

# Future Scalability: Microservice Architecture

A future goal is to decompose our app into smaller services categorized by key function as follows:
- Shared Components
- Informational/Core Website
- Itineraries/Explore
- Travel Profile



*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

