import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "cr:focus-visible:border-ring cr:aria-invalid:border-destructive cr:inline-flex cr:shrink-0 cr:items-center cr:justify-center cr:gap-2 cr:rounded cr:border cr:text-sm cr:font-medium cr:whitespace-nowrap cr:transition-all cr:outline-none cr:focus-visible:ring-[3px] cr:disabled:pointer-events-none cr:disabled:border-gray-100 cr:disabled:bg-gray-100 cr:disabled:text-gray-300 cr:disabled:shadow-none cr:disabled:select-none cr:aria-invalid:ring-error-50 cr:[&_svg]:pointer-events-none cr:[&_svg]:shrink-0 cr:[&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: cn(
          "cr:border-transparent cr:bg-brand-400 cr:text-white cr:hover:bg-brand-500 cr:focus-visible:bg-brand-500 cr:focus-visible:ring-brand-25",
          "cr:data-[destructive=true]:bg-error-600 cr:data-[destructive=true]:hover:bg-error-700 cr:data-[destructive=true]:focus-visible:ring-error-100 cr:data-[destructive=true]:disabled:bg-error-200 cr:data-[destructive=true]:disabled:text-white"
        ), // -> primary
        secondary: cn(
          "cr:border-transparent cr:bg-brand-25 cr:text-brand-400 cr:hover:bg-brand-50 cr:focus-visible:text-brand-500 cr:focus-visible:ring-transparent",
          "cr:data-[destructive=true]:bg-error-50 cr:data-[destructive=true]:text-error-700 cr:data-[destructive=true]:hover:bg-error-100 cr:data-[destructive=true]:hover:text-error-700 cr:data-[destructive=true]:focus-visible:ring-error-100 cr:data-[destructive=true]:disabled:border-error-25 cr:data-[destructive=true]:disabled:bg-error-25 cr:data-[destructive=true]:disabled:text-error-300"
        ),
        outline: cn(
          "cr:border-gray-300 cr:bg-transparent cr:text-gray-700 cr:hover:bg-gray-100 cr:hover:text-gray-800 cr:focus-visible:ring-gray-100 cr:disabled:bg-transparent",
          "cr:data-[destructive=true]:border-error-300 cr:data-[destructive=true]:text-error-700 cr:data-[destructive=true]:hover:bg-error-50 cr:data-[destructive=true]:hover:text-error-800 cr:data-[destructive=true]:focus-visible:ring-error-100 cr:data-[destructive=true]:disabled:border-error-200 cr:data-[destructive=true]:disabled:text-error-300"
        ),
        tertiary: cn(
          "cr:border-transparent cr:bg-transparent cr:text-brand-400 cr:hover:bg-brand-25 cr:focus-visible:bg-brand-50 cr:focus-visible:text-brand-500 cr:focus-visible:ring-transparent cr:disabled:border-transparent cr:disabled:bg-transparent",
          "cr:data-[destructive=true]:text-error-700 cr:data-[destructive=true]:hover:bg-error-50 cr:data-[destructive=true]:focus-visible:bg-inherit cr:data-[destructive=true]:focus-visible:ring-error-100 cr:data-[destructive=true]:disabled:text-error-300"
        ),
        ghost:
          "cr:bg-transparent cr:text-gray-500 cr:hover:bg-gray-50 cr:hover:text-gray-600 cr:focus-visible:text-brand-500 cr:focus-visible:ring-transparent cr:disabled:border-transparent cr:disabled:bg-transparent",
        link: "cr:cursor-pointer cr:rounded-none! cr:border-none cr:p-0! cr:text-brand-400 cr:hover:text-brand-500 cr:focus-visible:text-brand-400 cr:focus-visible:ring-transparent cr:disabled:border-transparent cr:disabled:bg-transparent",
        "link-neutral":
          "cr:cursor-pointer cr:rounded-none! cr:border-none cr:p-0! cr:text-gray-500 cr:hover:text-gray-600 cr:focus-visible:text-gray-500 cr:focus-visible:ring-transparent cr:disabled:border-transparent cr:disabled:bg-transparent",
      },
      size: {
        sm: "cr:px-3.5 cr:py-2 cr:text-sm",
        default: "cr:px-4 cr:py-2.5 cr:text-sm", // md (default)
        lg: "cr:px-[1.125rem] cr:py-2.5 cr:text-base",
        xl: "cr:px-5 cr:py-3 cr:text-base",
        "2xl": "cr:px-6.5 cr:py-4 cr:text-lg",
        "icon-sm": "cr:size-9 cr:place-items-center",
        icon: "cr:size-10 cr:place-items-center", // icon-md (default)
        "icon-lg": "cr:size-11 cr:place-items-center",
        "icon-xl": "cr:size-12 cr:place-items-center",
        "icon-2xl":
          "cr:size-14 cr:place-items-center cr:[&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
export type DotVariant =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "neutral";
export default buttonVariants;
