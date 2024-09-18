"use client";
import Pagination from "@/components/pagination";
import data from "@/mock/users.json";
import { User } from "@/types/user";
import Link from "next/link";
import { useEffect, useState } from "react";

const PAGE_SIZE = 20;

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const userData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-semibold mb-4">{`Client's directory`}</h1>
      <h3 className="font-semibold m-4 text-red-500">
        Click to view the orders of each user
      </h3>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="grid lg:max-w-5xl lg:w-full lg:grid-cols-2 lg:text-left">
          {userData.map((user: User) => (
            <div
              key={user.id}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <Link href={`/orders/${user.id}`}>
                <h3 className={`mb-3 text-2xl font-semibold`}>
                  {user.firstName} {user.lastName}
                </h3>
                <p className={`m-0 max-w-[40ch] text-sm opacity-50 mt-2`}>
                  Phone number: {user.phoneNumber}
                </p>
                <p className={`m-0 max-w-[40ch] text-sm opacity-50 mt-1`}>
                  Email: {user.email}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Pagination
        current={currentPage}
        total={totalPages}
        setCurrent={setCurrentPage}
      />
    </main>
  );
}
