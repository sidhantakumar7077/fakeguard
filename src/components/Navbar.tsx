import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Check News" },
    { to: "/admin", label: "Admin" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-primary">
          <div className="relative">
            <Shield className="h-6 w-6" />
            <div className="absolute inset-0 animate-pulse-glow blur-md">
              <Shield className="h-6 w-6 text-primary" />
            </div>
          </div>
          <span className="text-lg">FakeGuard</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ${
                location.pathname === l.to
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {location.pathname === l.to && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-md bg-primary/10 border border-primary/20"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </Link>
          ))}
          <Link to="/auth">
            <Button size="sm" className="ml-2 bg-primary text-primary-foreground hover:bg-primary/80 shadow-lg shadow-primary/20">
              Sign In
            </Button>
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border/50 bg-background/90 backdrop-blur-xl px-4 pb-4 pt-2 md:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/auth" onClick={() => setMobileOpen(false)}>
            <Button size="sm" className="mt-2 w-full">Sign In</Button>
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
