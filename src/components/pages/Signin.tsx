import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Signin() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(160deg,_#f8f6ef_0%,_#eef4f0_100%)] px-4 py-8">
      <Card className="w-full max-w-md border-black/10 bg-white/90 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
        <CardHeader className="space-y-3">
          <Link
            to="/signup"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
          >
            <ArrowLeft className="size-4" />
            Back to signup
          </Link>
          <CardTitle className="text-3xl tracking-tight">Welcome back</CardTitle>
          <CardDescription>Use your email and password to access your workspace.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="signin-email">Email</Label>
            <Input id="signin-email" type="email" placeholder="name@company.com" autoComplete="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signin-password">Password</Label>
            <Input
              id="signin-password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>
          <Button className="h-11 w-full rounded-xl">Sign in</Button>
        </CardContent>
      </Card>
    </main>
  );
}
