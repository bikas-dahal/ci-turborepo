import {db} from "@repo/db/prisma";

export default async function Home() {
  const user = await db.user.findMany()

  return (
    <div>
      {user.map((user) => (
        <div key={user.id}>
          {user.name} {user.email}
          {user?.password}
        </div>
      ))}
   </div>
  );
}
