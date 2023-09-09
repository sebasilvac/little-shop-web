import { CartCounter } from "@/shopping-cart/components";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'CounterPage',
  description: 'Counter page',
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en carrito de compras</span>
      
      <CartCounter />
    </div>
  );
}