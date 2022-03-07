import React from "react";
import { StyleSheet, View } from "react-native";
import MoveoIcon from "./MoveoIcon";

const MoveoLogo = () => {
  return (
    <View style={styles.moveoIcon}>
      <MoveoIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  moveoIcon: {
    alignItems: "center",
    marginVertical: 32,
  },
});

export default MoveoLogo;
