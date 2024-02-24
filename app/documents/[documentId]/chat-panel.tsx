"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";

export default function ChatPanel() {
  return (
    <div className="w-[300px] bg-gray-900">
      <div className="felx gap-1">
        <Input name="text" />
        <Button></Button>
      </div>
    </div>
  );
}
