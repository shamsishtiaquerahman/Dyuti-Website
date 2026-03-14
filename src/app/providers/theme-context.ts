import { createContext } from "react";
import type { ThemeContextValue } from "@/features/theme/theme.types";

export const ThemeContext = createContext<ThemeContextValue | null>(null);
