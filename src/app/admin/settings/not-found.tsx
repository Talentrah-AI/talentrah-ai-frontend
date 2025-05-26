import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-2 text-muted-foreground">
        <FileQuestion className="h-6 w-6" />
        <h2 className="text-lg font-semibold">Page not found</h2>
      </div>
      <p className="text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild variant="outline">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
