import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [storedValue, setValue] = useLocalStorage("darkModeEnabled");

  return [storedValue, setValue];
};
