async function userlist() {
  let data = await fetch("https://dummyjson.com/user");
  data = await data.json();
  return data.users;
}

export default async function Page() {
  let users = await userlist();
  console.log(users);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">User List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((item) => (
          <div key={item.id} className="border p-4">
            <p>
              Name: {item.firstName} {item.lastName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
