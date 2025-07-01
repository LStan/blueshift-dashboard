import classNames from "classnames";
import Loading from "../Loading/Loading";
import { motion } from "motion/react";
import { anticipate } from "motion";
export default function Badge({
  label,
  variant,
}: {
  label: string;
  variant: "incomplete" | "passed" | "failed" | "loading";
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: anticipate }}
      key={variant}
      className={classNames(
        "px-2.5 py-1.5 rounded-full font-medium capitalize font-mono text-xs lg:text-[13px] flex items-center gap-x-2",
        variant === "incomplete" &&
          "bg-background-card-foreground text-secondary",
        variant === "passed" && "bg-success/8 text-success",
        variant === "failed" && "bg-error/8 text-error",
        variant === "loading" &&
          "pl-2 pr-3 bg-brand-primary/8 text-brand-primary"
      )}
    >
      {variant === "loading" ? (
        <>
          <Loading className="text-brand-primary" />
          <span className="text-brand-primary pt-[4px]">Testing</span>
        </>
      ) : (
        <span>{label}</span>
      )}
    </motion.div>
  );
}
