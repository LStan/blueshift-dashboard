import {
  CourseDifficulty,
  difficultyColors,
} from "@/app/utils/course";
import { DifficultyIcon } from "../Icon/icons/Difficulty";
import classNames from "classnames";
import { useTranslations } from "next-intl";

interface DifficultyBadgeProps {
  difficulty: CourseDifficulty;
  className?: string;
}
export default function DifficultyBadge({
  difficulty,
  className,
}: DifficultyBadgeProps) {
  const t = useTranslations();
  return (
    <div
      className={classNames(
        "flex items-center gap-x-1.5 py-1 pl-1 pr-2 rounded-full",
        className
      )}
      style={{ backgroundColor: difficultyColors[difficulty] + "16" }}
    >
      <DifficultyIcon difficulty={difficulty} />
      <span
        className="text-sm leading-none capitalize font-medium font-mono pt-[2px]"
        style={{ color: difficultyColors[difficulty] }}
      >
        {t(`course_levels.${difficulty}`)}
      </span>
    </div>
  );
}
