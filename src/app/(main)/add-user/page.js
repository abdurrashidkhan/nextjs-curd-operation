import AdduserForm from "@/Components/AdduserForm/AdduserForm";


export default function AddUser() {

  return (
    <div className="w-[80%] rounded shadow-2xl mx-auto">
      <div className="bg-[#122033] py-2 px-2 text-center">
        <h1>Add User</h1>
      </div>
      {/* body */}
      <div className="">
        {/* form */}
        <AdduserForm />
      </div>
    </div>
  );
}
