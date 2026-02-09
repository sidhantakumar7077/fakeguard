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
    <div className="mx-auto max-w-6xl px-4 py-12">
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
            className="rounded-xl border bg-card p-6 shadow-card"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <s.icon className={`h-5 w-5 ${s.color}`} />
            </div>
            <p className="mt-2 text-3xl font-bold text-card-foreground">{s.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-xl border bg-card p-6 shadow-card lg:col-span-2"
        >
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">Weekly Analysis</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 90%)" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(215, 15%, 50%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(215, 15%, 50%)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(214, 20%, 90%)",
                  borderRadius: "8px",
                  fontSize: "13px",
                }}
              />
              <Bar dataKey="real" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="fake" fill="hsl(0, 72%, 51%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-xl border bg-card p-6 shadow-card"
        >
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">Distribution</h2>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={4}
                dataKey="value"
              >
                {pieData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-success" /> Real (134)
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-destructive" /> Fake (71)
            </span>
          </div>
        </motion.div>
      </div>

      {/* Dataset Management */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 rounded-xl border bg-card p-6 shadow-card"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" /> Dataset Management
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-muted-foreground">
                <th className="pb-3 font-medium">Dataset Name</th>
                <th className="pb-3 font-medium">Records</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {datasets.map((d) => (
                <tr key={d.name} className="border-b last:border-0">
                  <td className="py-4 font-medium text-card-foreground flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" /> {d.name}
                  </td>
                  <td className="py-4 text-muted-foreground">{d.records}</td>
                  <td className="py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        d.status === "Active"
                          ? "bg-success/10 text-success"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
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
  );
};

export default Admin;
