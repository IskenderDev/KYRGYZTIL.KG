import { Copy } from "lucide-react";
import { useState } from "react";

import { Button } from "./Button";

interface ShareActionsProps {
  title: string;
}

export function ShareActions({ title }: ShareActionsProps) {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      variant="secondary"
      icon={<Copy aria-hidden className="h-4 w-4" />}
      onClick={async () => {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }}
    >
      {copied ? "Көчүрүлдү" : title}
    </Button>
  );
}
