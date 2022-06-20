import {Category} from "./category";


export interface Book {
  id : number;
  name: string;
  img: string;
  code: string;
  author: string;
  translator: string;
  producer: string;
  size: string;
  pages: number;
  date:any;
  quantity:any;
  rest:any;
  price:any;
  promotion:any;
  delFlag:any;
  category: Category;
}
