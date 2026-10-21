"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useActionState, useEffect } from "react";

import { useRouter } from "next/navigation";
import ActionButtion from "../../share/ActionButtion";
import loginAction from "@/app/(commonLayout)/_action/auth";

export default function LoginFrom() {
  const [state, formAction, pending] = useActionState(loginAction, null);
  const route = useRouter();

  useEffect(() => {
    if (!state) return;
    if (!state.success) {
      alert(state.message || "Login failed");
    }
    if (state.success) {
      alert(state.message || "Login successful");
      route.push("/");
    }
  }, [state, route]);

  return (
    <form action={formAction}>
      <Card className="p-5 space-y-4">
        <Input name="email" type="email" placeholder="Email"></Input>
        <Input name="password" type="password" placeholder="password"></Input>
        <ActionButtion>Login</ActionButtion>
      </Card>
    </form>
  );
}