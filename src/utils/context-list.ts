import { createContext } from "react";

export type ContextListCountType = {
  contextListCount: number;
  setContextListCount: (contextCartCount: number) => void;
};

export const ContextListCount = createContext<ContextListCountType>({
  contextListCount: 0,
  setContextListCount: () => {},
});
