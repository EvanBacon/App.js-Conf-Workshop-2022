# Notes

## Native

- `npm i -g eas-cli`
- `eas build`
- `eas submit`
- Go to store and add metadata

### Publishing Updates

- `expo publish`
- Stale while revalidating.

## Web

- Test locally with `npx serve web-build`
- [Expo: Publishing web](https://docs.expo.dev/distribution/publishing-websites/)
- Expo does not currently offer web hosting.

## Handling Secrets

- There is no 100% secure way to store secrets in a client application.
- Expo/React are just as safe as any other native app since they are just more streamlined native apps.

## Updating your app

- [Configuring OTA updates](https://docs.expo.io/guides/configuring-ota-updates)
- [Updates settings in app.json](https://docs.expo.io/workflow/configuration/#updates)
- [expo-updates (new!)](https://github.com/expo/expo/tree/master/packages/expo-updates)
- [Release channels](https://docs.expo.io/distribution/release-channels/)
- [expo-github-action](https://github.com/expo/expo-github-action)
