import data from "@/mock/users.json";
import { User } from "@/types/user";
import Link from "next/link";

const userDetail = ({ params }: { params: { userId: string } }) => {
  const user = data.find((item: User) => item.id === params.userId);
  if (!user) {
    return <p>User not Found</p>;
  }

  return (
    <div className="flex min-h-screen flex-col p-24">
      <h1 className="text-3xl font-semibold mb-4">User Description</h1>
      <h3 className={`mb-3 text-2xl `}>
        {user.firstName} {user.lastName}
      </h3>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        Phone Number: {user.phoneNumber}
      </p>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        Email: {user.email}
      </p>

      <div className="max-w-[30ch] mt-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <Link href={`/orders/${user.id}`}>
          <h3 className={`mb-3 text-2xl font-semibold`}>Orders by User</h3>
        </Link>
      </div>
    </div>
  );
};

export default userDetail;
