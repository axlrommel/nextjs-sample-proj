import OrderDetail from "@/components/order-detail";
import dataOrder from "@/mock/orders.json";
import data from "@/mock/users.json";
import { Order } from "@/types/order";
import { User } from "@/types/user";
import Link from "next/link";

const userDetail = ({ params }: { params: { userId: string } }) => {
  const user = data.find((item: User) => item.id === params.userId);
  if (!user) {
    return <p>User not Found</p>;
  }

  const orders: Order[] = dataOrder.filter(
    (item: Order) => item.user === params.userId
  );

  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-3xl font-semibold mb-4">User Information</h1>
      <div className="ml-4">
        <h3 className={`mb-3 text-2xl`}>
          {user.firstName} {user.lastName}
        </h3>
        <p className={`m-0 max-w-[30ch] text-sm`}>
          Phone Number: {user.phoneNumber}
        </p>
        <p className={`m-0 max-w-[30ch] text-sm`}>Email: {user.email}</p>
      </div>

      <h1 className="text-3xl font-semibold mt-8">Orders by User</h1>

      <div className="ml-4">
        <p className={`m-0 text-md`}>Orders Number: {orders.length}</p>
        <h3 className="font-semibold text-red-500">
          Click on each order to view the detail of products
        </h3>
      </div>

      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="grid lg:w-full lg:grid-cols-1 lg:text-left bg-white">
          {orders.map((order: Order, index) => {
            return (
              <div
                key={index}
                className="group mt-2 border-t border-b border-black px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                <Link
                  href={{
                    pathname: `/orders/${user.id}/products/` + index,
                  }}
                >
                  <div>Order # {index + 1}</div>
                  <OrderDetail order={order} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default userDetail;
