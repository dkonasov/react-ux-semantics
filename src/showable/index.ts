import { useCallback, useState } from "react";

export function useShowable(): [boolean, () => void, () => void] {
  const [isVisible, setVisible] = useState(false);

  const show = useCallback(() => {
    setVisible(true);
  }, []);
  const hide = useCallback(() => {
    setVisible(false);
  }, []);

  return [isVisible, show, hide];
}
