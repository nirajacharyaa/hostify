import Link from "next/link";
import SignUpForm from "@/components/auth/signup-form";
import SocialSignIn from "@/components/auth/social-signin";

const SignupPage = () => {
  return (
    <main className="flex items-center justify-center">
      <div className="lg:min-w-lg md:min-w-md bg-white p-8 rounded-lg">
        <SignUpForm />

        <div className="w-full pt-6 border-t">
          <p className="font-normal">or sign up with</p>
          <SocialSignIn />
        </div>
        <p className="text-center">
          I already have an account.
          <Link href="/login" className="text-accent-orange hover:underline">
            Login.
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignupPage;
