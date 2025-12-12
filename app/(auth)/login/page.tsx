import Link from "next/link";
import LoginForm from "@/components/auth/login-form";
import SocialSignIn from "@/components/auth/social-signin";

const LoginPage = () => {
  return (
    <main className="flex items-center justify-center">
      <div className="lg:min-w-lg md:min-w-md bg-white p-8 rounded-lg">
        <LoginForm />

        <div className="w-full pt-6 border-t">
          <p className="font-normal">or sign in with</p>
          <SocialSignIn />
        </div>
        <p className="text-center">
          I don&apos;t have an account.
          <Link href="/signup" className="text-accent-orange hover:underline">
            Sign up.
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
