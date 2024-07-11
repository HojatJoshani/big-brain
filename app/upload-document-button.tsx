"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UploadDocumentForm from "./upload-document-form";
import { useState } from "react";
import { Upload } from "lucide-react";

export default function UploadDocumentButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          آپلود مدارک
          <Upload className="w-4 h-4"/>
          </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>آپلود مدارک</DialogTitle>
          <DialogDescription>
            با آپلود مدارک خود می توانید در آینده به راحتی به آنها دسترسی داشته
            باشید.
          </DialogDescription>

          <UploadDocumentForm onUpload={() => setIsOpen(false)}/>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
