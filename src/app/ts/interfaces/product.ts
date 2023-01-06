import {MediaInterface} from "./media";

export interface ProductInterface {
  id: number;
  imageUrl:string;
  name?: string;
  price?:string;
  thumbs?: MediaInterface[]
}

export interface CartInterface extends ProductInterface {
  quantity?: number;

}
