import Link from "next/link";

export default function AllUsers() {
  return (
    <div className="w-[80%]  mx-auto shadow-2xl">
      <div>
        <h1 className="text-center bg-[#122033] rounded px-5 py-3">All Post</h1>
      </div>
      {/* body */}
      <div className=" bg-[#101C2C] rounded-b px-5 py-3">
        <table class="border-collapse border border-slate-500 w-[100%] ...">
          <thead>
            <tr>
              <th class="border border-slate-600 ...">User Name </th>
              <th class="border border-slate-600 ...">Email</th>
              <th colSpan={2} class="border border-slate-600 ...">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="px-2 border border-slate-700 ...">Mina Khan</td>
              <td class="px-2 border border-slate-700 ...">
                minakhan@gmial.com
              </td>
              <td class="px-2 border border-slate-700 text-center hover:text-red-700 ...">
                <button>Delete</button>
              </td>
              <td class="px-2 border border-slate-700 text-center ...">
                <Link className="hover:text-indigo-700" href={`/post/update/1`}>
                  Update
                </Link>
              </td>
            </tr>
            <tr className="">
              <td className="px-2 border border-slate-700 ...">Rashid khan</td>
              <td class="px-2 border border-slate-700 ...">
                rashidkhan@gmail.com
              </td>
              <td class="px-2 border border-slate-700 text-center hover:text-red-700 ...">
                <button>Delete</button>
              </td>
              <td class="px-2 border border-slate-700 text-center ...">
                <Link className="hover:text-indigo-700" href={`/post/update/1`}>
                  Update
                </Link>
              </td>
            </tr>
            <tr className="">
              <td className="px-2 border border-slate-700 ...">Rohan Khan</td>
              <td class="px-2 border border-slate-700 ...">
                rohankhan@gmail.com
              </td>
              <td class="px-2 border border-slate-700 text-center hover:text-red-700 ...">
                <button>Delete</button>
              </td>
              <td class="px-2 border border-slate-700 text-center ...">
                <Link className="hover:text-indigo-700" href={`/post/update/1`}>
                  Update
                </Link>
              </td>
            </tr>
            <tr className="">
              <td className="px-2 border border-slate-700 ...">Nobody</td>
              <td class="px-2 border border-slate-700 ...">nobody@gmail.com</td>
              <td class="px-2 border border-slate-700 text-center hover:text-red-700 ...">
                <button>Delete</button>
              </td>
              <td class="px-2 border border-slate-700 text-center ...">
                <Link className="hover:text-indigo-700" href={`/post/update/1`}>
                  Update
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link href='/add-user' className="underline pt-3 inline-block">Add user</Link>
    </div>
  );
}
