import OrderDetail from "@/components/order-detail";
import dataOrder from "@/mock/orders.json";
import data from "@/mock/users.json";
import { Order } from "@/types/order";
import { User } from "@/types/user";
import React from "react";

const userDetail = ({ params }: { params: { uniqueId: string } }) => {
  const user = data.find((item: User) => item.id === params.uniqueId);

  const orders: Order[] = dataOrder.filter(
    (item: Order) => item.user === params.uniqueId
  );

  if (!user) {
    return <p>User not Found</p>;
  }

  return (
    <div className="flex min-h-screen flex-col p-24">
      <h1 className="text-3xl font-semibold mb-4">Orders by User</h1>
      <h3 className={`mb-3 text-2xl `}>
        {user.firstName} {user.lastName}
      </h3>

      <div className="container w-3/4">
        {orders.map((order, index) => (
          <div key={index}>
            <OrderDetail order={order} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default userDetail;
