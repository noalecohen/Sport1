import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../constants/Colors';
import { SubCategory } from '../more.model';

interface subCategorytItemProps {
  itemData: { item: SubCategory };
}

const subCategorytItem = (props: subCategorytItemProps) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.title}>{props.itemData.item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row-reverse',
    backgroundColor: Colors.SUBCATEGORY_BACKGROUND,
  },
  title: {
    fontSize: 17,
    paddingRight: 18,
    paddingVertical: 16,
    color: Colors.CATEGORY_TITLE,
  },
});

export default subCategorytItem;
