import { Link } from "@/i18n/navigation";
import Button from "../components/Button/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-y-8 items-center justify-center h-screen">
      <div className="flex flex-col gap-y-2 items-center justify-center">
        <div className="font-mono text-brand-primary text-9xl">
          4<span className="animate-pulse">0</span>4
        </div>
        <p className="text-secondary font-medium">
          The course or lesson you are looking for doesn't exist.
        </p>
      </div>
      <Link href="/">
        <Button icon="ArrowLeft" label="Head to Courses" />
      </Link>
    </div>
  );
}
