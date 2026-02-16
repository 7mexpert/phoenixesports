import { motion } from "framer-motion";
import { Crosshair, Users, Zap } from "lucide-react";

const stats = [
  { icon: Crosshair, label: "Tournaments Played", value: "50+" },
  { icon: Users, label: "Active Roster", value: "4" },
  { icon: Zap, label: "Win Rate", value: "68%" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm tracking-[0.3em] text-primary uppercase mb-2">Who We Are</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-wide text-foreground mb-6">
            ABOUT <span className="text-primary text-glow">US</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            RupertG Esports is a competitive Fortnite team built on passion, grind, and raw talent. We compete at the highest level, pushing each other to be the best in every tournament we enter.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From Cash Cups to FNCS, we bring intensity and strategy to every match. Our goal? To become the most feared team in competitive Fortnite.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="flex items-center gap-5 p-5 bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="gradient-primary p-3">
                <stat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-primary text-glow">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
