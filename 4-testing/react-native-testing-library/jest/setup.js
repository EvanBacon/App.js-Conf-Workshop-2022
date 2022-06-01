let originalWarn = console.warn;
console.warn = (arg) => {
  const warnings = [
    "Calling .measureInWindow()",
    "Calling .measureLayout()",
    "Calling .setNativeProps()",
    "Calling .focus()",
    "Calling .blur()",
    "useNativeDriver",
  ];

  const finalArgs = warnings.reduce(
    (acc, curr) => (arg.includes(curr) ? [...acc, arg] : acc),
    []
  );

  if (!finalArgs.length) {
    originalWarn(arg);
  }
};

// jest.mock('NativeAnimatedHelper').mock('react-native-gesture-handler', () => {
//   const View = require('react-native/Libraries/Components/View/View');
//   return {
//     State: {},
//     PanGestureHandler: View,
//     BaseButton: View,
//     Directions: {},
//   };
// });
