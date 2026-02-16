import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-wider text-primary text-glow-strong mb-2">
            RUPERTG
          </h1>
          <p className="font-display text-xl sm:text-2xl lg:text-3xl tracking-[0.3em] text-foreground/80 uppercase">
            Esports
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto font-body"
        >
          Dominating the Fortnite competitive scene. Built different.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById("roster")?.scrollIntoView({ behavior: "smooth" })}
            className="gradient-primary font-display text-sm tracking-widest uppercase px-8 py-3 text-primary-foreground font-bold hover:opacity-90 transition-opacity"
          >
            Meet the Team
          </button>
          <button
            onClick={() => document.getElementById("socials")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-primary/40 font-display text-sm tracking-widest uppercase px-8 py-3 text-primary font-bold hover:bg-primary/10 transition-colors"
          >
            Follow Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
