"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LockIcon, UserIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Field, FieldError, FieldGroup } from "../ui/field";
import { type SignUpFormValues, signUpSchema } from "@/schemas/auth";
import { signUp } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useCallback, useRef } from "react";

const LoginForm = () => {
  const router = useRouter();
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const handleSignUp = async (data: SignUpFormValues) => {
    const response = await signUp(data);
    if (!response.success) {
      toast.error(response.message);
    } else {
      toast.success("Account successfully created!");
      router.push("/login");
    }
  };

  const checkEmailExists = async (email: string): Promise<boolean> => {
    try {
      const response = await fetch(
        `/api/check-email?email=${encodeURIComponent(email)}`,
        {
          method: "HEAD",
        },
      );
      return response.ok;
    } catch (error) {
      console.error("Error checking email:", error);
      return false;
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <biome please leave me alone>
  const validateEmail = useCallback(
    async (email: string) => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      if (!email || !email.includes("@")) return;

      debounceTimerRef.current = setTimeout(async () => {
        const exists = await checkEmailExists(email);
        if (exists) {
          form.setError("email", {
            type: "manual",
            message: "This email is already registered",
          });
        } else {
          const emailError = form.formState.errors.email;
          if (emailError?.type === "manual") {
            form.clearErrors("email");
          }
        }
      }, 500);
    },
    [form],
  );

  return (
    <form
      onSubmit={form.handleSubmit(async (data) => {
        await handleSignUp(data);
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
                    onChange={(e) => {
                      field.onChange(e);
                      validateEmail(e.target.value);
                    }}
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

        <Controller
          name="confirmPassword"
          control={form.control}
          render={({ field, fieldState }) => {
            return (
              <Field data-invalid={fieldState.invalid}>
                <div className="relative flex flex-1 rounded border items-center md:min-w-md">
                  <Input
                    type="password"
                    placeholder="Confirm password"
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
          className="self-start py-6! px-12! bg-accent-orange hover:bg-accent-orange text-white rounded-lg"
          disabled={form.formState.isSubmitting}
        >
          Sign Up
        </Button>
      </FieldGroup>
    </form>
  );
};

export default LoginForm;
