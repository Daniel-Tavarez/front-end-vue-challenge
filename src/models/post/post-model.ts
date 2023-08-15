import User from "../user/user-model";

export default interface PostModel {
  title: string;
  subTitle: string;
  body: string;
  user: User;
  datePosted: string;
  image: string;
  imageCaption: string;
  monthlyPayment: number;
  favorite: boolean;
  type: number;
}
