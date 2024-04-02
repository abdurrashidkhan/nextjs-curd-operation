
export default async function getAllUsers() {
  const res = await fetch("http://localhost:3000/api/v1/users",
  {cache:'no-cache'}
  )
  return res.json();
}
