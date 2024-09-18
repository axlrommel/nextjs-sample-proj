"use client";
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
          {userData.map((user: User) => (
            <div
              key={user.id}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <Link href={`/users/${user.id}`}>
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
