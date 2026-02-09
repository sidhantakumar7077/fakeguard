import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Check News" },
    { to: "/admin", label: "Admin" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-primary">
          <Shield className="h-6 w-6" />
          <span className="text-lg">FakeGuard</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/auth">
            <Button size="sm" className="ml-2">
              Sign In
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-card px-4 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/auth" onClick={() => setMobileOpen(false)}>
            <Button size="sm" className="mt-2 w-full">
              Sign In
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
