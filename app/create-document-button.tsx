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

export default function CreateDocumentButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button>آپلود مدارک</Button>
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
