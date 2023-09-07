import { ProductPicking } from "@/products";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'PickingPage',
  description: 'picking page',
};

export default function PickingPage() {
  return (
    <div className="flex flex-col items-end justify-end w-full h-full">
      <ProductPicking />
    </div>
  );
}