import { Tabs } from "expo-router";
import { Banknote, Home, Landmark, TrendingUp } from "lucide-react-native";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/haptic-tab";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#D4FF9D", // Primary Lime
        tabBarInactiveTintColor: "#6B7280", // Gray 500
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            backgroundColor: "rgba(23, 23, 23, 0.9)", // surface-dark with opacity
            borderTopWidth: 0,
            elevation: 0,
            height: 80,
            paddingBottom: 20,
            // Blur effect is usually handled by native-blur-view or layout
          },
          default: {
            backgroundColor: "#161616",
            borderTopColor: "#27272a",
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="expenses"
        options={{
          title: "Expenses",
          tabBarIcon: ({ color }) => <Banknote size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="loans"
        options={{
          title: "Loans",
          tabBarIcon: ({ color }) => <Landmark size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="savings"
        options={{
          title: "Invest",
          tabBarIcon: ({ color }) => <TrendingUp size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
