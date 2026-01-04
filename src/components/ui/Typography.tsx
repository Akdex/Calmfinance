import { cn } from "@/src/lib/utils";
import { Text, TextProps } from "react-native";

interface TypographyProps extends TextProps {
  className?: string;
}

export function H1({ className, children, ...props }: TypographyProps) {
  return (
    <Text
      className={cn("text-4xl font-bold text-surface-light mb-2", className)}
      {...props}
    >
      {children}
    </Text>
  );
}

export function H2({ className, children, ...props }: TypographyProps) {
  return (
    <Text
      className={cn(
        "text-2xl font-semibold text-surface-light mb-2",
        className
      )}
      {...props}
    >
      {children}
    </Text>
  );
}

export function Subtitle({ className, children, ...props }: TypographyProps) {
  return (
    <Text
      className={cn("text-lg text-zinc-300 font-medium", className)}
      {...props}
    >
      {children}
    </Text>
  );
}

export function Body({ className, children, ...props }: TypographyProps) {
  return (
    <Text
      className={cn("text-base text-zinc-200 leading-6", className)}
      {...props}
    >
      {children}
    </Text>
  );
}

export function Caption({ className, children, ...props }: TypographyProps) {
  return (
    <Text className={cn("text-sm text-zinc-400", className)} {...props}>
      {children}
    </Text>
  );
}

export function Label({ className, children, ...props }: TypographyProps) {
  return (
    <Text
      className={cn(
        "text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1",
        className
      )}
      {...props}
    >
      {children}
    </Text>
  );
}
