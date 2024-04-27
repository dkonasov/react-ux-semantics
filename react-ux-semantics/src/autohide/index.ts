import { useShowable } from "../showable";

export function useAutohide(time = 5000): [boolean, () => void, () => void] {
  const [isVisible, show, hide] = useShowable();

  setTimeout(() => hide(), time);

  return [isVisible, show, hide];
}
