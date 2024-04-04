
export default async function getOneUser(id) {
  
  const res = await fetch(`http://localhost:3000/api/v1/users/${id}`,
  {cache: 'no-store'}
  )
  
  return res.json();
}
