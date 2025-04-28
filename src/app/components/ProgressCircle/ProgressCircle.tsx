import classNames from "classnames";
import { motion } from "motion/react";

const ProgressCircle = ({
  percentFilled,
  className,
  innerClassName,
}: {
  percentFilled: number;
  className?: string;
  innerClassName?: string;
}) => {
  const angleDegrees = percentFilled * 3.6;
  return (
    <div
      className={classNames(
        "w-[18px] h-[18px] flex items-center justify-center border-[1.5px] border-secondary rounded-full",
        className
      )}
    >
      <motion.div
        initial={{ ["--percentFilled" as string]: "0deg" }}
        animate={{ ["--percentFilled" as string]: `${angleDegrees}deg` }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={classNames(
          "h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[conic-gradient(#ced5e4_var(--percentFilled)_,transparent_0)]",
          innerClassName
        )}
      ></motion.div>
    </div>
  );
};

export default ProgressCircle;
