import { Item, Order } from "@/types/order";
import { DateTime } from "luxon";
import React from "react";

export type OrderDetailProps = {
  order: Order;
};

const OrderDetail = ({ order }: OrderDetailProps) => {
  const date = DateTime.fromISO(order.time, { zone: "utc" }).toFormat(
    "MM/dd/yyyy HH:mm:ss"
  );

  // Count of each object using reduce()
  let count = order.items.reduce((accumulator, current) => accumulator + current.count, 0);

  return (
    <>
      <p className={`m-0 text-sm mt-1`}>Time: {date}</p>

      <div className="m-0 text-sm border-b">
        Total Items Number: { count }
        <div className="border-t">
          <div className="grid grid-flow-col grid-cols-[50%_20%_15%_15%] gap-1 mt-2">
            <p>Name</p>
            <p>Price</p>
            <p>Count</p>
            <p>SubTotal</p>
          </div>
          {order.items.map((item: Item, index) => (
            <div key={index}>
              <div className="grid grid-flow-col grid-cols-[50%_20%_15%_15%] gap-1">
                <p className={`opacity-50 flex flex-1`}>{item.name}</p>
                <p className="opacity-50">{item.price}</p>
                <p className="opacity-50">{item.count}</p>
                <p className="opacity-50">{Number(item.price) * item.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`grid grid-flow-col grid-cols-[50%_20%_15%_15%] gap-1 mt-2`}>
        <div className="col-start-4">
          Total: {order.total}
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
