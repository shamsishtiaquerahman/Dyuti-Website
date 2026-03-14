import { createContext } from "react";
import type { LanguageContextValue } from "@/features/language/language.types";

export const LanguageContext = createContext<LanguageContextValue | null>(null);
