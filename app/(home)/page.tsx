import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UserProfile from "@/components/UserProfile";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <header>
        <nav>
          <a href="/admin">kalo mau crud</a>
          <a href="/admin/users">user bro</a>
          <UserProfile />
        </nav>
      </header>
    </div>
  );
}
