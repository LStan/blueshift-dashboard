import { Link } from "@/i18n/navigation";
import Button from "../Button/Button";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import { usePersistentStore } from "@/stores/store";
import ProgressCircle from "../ProgressCircle/ProgressCircle";

type NewCourseFooterProps = {
  courseSlug: string;
  lessonCount: number;
};

export default function NewCourseFooter({
  lessonCount,
  courseSlug,
}: NewCourseFooterProps) {
  const t = useTranslations();

  const { view } = usePersistentStore();

  return (
    <div
      className={classNames(
        "flex relative z-10",
        view === "list" &&
          "ml-auto flex-col items-end gap-y-2.5 justify-center",
        view === "grid" && "w-full justify-between items-end"
      )}
    >
      <div className="flex items-center gap-x-2">
        <ProgressCircle percentFilled={10} />
        <span className="pt-1 text-sm text-tertiary font-mono">
          0 / {lessonCount}
        </span>
      </div>
      <Link href={`/courses/${courseSlug}`}>
        <Button
          variant="primary"
          size="md"
          label={t("lessons.start_course")}
          icon="Claim"
          iconSide="right"
        />
      </Link>
    </div>
  );
}
