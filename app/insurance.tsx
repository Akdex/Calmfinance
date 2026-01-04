import { Button } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import { ScreenLayout } from "@/src/components/ui/ScreenLayout";
import { Body, Caption, H1, H2 } from "@/src/components/ui/Typography";
import { useRouter } from "expo-router";
import {
  ArrowLeft,
  Bell,
  Car,
  CheckCircle,
  ChevronRight,
  HeartPulse,
  MessageCircle,
  Plus,
  Shield,
  Smartphone,
  Umbrella,
} from "lucide-react-native";
import { ScrollView, TouchableOpacity, View } from "react-native";

export default function InsuranceScreen() {
  const router = useRouter();

  return (
    <ScreenLayout scrollable>
      {/* Header */}
      <View className="flex-row justify-between items-center mt-6 mb-6 px-2">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity
            onPress={() => router.back()}
            className="h-10 w-10 rounded-full border border-white/10 items-center justify-center active:bg-white/10"
          >
            <ArrowLeft size={24} color="#A1A1AA" />
          </TouchableOpacity>
          <View>
            <Caption className="text-zinc-500 font-medium">Protection</Caption>
            <H2 className="text-xl font-bold mb-0">Insurance</H2>
          </View>
        </View>
        <TouchableOpacity className="h-10 w-10 rounded-full bg-surface-dark border border-white/5 items-center justify-center">
          <Bell size={20} color="#9CA3AF" />
        </TouchableOpacity>
      </View>

      {/* Protection Score Card */}
      <Card variant="neutral" className="p-6 relative overflow-hidden mb-8">
        <View className="absolute inset-0 bg-emerald-500/5" />
        <View className="flex-row justify-between items-start mb-6">
          <View>
            <Caption className="text-zinc-400 font-medium mb-1">
              Protection Score
            </Caption>
            <View className="flex-row items-baseline gap-1">
              <H1 className="text-3xl font-bold mb-0">84</H1>
              <Caption className="text-lg text-zinc-500 font-normal">
                /100
              </Caption>
            </View>
          </View>
          <View className="h-10 w-10 bg-emerald-500/20 rounded-full items-center justify-center">
            <Shield size={20} color="#10B981" />
          </View>
        </View>
        <View className="relative mb-4">
          <View className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
            <View className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 w-[84%] rounded-full" />
          </View>
        </View>
        <View className="flex-row items-center gap-2">
          <CheckCircle size={16} color="#10B981" />
          <Caption className="text-zinc-300 transform-none">
            You are well covered for emergencies.
          </Caption>
        </View>
      </Card>

      {/* Health Insurance */}
      <View className="mb-8">
        <View className="flex-row justify-between items-end mb-4 px-1">
          <H2 className="text-lg font-semibold mb-0">Health Insurance</H2>
          <TouchableOpacity>
            <Caption className="text-teal-500 font-medium">Manage</Caption>
          </TouchableOpacity>
        </View>
        <Card variant="neutral" className="p-5 active:scale-[0.98]">
          <View className="flex-row justify-between items-start mb-4">
            <View className="flex-row items-center gap-3">
              <View className="h-10 w-10 rounded-xl bg-blue-500/20 items-center justify-center">
                <HeartPulse size={20} color="#3B82F6" />
              </View>
              <View>
                <Body className="font-medium text-surface-light">
                  Care Supreme
                </Body>
                <Caption className="text-zinc-500 text-[10px]">
                  Policy #8839201
                </Caption>
              </View>
            </View>
            <View className="px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
              <Caption className="text-emerald-500 text-[10px] font-bold uppercase tracking-wider">
                Active
              </Caption>
            </View>
          </View>

          <View className="flex-row gap-4 mb-4">
            <View className="flex-1 p-3 bg-white/5 rounded-xl">
              <Caption className="text-[10px] uppercase font-bold text-zinc-500 mb-1">
                Cover Amount
              </Caption>
              <Body className="font-semibold text-zinc-200">$500,000</Body>
            </View>
            <View className="flex-1 p-3 bg-white/5 rounded-xl">
              <Caption className="text-[10px] uppercase font-bold text-zinc-500 mb-1">
                Renewal
              </Caption>
              <Body className="font-semibold text-zinc-200">Dec 12, 2024</Body>
            </View>
          </View>

          <Button
            variant="outline"
            label="Upload Health Card"
            className="w-full border-dashed border-zinc-700 text-zinc-400"
            icon={<Smartphone size={16} color="#A1A1AA" />}
          />
        </Card>
      </View>

      {/* Term Life Insurance */}
      <View className="mb-8">
        <H2 className="text-lg font-semibold mb-4 px-1">Term Life Insurance</H2>
        <View className="rounded-2xl p-6 relative overflow-hidden bg-zinc-900 border border-white/5">
          <View className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <View className="absolute bottom-0 left-0 -ml-10 -mb-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl pointer-events-none" />

          <View className="relative z-10">
            <View className="h-10 w-10 rounded-full bg-white/10 items-center justify-center mb-4 backdrop-blur-sm">
              <Umbrella size={20} color="#A5B4FC" />
            </View>
            <H2 className="text-lg font-semibold mb-2 text-white">
              Protect your family's future
            </H2>
            <Body className="text-zinc-400 text-sm leading-5 mb-6 opacity-90">
              Term insurance ensures your loved ones are financially secure even
              in your absence. It's a small step for peace of mind.
            </Body>

            <View className="flex-row gap-3">
              <TouchableOpacity className="flex-1 py-3 px-4 bg-white rounded-xl items-center justify-center">
                <Body className="text-black font-semibold text-sm">
                  Explore Plans
                </Body>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 py-3 px-4 bg-white/10 border border-white/10 rounded-xl items-center justify-center backdrop-blur-sm">
                <Body className="text-white font-semibold text-sm">
                  Learn More
                </Body>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Vehicle Insurance */}
      <View className="mb-8">
        <H2 className="text-lg font-semibold mb-4 px-1">Vehicle Insurance</H2>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="overflow-visible"
        >
          <Card
            variant="neutral"
            className="w-48 p-4 mr-4 flex-col justify-between"
          >
            <View>
              <View className="h-8 w-8 rounded-lg bg-orange-500/20 items-center justify-center mb-3">
                <Car size={16} color="#F97316" />
              </View>
              <Caption className="text-zinc-500 text-xs mb-1">
                Tesla Model 3
              </Caption>
              <Body className="font-semibold text-white">
                Expires in 20 days
              </Body>
            </View>
            <View className="mt-3 w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
              <View className="h-full bg-orange-500 w-3/4 rounded-full" />
            </View>
          </Card>

          <TouchableOpacity className="w-40 bg-transparent p-4 rounded-3xl border border-dashed border-zinc-700 flex items-center justify-center gap-2 active:bg-white/5">
            <View className="h-8 w-8 rounded-full bg-zinc-800 items-center justify-center">
              <Plus size={16} color="#A1A1AA" />
            </View>
            <Caption className="font-medium text-zinc-500">Add Vehicle</Caption>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Help Section */}
      <TouchableOpacity className="mb-32 bg-purple-500/10 rounded-2xl p-4 flex-row items-center gap-4 border border-purple-500/20 active:bg-purple-500/20">
        <View className="h-10 w-10 rounded-full bg-purple-500/20 items-center justify-center">
          <MessageCircle size={20} color="#C084FC" />
        </View>
        <View className="flex-1">
          <Body className="text-sm font-medium text-white mb-0.5">
            Need help understanding?
          </Body>
          <Caption className="text-zinc-400 text-xs">
            Chat with our insurance advisor.
          </Caption>
        </View>
        <ChevronRight size={16} color="#A1A1AA" />
      </TouchableOpacity>
    </ScreenLayout>
  );
}
