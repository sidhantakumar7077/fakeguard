import { BarChart3, CheckCircle2, XCircle, Database, FileText, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { motion } from "framer-motion";

const barData = [
  { name: "Mon", fake: 12, real: 18 },
  { name: "Tue", fake: 8, real: 22 },
  { name: "Wed", fake: 15, real: 14 },
  { name: "Thu", fake: 10, real: 20 },
  { name: "Fri", fake: 6, real: 25 },
  { name: "Sat", fake: 9, real: 16 },
  { name: "Sun", fake: 11, real: 19 },
];

const pieData = [
  { name: "Fake", value: 71, color: "hsl(0, 72%, 51%)" },
  { name: "Real", value: 134, color: "hsl(142, 71%, 45%)" },
];

const stats = [
  { label: "Total Checks", value: "205", icon: BarChart3, color: "text-primary" },
  { label: "Real News", value: "134", icon: CheckCircle2, color: "text-success" },
  { label: "Fake News", value: "71", icon: XCircle, color: "text-destructive" },
  { label: "Accuracy", value: "94.2%", icon: TrendingUp, color: "text-primary" },
];

const datasets = [
  { name: "LIAR Dataset", records: "12,836", status: "Active" },
  { name: "ISOT Fake News", records: "44,898", status: "Active" },
  { name: "FakeNewsNet", records: "23,196", status: "Inactive" },
  { name: "Custom Dataset", records: "2,450", status: "Active" },
];

const fade = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const Admin = () => {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-12">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="mt-1 text-muted-foreground">System overview and dataset management</p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fade}
              className="group rounded-xl border border-border/50 bg-card p-6 shadow-card transition-all duration-300 hover:border-primary/20 hover:shadow-card-hover"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <s.icon className={`h-5 w-5 ${s.color} transition-transform duration-300 group-hover:scale-110`} />
              </div>
              <p className="mt-2 text-3xl font-bold text-card-foreground">{s.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-border/50 bg-card p-6 shadow-card lg:col-span-2"
          >
            <h2 className="mb-4 text-lg font-semibold text-card-foreground">Weekly Analysis</h2>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 16%)" />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: "hsl(215, 15%, 55%)" }} stroke="hsl(220, 15%, 16%)" />
                <YAxis tick={{ fontSize: 12, fill: "hsl(215, 15%, 55%)" }} stroke="hsl(220, 15%, 16%)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220, 20%, 10%)",
                    border: "1px solid hsl(220, 15%, 16%)",
                    borderRadius: "8px",
                    fontSize: "13px",
                    color: "hsl(210, 20%, 92%)",
                  }}
                />
                <Bar dataKey="real" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="fake" fill="hsl(0, 72%, 51%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-xl border border-border/50 bg-card p-6 shadow-card"
          >
            <h2 className="mb-4 text-lg font-semibold text-card-foreground">Distribution</h2>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={4} dataKey="value">
                  {pieData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220, 20%, 10%)",
                    border: "1px solid hsl(220, 15%, 16%)",
                    borderRadius: "8px",
                    fontSize: "13px",
                    color: "hsl(210, 20%, 92%)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 text-sm">
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-success shadow-[0_0_6px_hsl(142,71%,45%,0.5)]" /> Real (134)
              </span>
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-destructive shadow-[0_0_6px_hsl(0,72%,51%,0.5)]" /> Fake (71)
              </span>
            </div>
          </motion.div>
        </div>

        {/* Dataset Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 rounded-xl border border-border/50 bg-card p-6 shadow-card"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" /> Dataset Management
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50 text-left text-muted-foreground">
                  <th className="pb-3 font-medium">Dataset Name</th>
                  <th className="pb-3 font-medium">Records</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {datasets.map((d) => (
                  <tr key={d.name} className="border-b border-border/30 last:border-0 transition-colors hover:bg-primary/5">
                    <td className="py-4 font-medium text-card-foreground flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" /> {d.name}
                    </td>
                    <td className="py-4 text-muted-foreground">{d.records}</td>
                    <td className="py-4">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        d.status === "Active"
                          ? "bg-success/10 text-success"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {d.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Admin;
