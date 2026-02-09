import { Link } from "react-router-dom";
import { Shield, Search, BarChart3, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    icon: Search,
    title: "Instant Detection",
    desc: "Paste any news article and get real-time fake or real classification powered by ML models.",
  },
  {
    icon: BarChart3,
    title: "Confidence Score",
    desc: "View detailed confidence percentages and analysis summaries for every check.",
  },
  {
    icon: FileText,
    title: "File Upload",
    desc: "Upload text or PDF files for batch analysis — perfect for research workflows.",
  },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 gradient-hero opacity-85" />
        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground">
              <Shield className="h-4 w-4" />
              B.Tech Final Year Project
            </div>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-6xl">
              Fake News Detection System
              <br />
              <span className="text-primary-foreground/70">using Machine Learning</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
              Analyze news articles instantly using advanced NLP and machine learning algorithms.
              Get clear verdicts with confidence scores to combat misinformation.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2 text-base px-8">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground">How It Works</h2>
          <p className="text-muted-foreground">Three simple steps to verify any news article</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              className="rounded-xl border bg-card p-8 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent p-3">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
          © 2026 Fake News Detection System — B.Tech Final Year Project
        </div>
      </footer>
    </div>
  );
};

export default Landing;
