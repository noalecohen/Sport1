import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArrowIcon from "../../../assets/icons/ArrowIcon";
import Colors from "../../../constants/Colors";
import Category from "../more.model";

interface Props {
  itemData: { item: Category; index: number };
  indexOfPressedCategory: number | null;
  setIndexOfPressedCategory: React.Dispatch<
    React.SetStateAction<number | null>
  >;
}

const CategoryItem = (props: Props) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.listItem,
        backgroundColor:
          props.indexOfPressedCategory === props.itemData.index
            ? Colors.activeIcon
            : "white",
      }}
      onPress={() => {
        props.setIndexOfPressedCategory(props.itemData.index);
      }}
    >
      <View style={styles.itemContainer}>
        <View style={styles.arrowIcon}>
          <ArrowIcon />
        </View>
        <View>
          <Text style={styles.title}>{props.itemData.item?.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    height: 52,
    paddingTop: 18,
    paddingRight: 18,
    paddingBottom: 16,
    marginVertical: 1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    paddingVertical: 18,
  },
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  arrowIcon: {
    marginHorizontal: 24,
  },
  title: {
    fontSize: 17,
  },
});

export default CategoryItem;
