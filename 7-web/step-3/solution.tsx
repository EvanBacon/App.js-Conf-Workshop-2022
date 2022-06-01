import React from "react";
import { View, StyleSheet, Text, Linking } from "react-native";

export function Step3() {
  return (
    <Text>
      Check out this link: <Link href="https://twitter.com/expo">Expo</Link>
    </Text>
  );
}

type LinkProps = {
  href: string;
  children: string;
};

const Link = (props: LinkProps) => {
  const { href, children } = props;
  return (
    <Text
      accessibilityRole="link"
      //@ts-ignore
      href={href}
      onPress={() => {
        Linking.openURL(href);
      }}
      style={styles.link}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
