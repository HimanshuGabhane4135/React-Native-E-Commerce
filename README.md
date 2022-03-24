# React-Native-E-Commerce Using Native Base Library
This project was assigned as a task at the end of React Native training session. Sapna Prajapati, Prayag Joshi and Himanshu Gabhane has equally contributed in the successful completion of this project.

# Install dependencies

Native Base: -
yarn add native-base react-native-svg react-native-safe-area-context

React Native Elements: -
npm install react-native-elements

React Native Vector Icons: -
npm install --save react-native-vector-icons

Navigation Container: -
yarn add @react-navigation/native

Stack Navigation: -
yarn add @react-navigation/stack

Drawer Navigator: -
- yarn add @react-navigation/drawer
- yarn add react-native-gesture-handler react-native-reanimated
- also edit babel.config.js :- 
  module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: ["react-native-reanimated/plugin"],
  };

# Run pod install
cd ios && pod install && cd ..
