import React from "react";
import { View, Text, StyleSheet } from "react-native";

const VodScreen = () => {
  return (
    <View style={styles.text}>
      <Text>VOD Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VodScreen;
