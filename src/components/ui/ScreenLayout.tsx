import { cn } from "@/src/lib/utils";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenLayoutProps extends ViewProps {
  scrollable?: boolean;
  withHeader?: boolean;
}

export function ScreenLayout({
  className,
  children,
  scrollable = true,
  withHeader = false,
  ...props
}: ScreenLayoutProps) {
  const Container = scrollable ? ScrollView : View;

  return (
    <SafeAreaView
      className="flex-1 bg-background-dark"
      edges={["top", "left", "right"]}
    >
      <StatusBar style="light" />
      <Container
        className={cn("flex-1 px-4", className)}
        contentContainerStyle={scrollable ? { paddingBottom: 100 } : undefined}
        {...props}
      >
        {children}
      </Container>
    </SafeAreaView>
  );
}
