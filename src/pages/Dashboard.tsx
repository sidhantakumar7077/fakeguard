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
    // Simulate — navigate to result with a random outcome
    const isFake = Math.random() > 0.5;
    const confidence = Math.floor(Math.random() * 20 + 78);
    navigate(`/result?verdict=${isFake ? "fake" : "real"}&confidence=${confidence}`);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex rounded-full bg-accent p-3">
            <Search className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Check News Article</h1>
          <p className="mt-2 text-muted-foreground">
            Paste the news content or upload a file to analyze
          </p>
        </div>

        {/* Input Card */}
        <div className="rounded-xl border bg-card p-8 shadow-card">
          <div className="space-y-6">
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-card-foreground">
                <FileText className="h-4 w-4" /> News Content
              </label>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste the full news article text here..."
                className="min-h-[200px] resize-none text-base"
              />
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-medium text-muted-foreground">OR</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* File Upload */}
            <div>
              <label
                htmlFor="file-upload"
                className="flex cursor-pointer flex-col items-center gap-3 rounded-lg border-2 border-dashed border-border p-8 text-center transition-colors hover:border-primary/40 hover:bg-accent/50"
              >
                <Upload className="h-8 w-8 text-muted-foreground" />
                <div>
                  <span className="text-sm font-medium text-foreground">
                    {fileName || "Click to upload"}
                  </span>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Supports .txt and .pdf files
                  </p>
                </div>
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".txt,.pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            <Button
              size="lg"
              className="w-full gap-2 text-base"
              onClick={handleCheck}
              disabled={!text && !fileName}
            >
              <Sparkles className="h-5 w-5" />
              Check News
            </Button>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { title: "Full Articles", desc: "Paste the complete article for best accuracy" },
            { title: "Multiple Sources", desc: "Cross-check with multiple news sources" },
            { title: "Recent News", desc: "Works best with recent news articles" },
          ].map((tip) => (
            <div key={tip.title} className="rounded-lg border bg-card p-4 shadow-card">
              <h3 className="text-sm font-semibold text-card-foreground">{tip.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{tip.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
