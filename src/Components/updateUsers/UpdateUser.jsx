"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

export default function UpdateUser() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => console.log(data);
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <input {...register("userName")} />
      <input {...register("lastName")} />
      <button type="submit">Submit</button> */}
          <div className="bg-[#101C2C] px-4 rounded-b py-5">
            <div className="grid grid-cols-2 gap-2 ">
              <div className="">
                <label
                  htmlFor="userName"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  User Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="user Name"
                    autoComplete="given-name"
                    className=" px-2 block w-full rounded border-none py-1.5 text-gray-200 shadow-sm  placeholder:text-gray-300  sm:text-sm sm:leading-6 outline-none bg-[#3a4553]"
                    {...register("userName")}
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="userEmail"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  User Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    autoComplete="email"
                    placeholder="Enter your email"
                    className=" px-2 block w-full rounded border-none py-1.5 text-gray-200 shadow-sm  placeholder:text-gray-300  sm:text-sm sm:leading-6 outline-none bg-[#3a4553]"
                    {...register("userEmail")}
                  />
                </div>
              </div>
            </div>
            <div className="">
              <button
                className="py-2 text-center bg-[#30a525] w-[100%] mt-6 rounded"
                type="submit"
              >
                Update
              </button>
            </div>
          </div>
        </form>
        <Link href='/all-users' className="inline-block underline pt-2">All users</Link>
      </div>
    </div>
  );
}
