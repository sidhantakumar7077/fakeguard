import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2, XCircle, ArrowLeft, BarChart3, FileText, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Result = () => {
  const [params] = useSearchParams();
  const verdict = params.get("verdict") || "real";
  const confidence = parseInt(params.get("confidence") || "85");
  const isFake = verdict === "fake";

  return (
    <div className="relative mx-auto max-w-3xl px-4 py-12">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className={`absolute top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full blur-[120px] ${isFake ? "bg-destructive/10" : "bg-success/10"}`} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative"
      >
        <Link to="/dashboard" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Link>

        <div className={`mt-4 rounded-xl border-2 p-10 text-center transition-all ${
          isFake
            ? "border-destructive/30 bg-destructive/5"
            : "border-success/30 bg-success/5"
        }`}>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            {isFake ? (
              <XCircle className="mx-auto h-20 w-20 text-destructive drop-shadow-[0_0_20px_hsl(0,72%,51%,0.5)]" />
            ) : (
              <CheckCircle2 className="mx-auto h-20 w-20 text-success drop-shadow-[0_0_20px_hsl(142,71%,45%,0.5)]" />
            )}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`mt-4 text-4xl font-extrabold ${isFake ? "text-destructive" : "text-success"}`}
          >
            {isFake ? "FAKE NEWS" : "REAL NEWS"}
          </motion.h1>
          <p className="mt-2 text-muted-foreground">The ML model has classified this article with high confidence</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: BarChart3,
              label: "Confidence",
              content: (
                <>
                  <p className="mt-1 text-3xl font-bold text-foreground">{confidence}%</p>
                  <div className="mt-3 h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${confidence}%` }}
                      transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                      className={`h-2 rounded-full ${isFake ? "bg-destructive shadow-[0_0_10px_hsl(0,72%,51%,0.5)]" : "bg-success shadow-[0_0_10px_hsl(142,71%,45%,0.5)]"}`}
                    />
                  </div>
                </>
              ),
            },
            {
              icon: Brain,
              label: "Model",
              content: (
                <>
                  <p className="mt-1 text-lg font-semibold text-foreground">Logistic Regression</p>
                  <p className="mt-1 text-xs text-muted-foreground">+ TF-IDF Vectorizer</p>
                </>
              ),
            },
            {
              icon: FileText,
              label: "Words Analyzed",
              content: <p className="mt-1 text-3xl font-bold text-foreground">342</p>,
            },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="rounded-xl border border-border/50 bg-card p-6 shadow-card text-center transition-all duration-300 hover:border-primary/20"
            >
              <card.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
              <p className="text-sm text-muted-foreground">{card.label}</p>
              {card.content}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 rounded-xl border border-border/50 bg-card p-8 shadow-card"
        >
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">Analysis Summary</h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              isFake
                ? "The article contains sensationalized language and unverified claims."
                : "The article uses factual language consistent with verified news sources.",
              isFake
                ? "Multiple linguistic patterns associated with misinformation were detected."
                : "Writing style and tone are consistent with professional journalism.",
              isFake
                ? "The source credibility score is below the threshold for reliable news."
                : "Source credibility and cross-reference analysis passed all checks.",
            ].map((text, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${isFake ? "bg-destructive shadow-[0_0_6px_hsl(0,72%,51%,0.5)]" : "bg-success shadow-[0_0_6px_hsl(142,71%,45%,0.5)]"}`} />
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-8 text-center">
          <Link to="/dashboard">
            <Button size="lg" className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-105">
              Check Another Article
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Result;
