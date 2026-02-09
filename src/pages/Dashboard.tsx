import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Upload, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [text, setText] = useState("");
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleCheck = () => {
    const isFake = Math.random() > 0.5;
    const confidence = Math.floor(Math.random() * 20 + 78);
    navigate(`/result?verdict=${isFake ? "fake" : "real"}&confidence=${confidence}`);
  };

  return (
    <div className="relative mx-auto max-w-4xl px-4 py-12">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="mb-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="mb-4 inline-flex rounded-full bg-primary/10 p-3 border border-primary/20"
          >
            <Search className="h-8 w-8 text-primary" />
          </motion.div>
          <h1 className="text-3xl font-bold text-foreground">Check News Article</h1>
          <p className="mt-2 text-muted-foreground">Paste the news content or upload a file to analyze</p>
        </div>

        <div className="rounded-xl border border-border/50 bg-card p-8 shadow-card glow-border">
          <div className="space-y-6">
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-card-foreground">
                <FileText className="h-4 w-4" /> News Content
              </label>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste the full news article text here..."
                className="min-h-[200px] resize-none text-base bg-background border-border/50 focus:border-primary/50"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border/50" />
              <span className="text-xs font-medium text-muted-foreground">OR</span>
              <div className="h-px flex-1 bg-border/50" />
            </div>

            <div>
              <label
                htmlFor="file-upload"
                className="flex cursor-pointer flex-col items-center gap-3 rounded-lg border-2 border-dashed border-border/50 p-8 text-center transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
              >
                <Upload className="h-8 w-8 text-muted-foreground" />
                <div>
                  <span className="text-sm font-medium text-foreground">
                    {fileName || "Click to upload"}
                  </span>
                  <p className="mt-1 text-xs text-muted-foreground">Supports .txt and .pdf files</p>
                </div>
              </label>
              <input id="file-upload" type="file" accept=".txt,.pdf" className="hidden" onChange={handleFileChange} />
            </div>

            <Button
              size="lg"
              className="w-full gap-2 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02]"
              onClick={handleCheck}
              disabled={!text && !fileName}
            >
              <Sparkles className="h-5 w-5" />
              Check News
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { title: "Full Articles", desc: "Paste the complete article for best accuracy" },
            { title: "Multiple Sources", desc: "Cross-check with multiple news sources" },
            { title: "Recent News", desc: "Works best with recent news articles" },
          ].map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="rounded-lg border border-border/50 bg-card p-4 shadow-card transition-all duration-300 hover:border-primary/20"
            >
              <h3 className="text-sm font-semibold text-card-foreground">{tip.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{tip.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
