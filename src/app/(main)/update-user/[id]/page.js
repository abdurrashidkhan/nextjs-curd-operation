import UpdateUser from "@/Components/updateUsers/UpdateUser";

export default function updateUser() {
  
  return <div className="w-[80%] rounded shadow-2xl mx-auto">
  <div className="bg-[#122033] py-2 px-2 text-center">
    <h1>Update User</h1>
  </div>
  {/* body */}
  <div className="">
    {/* form */}
    <UpdateUser />
  </div>
</div>
}
