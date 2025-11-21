import { JSX } from "react";

export interface MenuTypes {
  icon: JSX.Element;
  color: string;
}

export interface TotalMoneyTypes {
  menu: string;
  money: number;
  content: string;
  date: string;
  category: string;
}
