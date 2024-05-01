import { useCallback } from "react";

export function useClickToCopy(text: string): [() => void, Promise<void>] {
  let resolver: () => void;
  const promise = new Promise<void>((resolve) => {
    resolver = resolve;
  });

  const handler = useCallback(async () => {
    await navigator.clipboard.writeText(text);

    resolver();
  }, [text, resolver]);

  return [handler, promise];
}
