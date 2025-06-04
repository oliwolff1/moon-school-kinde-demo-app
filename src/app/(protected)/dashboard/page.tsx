import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import DashboardContent from "@/components/dashboard/DashboardContent";

export default async function Dashboard() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isAuth = await isAuthenticated();

  if (!isAuth) {
    return <div>Not authenticated</div>;
  }

  return <DashboardContent user={user} />;
}