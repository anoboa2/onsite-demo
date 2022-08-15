# File Structure

This app utilizes an [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) file structure.  Most "Atom" components are taken from the [MUI Core Material UI v5.10.0 component library](https://mui.com/material-ui/getting-started/overview/)

# Branching Strategy

This repo use a [Trunk Based](https://trunkbaseddevelopment.com) branching model, with the Master branch serving as the live Trunk.  Merges into Master will trigger an automated build cycle through AWS Amplify.

# Future Scalability: Microservice Arcitecture

A future goal is to decompose our app into smaller services categorized by key function as follows:
- Shared Components
- Informational/Core Website
- Itineraries/Explore
- Travel Profile



*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

