"use client";
import OrderDetail from "@/components/order-detail";
import data from "@/mock/orders.json";
import dataUsers from "@/mock/users.json";
import { Order } from "@/types/order";
import { User } from "@/types/user";

import Link from "next/link";
import { useEffect, useState } from "react";

const PAGE_SIZE = 20;

export default function Orders() {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const orderData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="grid lg:max-w-5xl lg:w-full lg:grid-cols-2 lg:text-left">
          {orderData.map((order: Order, index) => {
            const user = dataUsers.find((item: User) => item.id === order.user);
            return (
              <div
                key={index}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                <Link href={`/orders/${order.user}`}>
                  <h3 className={`mb-3 text-2xl font-semibold`}>
                    {`${user?.firstName} ${user?.lastName}`}
                  </h3>

                  <OrderDetail order={order} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-around w-full border-t-2 pt-4">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </main>
  );
}
