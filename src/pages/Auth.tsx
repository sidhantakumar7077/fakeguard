import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Mail, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex rounded-full bg-accent p-3">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            {isLogin ? "Welcome back" : "Create an account"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {isLogin ? "Sign in to continue" : "Sign up to get started"}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-8 shadow-card">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="name" placeholder="Your full name" className="pl-10" />
                </div>
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="email" type="email" placeholder="you@example.com" className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="password" type="password" placeholder="••••••••" className="pl-10" />
              </div>
            </div>

            <Link to="/dashboard">
              <Button className="w-full" size="lg">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </Link>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-primary hover:underline"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
