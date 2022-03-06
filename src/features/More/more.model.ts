interface Category {
  title: string;
  id: string;
  is_parent_category: boolean;
  //children: []; // TODO: can't assing Category[] type...
}

export default Category;
