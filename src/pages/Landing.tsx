import { Link } from "react-router-dom";
import { Shield, Search, BarChart3, FileText, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-grid" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-[15%] h-72 w-72 rounded-full bg-primary/10 blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-[15%] h-96 w-96 rounded-full bg-primary/5 blur-[120px] animate-float-delayed" />

        <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm text-primary backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 animate-pulse-glow" />
              B.Tech Final Year Project
            </motion.div>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl">
              Fake News Detection
              <br />
              <span className="text-primary glow-text">using Machine Learning</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
              Analyze news articles instantly using advanced NLP and machine learning algorithms.
              Get clear verdicts with confidence scores to combat misinformation.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link to="/dashboard">
                <Button size="lg" className="gap-2 text-base px-8 bg-primary text-primary-foreground hover:bg-primary/80 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-primary/40 hover:scale-105">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-primary/5 hover:border-primary/30 text-base px-8 transition-all duration-300"
                >
                  Sign In
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-foreground">How It Works</h2>
          <p className="text-muted-foreground">Three simple steps to verify any news article</p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              className="group rounded-xl border border-border/50 bg-card p-8 shadow-card transition-all duration-500 hover:shadow-card-hover hover:border-primary/20 hover:glow-border"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary/20">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
          © 2026 Fake News Detection System — B.Tech Final Year Project
        </div>
      </footer>
    </div>
  );
};

export default Landing;
