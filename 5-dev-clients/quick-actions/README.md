# Quick Actions Example

1. Utilizing the `@config-plugins/react-native-quick-actions` config plugin we'll generate an app that can dynamically add native quick actions to the home screen. [API Reference](https://github.com/expo/config-plugins/tree/main/packages/react-native-quick-actions).
2. Install the plugin `expo install react-native-quick-actions @config-plugins/react-native-quick-actions`
3. Add to the `plugins` array of the `app.json`
4. Prebuild the project with `expo prebuild`
5. Build the project with `expo run:ios` or `expo run:android`.
6. We'll need some application code to append actions to the native app
7. In [step-1](./step-1/index.js) add code to append items.
8. In [step-2](./step-2/index.js) add code to get the item that was used to open the app.

<img src="https://user-images.githubusercontent.com/9664363/125181024-15295c00-e1be-11eb-8479-80535922ad22.png" />

## Notes

- [Example](https://github.com/expo/config-plugins/tree/main/apps/react-native-quick-actions)
- [Plugin Docs](https://github.com/expo/config-plugins/tree/main/packages/react-native-quick-actions)
- [Module Docs](https://github.com/jordanbyron/react-native-quick-actions)
