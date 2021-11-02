interface ProductPicture extends Record<string, any> {
  id: string;
  url: string;
}

interface ProductAttributes extends Record<string, any> {
  id: string;
  name: string;
  value_name: string;
  value_id: any;
}

export interface Question extends Record<string, any> {
  content: string;
}

export interface Product extends Record<string, any> {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  sold_quantity: number;
  condition: string;
  pictures: ProductPicture[];
  attributes: ProductAttributes[];
  questions: Question[];
}
