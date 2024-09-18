import { Order } from "@/types/order";
import { DateTime } from "luxon";
import React from "react";

export type OrderDetailProps = {
  order: Order;
};

const OrderDetail = ({ order }: OrderDetailProps) => {
  const date = DateTime.fromISO(order.time, { zone: "utc" }).toFormat(
    "MM/dd/yyyy HH:mm:ss"
  );

  return (
    <>
      <p className={`m-0 text-sm mt-1`}>Time: {date}</p>

      <div className="m-0 text-sm border-b">
        Items:
        <div className="border-t">
          <div className="grid grid-flow-col grid-cols-[50%_20%_15%_15%] gap-1">
            <p>Name</p>
            <p>Price</p>
            <p>Count</p>
            <p>SubTotal</p>
          </div>
          {order.items.map((item: Item, index) => (
            <div key={index}>
              <div className="grid grid-flow-col grid-cols-[50%_20%_15%_15%] gap-1">
                <p className={`opacity-50 flex flex-1`}>{item.name}</p>
                <p>{item.price}</p>
                <p className="">{item.count}</p>
                <p className="">{Number(item.price) * item.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className={`flex m-0 text-sm opacity-50 mt-2 justify-end`}>
        Total: {order.total}
      </p>
    </>
  );
};

export default OrderDetail;
