export type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  image?: string;
  stock: number;
  active: boolean;
  rating?: Rating;
  createdAt?: string;
};
