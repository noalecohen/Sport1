interface Category {
  title: string;
  id: string;
  is_parent_category: boolean;
  //children: SubCategory[]; // TODO: future structure
}

export default Category;
