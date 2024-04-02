export default async function insertUser(data,e) {
  const res = await fetch(`http://localhost:3000/api/v1/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = res.json();
  if (res.ok) {
    alert("add insert success");
  }else if(e){
    alert('please try agin')
  }

  // return NextResponse.json(result);
}
