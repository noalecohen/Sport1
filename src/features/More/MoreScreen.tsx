import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories, selectStatus } from "./moreSlice";
import moreAsync from "./moreAsync";
import Category from "./more.model";

const renderListItem = (itemData: { item: Category }) => (
  <View>
    <Text>{itemData.item?.title}</Text>
  </View>
);

const MoreScreen = () => {
  const categoriesStatus = useSelector(selectStatus);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoriesStatus === "idle") {
      dispatch(moreAsync.getCategories());
    }
  }, [categories, categoriesStatus, dispatch]);

  return (
    <View>
      <Text>Categories List</Text>
      <FlatList
        data={categories}
        renderItem={renderListItem.bind(this)}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
  },
});

export default MoreScreen;
