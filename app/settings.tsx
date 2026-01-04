import { Card } from "@/src/components/ui/Card";
import { ScreenLayout } from "@/src/components/ui/ScreenLayout";
import { Body, Caption, H2 } from "@/src/components/ui/Typography";
import { useSettingsStore } from "@/src/store/useSettingsStore";
import { useRouter } from "expo-router";
import {
  Brain,
  ChevronLeft,
  Edit2,
  Key,
  Lightbulb,
  MessageSquare,
  Sparkles,
  Zap,
} from "lucide-react-native";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

export default function AISettingsScreen() {
  const router = useRouter();
  const { theme } = useSettingsStore(); // Assuming we might toggle theme here too
  const [openAIKey, setOpenAIKey] = useState("sk-proj-1234567890");

  return (
    <ScreenLayout scrollable>
      {/* Header */}
      <View className="flex-row justify-between items-center mt-6 mb-6">
        <TouchableOpacity
          onPress={() => router.back()}
          className="h-10 w-10 rounded-full bg-surface-dark border border-white/5 items-center justify-center active:bg-zinc-800"
        >
          <ChevronLeft size={24} color="#A1A1AA" />
        </TouchableOpacity>
        <H2 className="text-lg font-semibold mb-0">AI Settings</H2>
        <TouchableOpacity>
          <Body className="text-primary font-bold text-sm">Save</Body>
        </TouchableOpacity>
      </View>

      {/* Hero Card: BYOK */}
      <Card
        variant="neutral"
        className="p-6 relative overflow-hidden bg-surface-dark border-blue-500/20 mb-8"
      >
        <View className="absolute -top-16 -right-16 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl pointer-events-none" />
        <View className="relative z-10">
          <View className="flex-row items-center gap-3 mb-2">
            <Brain size={32} color="#10B981" />
            <H2 className="text-xl font-bold mb-0 text-white">
              Bring Your Own Key
            </H2>
          </View>
          <Body className="text-zinc-400 text-sm leading-5 mb-4">
            Enable advanced financial analysis by connecting your preferred AI
            providers.
          </Body>

          <View className="flex-row items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
            <Lightbulb size={20} color="#EAB308" className="mt-0.5" />
            <View className="flex-1">
              <Body className="font-semibold text-zinc-200 text-xs mb-1">
                Using your own AI credits
              </Body>
              <Caption className="text-zinc-500 text-[10px] leading-4">
                Without keys, the app runs on basic logic with limited insights.
              </Caption>
            </View>
          </View>
        </View>
      </Card>

      {/* Provider Keys Section */}
      <View className="mb-8 animate-fade-in delay-100">
        <Caption className="mb-3 ml-2 uppercase tracking-wider font-bold text-zinc-500 text-xs">
          Provider Keys
        </Caption>
        <View className="bg-surface-dark rounded-3xl overflow-hidden border border-white/5">
          {/* OpenAI */}
          <View className="p-4 border-b border-white/5 gap-3">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-white/10 items-center justify-center">
                  <Sparkles size={14} color="white" />
                </View>
                <Body className="font-medium text-surface-light">
                  OpenAI (ChatGPT)
                </Body>
              </View>
              <View className="bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <Caption className="text-emerald-500 text-[10px] font-bold">
                  Connected
                </Caption>
              </View>
            </View>
            <View className="relative">
              <TextInput
                value={openAIKey}
                secureTextEntry
                editable={false}
                className="w-full bg-black/20 rounded-xl py-3 pl-4 pr-10 text-sm text-zinc-400 font-medium border border-white/5"
              />
              <TouchableOpacity className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center">
                <Edit2 size={14} color="#71717A" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Google Gemini */}
          <View className="p-4 border-b border-white/5 gap-3">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-blue-500/20 items-center justify-center">
                  <Zap size={14} color="#3B82F6" />
                </View>
                <Body className="font-medium text-surface-light">
                  Google Gemini
                </Body>
              </View>
              <TouchableOpacity className="bg-white/5 px-3 py-1.5 rounded-full border border-white/10 active:bg-white/10">
                <Caption className="text-zinc-400 text-xs font-semibold">
                  Add Key
                </Caption>
              </TouchableOpacity>
            </View>
          </View>

          {/* Perplexity AI */}
          <View className="p-4 gap-3">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="w-8 h-8 rounded-full bg-zinc-700 items-center justify-center">
                  <Body className="font-serif font-bold text-white text-xs">
                    P
                  </Body>
                </View>
                <Body className="font-medium text-surface-light">
                  Perplexity AI
                </Body>
              </View>
              <TouchableOpacity className="bg-white/5 px-3 py-1.5 rounded-full border border-white/10 active:bg-white/10">
                <Caption className="text-zinc-400 text-xs font-semibold">
                  Add Key
                </Caption>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* AI Task Routing */}
      <View className="mb-12 animate-fade-in delay-200">
        <Caption className="mb-3 ml-2 uppercase tracking-wider font-bold text-zinc-500 text-xs">
          AI Task Routing
        </Caption>
        <View className="bg-surface-dark rounded-3xl overflow-hidden border border-white/5">
          {/* Extraction */}
          <View className="p-4 border-b border-white/5 flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <View className="p-2 rounded-lg bg-indigo-500/20">
                <Key size={18} color="#818CF8" />
              </View>
              <View>
                <Body className="text-sm font-medium text-surface-light">
                  Extraction
                </Body>
                <Caption className="text-[10px] text-zinc-500">
                  Receipt data parsing
                </Caption>
              </View>
            </View>
            <View className="flex-row items-center gap-2">
              <Body className="text-zinc-400 text-sm">ChatGPT-4o</Body>
              <ChevronLeft size={16} color="#52525B" className="-rotate-90" />
            </View>
          </View>

          {/* Categorization */}
          <View className="p-4 border-b border-white/5 flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <View className="p-2 rounded-lg bg-pink-500/20">
                <MessageSquare size={18} color="#F472B6" />
              </View>
              <View>
                <Body className="text-sm font-medium text-surface-light">
                  Categorization
                </Body>
                <Caption className="text-[10px] text-zinc-500">
                  Tag transactions
                </Caption>
              </View>
            </View>
            <View className="flex-row items-center gap-2">
              <Body className="text-zinc-400 text-sm">Gemini Flash</Body>
              <ChevronLeft size={16} color="#52525B" className="-rotate-90" />
            </View>
          </View>

          {/* Insights */}
          <View className="p-4 flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <View className="p-2 rounded-lg bg-teal-500/20">
                <Brain size={18} color="#2DD4BF" />
              </View>
              <View>
                <Body className="text-sm font-medium text-surface-light">
                  Insights
                </Body>
                <Caption className="text-[10px] text-zinc-500">
                  Monthly summaries
                </Caption>
              </View>
            </View>
            <View className="flex-row items-center gap-2">
              <Body className="text-zinc-400 text-sm">ChatGPT-4o</Body>
              <ChevronLeft size={16} color="#52525B" className="-rotate-90" />
            </View>
          </View>
        </View>

        <Caption className="mt-3 text-center text-zinc-500 px-4 leading-4">
          Extraction and categorization work best with faster models. Insights
          require more reasoning capabilities.
        </Caption>
      </View>
    </ScreenLayout>
  );
}
