export interface Category {
  title: string;
  id: string;
  is_parent_category: boolean;
  children: SubCategory[];
}

export interface SubCategory {
  title: string;
  id: string;
  is_parent_category: boolean;
}
