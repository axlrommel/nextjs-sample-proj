"use client";
import dataOrder from "@/mock/orders.json";
import data from "@/mock/products.json";
import { Item, Order } from "@/types/order";
import { Product } from "@/types/product";
import Link from "next/link";

import React from "react";

const ProductsByOrder = ({
  params,
}: {
  params: {
    userId: string;
    orderId: string;
  };
}) => {
  const orders: Order[] = dataOrder.filter(
    (item: Order) => item.user === params.userId
  );

  const order = orders[params.orderId];
  if (!order) {
    return <p>Order not Found</p>;
  }

  // Filter products by order
  const filterData: Product[] = [];
  order.items.forEach((orderItem: Item) => {
    filterData.push(data.find((item: Product) => item.id === orderItem.id));
  });

  const productData = filterData;

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-semibold mb-4">{`Products by Order`}</h1>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="grid lg:max-w-5xl lg:w-full lg:grid-cols-2 lg:text-left">
          {productData.map((product: any, index) => (
            <div
              key={index}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <Link href={`/products/${product.id}`}>
                <h3 className={`mb-3 text-2xl font-semibold`}>
                  {product.name}
                </h3>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Price: {product.price}
                </p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Description: {product.description}
                </p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Category: {product.category}
                </p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Rating: {product.rating}
                </p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Reviews: {product.numReviews}
                </p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Stock: {product.countInStock}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsByOrder;
