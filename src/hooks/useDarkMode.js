import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValues) => {
  const [storedValue, setValue] = useLocalStorage("darkModeEnabled");

  return [storedValue, setValue];
};
