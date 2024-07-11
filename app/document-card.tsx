import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Doc } from "@/convex/_generated/dataModel";
import { Eye } from "lucide-react";
import Link from "next/link";

export function DocumentCard({ document }: { document: Doc<"documents"> }) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{document.title}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <p>محتوای کارت</p>
        </CardContent>
        <CardFooter>
          <Button asChild className="flex items-center gap-2" variant="secondary">
            <Link href={`/documents/${document._id}`}>
            مشاهده
            <Eye className="w-4 h-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
