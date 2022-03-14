import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ArrowIcon from '../../../assets/icons/ArrowIcon';
import Colors from '../../../constants/Colors';
import Strings from '../../../constants/Strings';
import { Category } from '../more.model';
import SubCategorytItem from './subCategoryItem';

interface CategoryItemProps {
  itemData: { item: Category; index: number };
  isSelected: boolean;
  setIndexOfPressedCategory: (num: number) => void;
}

const CategoryItem = (props: CategoryItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
    props.setIndexOfPressedCategory(props.itemData.index);
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (!props.isSelected) {
      setIsExpanded(false);
    }
  }, [isExpanded, props.isSelected]);

  return (
    <View>
      <TouchableOpacity
        style={{
          ...styles(isExpanded).listItem,
          backgroundColor: props.isSelected ? Colors.ACTIVE_ICON : Colors.WHITE,
        }}
        onPress={handlePress}
      >
        <View style={styles(isExpanded).itemContainer}>
          {props.itemData.item.children.length !== 0 && (
            <View style={styles(isExpanded).arrowIcon}>
              <ArrowIcon
                transform={
                  isExpanded
                    ? Strings.moreScreen.UP_ARROW
                    : Strings.moreScreen.DOWN_ARROW
                }
              />
            </View>
          )}

          <View style={styles(isExpanded).titleContainer}>
            <Text style={styles(isExpanded).title}>
              {props.itemData.item?.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles(isExpanded).subCategories}>
        {props.itemData.item.children.map((child) => (
          <View key={child.id}>
            <SubCategorytItem
              itemData={{
                item: {
                  title: child.title,
                  id: child.id,
                  is_parent_category: child.is_parent_category,
                },
              }}
            />
            <View style={styles(isExpanded).separator} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = (isExpanded: boolean) =>
  StyleSheet.create({
    listItem: {
      height: 52,
      paddingTop: 18,
      paddingRight: 18,
      paddingBottom: 16,
      marginVertical: 1,
      backgroundColor: Colors.WHITE,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      width: '100%',
      paddingVertical: 18,
    },
    itemContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    arrowIcon: {
      marginHorizontal: 24,
    },
    title: {
      fontSize: 17,
      fontWeight: 'bold',
      color: Colors.CATEGORY_TITLE,
    },
    titleContainer: {
      flex: 1,
      flexDirection: 'row-reverse',
    },
    subCategories: {
      height: isExpanded ? undefined : 0,
      overflow: 'hidden',
    },
    separator: {
      height: 0.5,
      backgroundColor: Colors.SEPERATOR,
      width: '95%',
      marginLeft: 16,
      marginRight: 16,
    },
  });

export default CategoryItem;
