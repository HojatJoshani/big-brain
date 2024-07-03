"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";

export default function ChatPanel() {
  return (
    <div className="w-[300px] bg-gray-900 flex flex-col gap-2 p-4">
      <div className="h-[350px] overflow-y-auto"></div>
      <div className="flex gap-1">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            // TODO: Call convex
          }}
        >
          <Input required name="text" />
          <Button>ثبت</Button>
        </form>
      </div>
    </div>
  );
}
