export interface Product {
  id: string;
  code: string;
  title: string;
  description: string;
  price: number;
}

export interface UpdateProductPayload {
  code: string;
  title: string;
  description: string;
  price: number;
}