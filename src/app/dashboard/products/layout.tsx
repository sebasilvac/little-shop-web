'use client';

import { useAppDispatch } from "@/store";
import { getAllProducts } from "@/store/slices/products";
import { useEffect } from "react";


export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="w-full h-full">{children}</div>
  );
}
