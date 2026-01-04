import { cn } from "@/src/lib/utils";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  className?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <View className="mb-4">
      {label && (
        <Text className="text-zinc-400 text-sm font-medium mb-1.5">
          {label}
        </Text>
      )}
      <TextInput
        className={cn(
          "bg-zinc-900 border border-zinc-700 text-white rounded-xl px-4 py-3 text-base",
          "focus:border-primary",
          error && "border-red-500",
          className
        )}
        placeholderTextColor="#52525b"
        {...props}
      />
      {error && <Text className="text-red-400 text-xs mt-1">{error}</Text>}
    </View>
  );
}
