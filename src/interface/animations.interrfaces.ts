import { Variants } from "framer-motion";

export type TAnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string | undefined;
  animateVariants?: Variants;
};