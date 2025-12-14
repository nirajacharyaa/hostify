import { getAuth } from "@/actions/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const auth = await getAuth();

  if (!auth.user) redirect("/login");
  return (
    <div>
      <p>Become a host</p>
      <p>Authenticated Page!!!</p>
    </div>
  );
};

export default Page;
