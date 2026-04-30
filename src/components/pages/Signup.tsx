import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const highlights = [
  "14-day free workspace setup",
  "Unlimited personal drafts",
  "Shared access controls for your team",
];

export default function Signup() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(252,211,77,0.35),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(16,185,129,0.18),_transparent_22%),linear-gradient(135deg,_#f7f4ea_0%,_#eef7f2_45%,_#f4efe4_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="hidden rounded-[2rem] border border-black/5 bg-black/80 p-8 text-white shadow-[0_32px_80px_rgba(15,23,42,0.24)] backdrop-blur md:flex md:flex-col md:justify-between lg:p-10">
          <div className="space-y-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/80">
              <Sparkles className="size-4" />
              New workspace onboarding
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">LIVESTACK</p>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-balance lg:text-5xl">
                Build your team space before the first login feels like work.
              </h1>
              <p className="max-w-lg text-base leading-7 text-white/70 lg:text-lg">
                Create an account, invite collaborators later, and start with a clean control panel shaped for
                operations, product, and engineering.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {highlights.map(item => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85"
              >
                <CheckCircle2 className="size-4 text-amber-300" />
                <span>{item}</span>
              </div>
            ))}

            <div className="flex items-start gap-3 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-4">
              <ShieldCheck className="mt-0.5 size-5 text-emerald-200" />
              <div>
                <p className="text-sm font-medium text-emerald-50">SOC-ready access model</p>
                <p className="text-sm text-emerald-100/75">Password rules, email verification, and role-based setup from day one.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-md">
          <Card className="border-black/10 bg-white/85 shadow-[0_24px_60px_rgba(15,23,42,0.10)] backdrop-blur">
            <CardHeader className="space-y-3">
              <div className="inline-flex w-fit items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium tracking-[0.24em] text-amber-900 uppercase">
                Sign up
              </div>
              <CardTitle className="text-3xl tracking-tight text-slate-950">Create your account</CardTitle>
              <CardDescription className="text-sm leading-6 text-slate-600">
                Start with a personal workspace now. You can connect your company details after onboarding.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Aditya" autoComplete="given-name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Kumar" autoComplete="family-name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" type="email" placeholder="name@company.com" autoComplete="email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company or team</Label>
                  <Input id="company" placeholder="LiveStack" autoComplete="organization" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Create a strong password" autoComplete="new-password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Repeat your password"
                    autoComplete="new-password"
                  />
                </div>

                <Button className="h-11 w-full rounded-xl text-sm font-semibold" type="submit">
                  Create account
                  <ArrowRight className="size-4" />
                </Button>
              </form>

              <div className="space-y-4">
                <p className="text-center text-sm leading-6 text-slate-500">
                  By continuing, you agree to the Terms of Service and Privacy Policy.
                </p>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  Already have an account?{" "}
                  <Link className="font-semibold text-slate-950 transition-colors hover:text-slate-700" to="/signin">
                    Sign in
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
