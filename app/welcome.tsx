import { Body, H1 } from "@/src/components/ui/Typography";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  ArrowRight,
  BookOpen,
  Leaf,
  Shield,
  TrendingUp,
} from "lucide-react-native";
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleStart = () => {
    router.push("/(tabs)");
  };

  return (
    <View className="flex-1 bg-[#050505]">
      <StatusBar barStyle="light-content" />

      {/* Hero Section - 45vh */}
      <View className="h-[45vh] w-full relative">
        <ImageBackground
          source={require("@/assets/images/welcome-plant.png")}
          className="w-full h-full"
          resizeMode="cover"
        >
          {/* Gradient Overlay */}
          <LinearGradient
            colors={["transparent", "rgba(5, 5, 5, 0.4)", "#050505"]}
            locations={[0, 0.6, 1]}
            className="absolute inset-0"
          />

          {/* Floating Icon */}
          <View className="absolute bottom-6 left-6 z-20">
            <View className="p-3.5 rounded-2xl bg-[#121212]/60 border border-white/10 backdrop-blur-md items-center justify-center shadow-lg">
              <Leaf size={28} color="#2bee6c" />
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* Content Section */}
      <View
        className="flex-1 flex-col px-6 pt-2"
        style={{ paddingBottom: Math.max(insets.bottom, 24) + 16 }}
      >
        {/* Headline */}
        <View className="mb-10">
          <H1 className="text-[36px] font-bold text-white mb-3 leading-[1.1] tracking-tight text-left">
            Grow your{"\n"}
            <Body className="text-[#2bee6c] text-[36px] font-bold">
              confidence
            </Body>
          </H1>
          <Body className="text-gray-400 text-base font-medium leading-relaxed max-w-[90%]">
            Your companion for financial clarity. Build habits that last a
            lifetime.
          </Body>
        </View>

        {/* Feature Carousel */}
        <View className="mb-10">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="gap-4 pr-6"
            snapToInterval={220 + 16} // card width + gap
            decelerationRate="fast"
            className="overflow-visible"
          >
            <FeatureCard
              icon={<BookOpen size={24} color="#2bee6c" />}
              title="Bite-sized Lessons"
              text="Master your money with easy to understand guides."
            />
            <FeatureCard
              icon={<Shield size={24} color="#2bee6c" />}
              title="Safe Space"
              text="Plan your future without pressure or judgment."
            />
            <FeatureCard
              icon={<TrendingUp size={24} color="#2bee6c" />}
              title="Build Future"
              text="Take small steps today for a bigger tomorrow."
            />
          </ScrollView>
        </View>

        {/* Actions */}
        <View className="mt-auto gap-5">
          <TouchableOpacity
            onPress={handleStart}
            activeOpacity={0.9}
            className="w-full h-16 bg-[#2bee6c] rounded-2xl flex-row items-center justify-center shadow-lg shadow-[#2bee6c]/10"
          >
            <Body className="text-black font-bold text-lg tracking-wide mr-2">
              Start Your Journey
            </Body>
            <ArrowRight size={22} color="#000" strokeWidth={2.5} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleStart}
            className="w-full py-2 items-center"
          >
            <Body className="text-gray-400 font-medium text-sm">
              I already have an account
            </Body>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function FeatureCard({ icon, title, text }: any) {
  return (
    <View className="w-[220px] bg-[#121212] p-5 rounded-3xl border border-white/5 gap-4">
      <View className="w-12 h-12 rounded-2xl bg-[#1E1E1E] items-center justify-center shadow-sm">
        {icon}
      </View>
      <View>
        <Body className="text-white font-semibold text-base mb-1.5">
          {title}
        </Body>
        <Body className="text-gray-400 text-xs leading-5 font-medium">
          {text}
        </Body>
      </View>
    </View>
  );
}
