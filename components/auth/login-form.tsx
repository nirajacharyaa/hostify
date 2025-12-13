"use client";

import { LockIcon, UserIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Field, FieldError, FieldGroup } from "../ui/field";
import { Controller, useForm } from "react-hook-form";
import { type LoginFormValues, loginSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "@/lib/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LoginForm = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const handleLogin = async (data: LoginFormValues) => {
    try {
      const response = await signIn(data);
      if (response.success) {
        router.push("/");
      } else {
        toast.error(response.message);
      }
    } catch {
      toast.error("An error occurred");
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(async (data) => {
        await handleLogin(data);
      })}
    >
      <FieldGroup className="flex flex-col gap-6 pb-4">
        <h2 className="text-2xl font-bold">Create Account</h2>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => {
            return (
              <Field data-invalid={fieldState.invalid}>
                <div className="relative flex flex-1 rounded border items-center md:min-w-md">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="border-0 pr-10 bg-white! py-4! rounded h-auto! shadow-none focus-visible:ring-0"
                    {...field}
                  />
                  <UserIcon className="absolute right-3 size-6 text-black/60" />
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            );
          }}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => {
            return (
              <Field data-invalid={fieldState.invalid}>
                <div className="relative flex flex-1 rounded border items-center md:min-w-md">
                  <Input
                    type="password"
                    placeholder="Password"
                    className="border-0 pr-10 bg-white! py-4! rounded h-auto! shadow-none focus-visible:ring-0"
                    {...field}
                  />
                  <LockIcon className="absolute right-3 size-6 text-black/60" />
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            );
          }}
        />

        <Button
          disabled={form.formState.isSubmitting}
          className="self-start py-6! px-12 bg-accent-orange hover:bg-accent-orange text-white rounded-lg"
        >
          Sign in
        </Button>
      </FieldGroup>
    </form>
  );
};

export default LoginForm;
