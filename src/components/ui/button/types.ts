import { ReactNode } from "react";
import { BUTTON_VARIANTS } from "./enum";

export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: BUTTON_VARIANTS;
}
