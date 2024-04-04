import getAllUsers from "@/data/getAllusers/getAllusers";
import Link from "next/link";

export default async function AllUsers() {
  // all user info here
  const allUsers = await getAllUsers();

  return (
    <div className="w-[80%]  mx-auto shadow-2xl">
      <div>
        <h1 className="text-center bg-[#122033] rounded px-5 py-3">
          All Users Info
        </h1>
      </div>
      {/* body */}
      <div className=" bg-[#101C2C] rounded-b px-5 py-3">
        <table className="border-collapse border border-slate-500 w-[100%] ...">
          <thead>
            <tr>
              <th className="border border-slate-600 ...">User Name </th>
              <th className="border border-slate-600 ...">Email</th>
              <th colSpan={2} className="border border-slate-600 ...">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allUsers.data.map((u) => (
              <tr key={u._id}>
                <td className="px-2 border border-slate-700 ...">
                  {u.userName}
                </td>
                <td className="px-2 border border-slate-700 ...">
                  {u.userEmail}
                </td>
                <td className="px-2 border border-slate-700 text-center hover:text-red-700 ...">
                  <button>Delete</button>
                </td>
                <td className="px-2 border border-slate-700 text-center ...">
                  <Link
                    className="hover:text-indigo-700"
                    href={`/update-user/${u._id}`}
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href="/add-user" className="underline pt-3 inline-block">
        Add user
      </Link>
    </div>
  );
}
