import { ModeToggle } from "@/components/ui/mode-toggle";

import Image from "next/image";
import { HeaderActions } from "./header-actions";

export function Header() {
  return (
    <div className="bg-slate-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 text-2xl">
          <Image
            src="/brain.jpeg"
            width={40}
            height={40}
            className="rounded"
            alt="Image of a Brain"
          />
          شبکه هوشمند
        </div>
        <div className="flex gap-4 items-center">
          <ModeToggle />
          <HeaderActions />
        </div>
      </div>
    </div>
  );
}
