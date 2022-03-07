import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "./moreSlice";
import moreAsync from "./moreAsync";
import Category from "./more.model";
import MoveoIcon from "../../assets/icons/MoveoIcon";
import CategoryItem from "./components/categoryItem";
import SearchIcon from "../../assets/icons/SearchIcon";

const MoreScreen = () => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const [indexOfPressedCategory, setIndexOfPressedCategory] = useState<
    number | null
  >(null);

  const renderCategoryItem = (itemData: { item: Category; index: number }) => (
    <CategoryItem
      itemData={itemData}
      indexOfPressedCategory={indexOfPressedCategory}
      setIndexOfPressedCategory={setIndexOfPressedCategory}
    />
  );

  useEffect(() => {
    dispatch(moreAsync.getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //just once

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
          <TextInput placeholder="חפש קבוצות, ליגות, שחקנים…." />
        <View style={styles.searchIcon}>
          <SearchIcon />
        </View>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      </View>
      <View style={styles.moveoIcon}>
        <MoveoIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    width: "100%",
  },
  list: {
    flexGrow: 1,
  },
  moveoIcon: {
    alignItems: "center",
    marginVertical: 32,
  },
  inputContainer: {
    backgroundColor: "white",
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: 14,
    borderRadius: 8,
    height: "8%",
    alignItems: "center",
  },
  searchIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 8,
  },
});

export default MoreScreen;
