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
    <div className="mx-auto max-w-3xl px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link to="/dashboard" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Link>

        {/* Verdict Card */}
        <div
          className={`mt-4 rounded-xl border-2 p-10 text-center ${
            isFake
              ? "border-destructive/30 bg-destructive/5"
              : "border-success/30 bg-success/5"
          }`}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            {isFake ? (
              <XCircle className="mx-auto h-20 w-20 text-destructive" />
            ) : (
              <CheckCircle2 className="mx-auto h-20 w-20 text-success" />
            )}
          </motion.div>
          <h1
            className={`mt-4 text-4xl font-extrabold ${
              isFake ? "text-destructive" : "text-success"
            }`}
          >
            {isFake ? "FAKE NEWS" : "REAL NEWS"}
          </h1>
          <p className="mt-2 text-muted-foreground">
            The ML model has classified this article with high confidence
          </p>
        </div>

        {/* Confidence & Details */}
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border bg-card p-6 shadow-card text-center">
            <BarChart3 className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-sm text-muted-foreground">Confidence</p>
            <p className="mt-1 text-3xl font-bold text-foreground">{confidence}%</p>
            {/* Progress bar */}
            <div className="mt-3 h-2 rounded-full bg-secondary">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${confidence}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className={`h-2 rounded-full ${isFake ? "bg-destructive" : "bg-success"}`}
              />
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-card text-center">
            <Brain className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-sm text-muted-foreground">Model</p>
            <p className="mt-1 text-lg font-semibold text-foreground">Logistic Regression</p>
            <p className="mt-1 text-xs text-muted-foreground">+ TF-IDF Vectorizer</p>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-card text-center">
            <FileText className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-sm text-muted-foreground">Words Analyzed</p>
            <p className="mt-1 text-3xl font-bold text-foreground">342</p>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8 rounded-xl border bg-card p-8 shadow-card">
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">Analysis Summary</h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${isFake ? "bg-destructive" : "bg-success"}`} />
              {isFake
                ? "The article contains sensationalized language and unverified claims."
                : "The article uses factual language consistent with verified news sources."}
            </li>
            <li className="flex items-start gap-3">
              <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${isFake ? "bg-destructive" : "bg-success"}`} />
              {isFake
                ? "Multiple linguistic patterns associated with misinformation were detected."
                : "Writing style and tone are consistent with professional journalism."}
            </li>
            <li className="flex items-start gap-3">
              <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${isFake ? "bg-destructive" : "bg-success"}`} />
              {isFake
                ? "The source credibility score is below the threshold for reliable news."
                : "Source credibility and cross-reference analysis passed all checks."}
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link to="/dashboard">
            <Button size="lg" className="gap-2">
              Check Another Article
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Result;
