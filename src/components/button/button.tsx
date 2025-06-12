import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import buttonVariants, {
  type ButtonVariants,
  type DotVariant,
} from "./button.variants";
import { cn } from "@/utils/cn";
import { DotIcon } from "../icons";

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    ButtonVariants {
  asChild?: boolean;
  dotVariant?: DotVariant;
  dotPosition?: "left" | "right";
  destructive?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  dotPosition,
  dotVariant = "default",
  destructive,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const dot = (
    <DotIcon
      className={cn(
        "cr:pointer-events-none cr:size-2! cr:border cr:border-transparent cr:p-0!",
        props.disabled && "text-current!",
        {
          "cr:text-current": dotVariant === "default",
          "cr:text-warning-500": dotVariant === "warning",
          "cr:text-success-500": dotVariant === "success",
          "cr:text-error-500": dotVariant === "error",
          "cr:text-gray-500": dotVariant === "neutral",
        }
      )}
    />
  );

  return (
    <Comp
      data-slot="button"
      data-destructive={destructive ? "true" : "false"}
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {dotPosition === "left" && dot}
      {children}
      {dotPosition === "right" && dot}
    </Comp>
  );
}
