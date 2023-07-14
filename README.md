This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using
[`@react-native-community/cli`](https://github.com/react-native-community/cli).

It comes with linting and a few pre-installed and configured packages:

- [Redux toolkit](https://redux-toolkit.js.org/) for global state management
- [Redux Persist](https://github.com/rt2zz/redux-persist) to locally save redux store and rehydrate
  it on app launch
- [Styled components](https://styled-components.com/) for styling with basic theming configured
- [React Navigation](https://reactnavigation.org/) to handle navigation

# Getting Started

> **Note**: Make sure you have completed the
> [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions
> till "Creating a new application" step, before proceeding.

## Step 1: Install dependencies

First, you will need to install dependencies.

```bash
yarn install
```

then make sure to install related cocoapods (iOS)

```bash
cd ios
pod install
```

Rename your app and bundle

```bash
npx react-native-rename@latest "new_name" -b "bundle_identifier"
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React
Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_
or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode
respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer
   Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd>
   (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see
   your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the
  [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the
  [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the
[Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React
  Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React
  Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub
  **repository** for React Native.
