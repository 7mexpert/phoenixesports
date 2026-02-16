import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

const players = [
  { name: "RupertG", role: "IGL / Fragger", tag: "RG RupertG", stat: "Multiple FNCS Finals" },
  { name: "Blaze", role: "Support / Rotator", tag: "RG Blaze", stat: "Consistent Top Placements" },
  { name: "Frost", role: "Fragger", tag: "RG Frost", stat: "High Elim Record Holder" },
  { name: "Shadow", role: "Flex / Tarper", tag: "RG Shadow", stat: "Clutch Specialist" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const RosterSection = () => {
  return (
    <section id="roster" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="font-display text-sm tracking-[0.3em] text-primary uppercase mb-2">The Squad</p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-wide text-foreground">
          OUR <span className="text-primary text-glow">ROSTER</span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {players.map((player) => (
          <motion.div
            key={player.name}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-card border border-border hover:border-glow transition-all duration-300 group"
          >
            <div className="h-48 bg-secondary flex items-center justify-center relative overflow-hidden">
              <Gamepad2 className="w-16 h-16 text-muted-foreground/30 group-hover:text-primary/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
            <div className="p-5">
              <p className="font-display text-xs tracking-widest text-primary mb-1">{player.tag}</p>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{player.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{player.role}</p>
              <div className="border-t border-border pt-3">
                <p className="text-xs text-muted-foreground">{player.stat}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default RosterSection;
