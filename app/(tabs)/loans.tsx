import { Card } from "@/src/components/ui/Card";
import { ScreenLayout } from "@/src/components/ui/ScreenLayout";
import { Body, Caption, H1, H2 } from "@/src/components/ui/Typography";
import { cn } from "@/src/lib/utils";
import { Bell, PlusCircle, Sparkles, Zap } from "lucide-react-native";
import { Image, TouchableOpacity, View } from "react-native";

export default function SubscriptionsScreen() {
  return (
    <ScreenLayout scrollable>
      {/* Header */}
      <View className="flex-row justify-between items-center mt-6 mb-8">
        <View className="flex-row items-center gap-3">
          <View className="h-10 w-10 rounded-full overflow-hidden border border-zinc-700 bg-zinc-800">
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=32" }}
              className="w-full h-full"
            />
          </View>
          <View>
            <Caption className="text-zinc-500 font-medium text-xs">
              Welcome back,
            </Caption>
            <H2 className="text-lg font-bold text-surface-light mb-0">Sarah</H2>
          </View>
        </View>
        <TouchableOpacity className="w-10 h-10 rounded-full bg-surface-dark border border-white/5 items-center justify-center">
          <Bell size={20} color="#9CA3AF" />
        </TouchableOpacity>
      </View>

      {/* Total Monthly Cost Card */}
      <Card
        variant="neutral"
        className="p-6 relative overflow-hidden bg-surface-dark border-white/5 shadow-lg rounded-[2rem]"
      >
        <View className="absolute -top-10 -right-10 w-48 h-48 bg-accent-lavender opacity-20 rounded-full blur-[60px] pointer-events-none" />

        <View className="z-10 relative">
          <View className="flex-row justify-between items-start mb-8">
            <View>
              <Caption className="text-zinc-400 text-sm font-medium mb-1">
                Total Monthly Cost
              </Caption>
              <H1 className="text-4xl font-bold text-surface-light">$142.90</H1>
            </View>
            <View className="bg-accent-lavender px-3 py-1.5 rounded-xl shadow-sm">
              <Caption className="text-black font-bold text-xs">
                +$12.00
              </Caption>
            </View>
          </View>

          <View className="flex-row gap-8 mt-2">
            <View className="flex-1">
              <Caption className="text-xs text-zinc-500 font-medium mb-1">
                Yearly Forecast
              </Caption>
              <Body className="font-bold text-lg text-surface-light">
                $1,714.80
              </Body>
            </View>
            <View className="w-px bg-white/10 my-1" />
            <View className="flex-1">
              <Caption className="text-xs text-zinc-500 font-medium mb-1">
                Active Subs
              </Caption>
              <Body className="font-bold text-lg text-surface-light">
                8 Services
              </Body>
            </View>
          </View>
        </View>
      </Card>

      {/* Hidden Subscription Alert */}
      <View className="mb-8 rounded-[2rem] p-5 flex-row items-center gap-4 border border-zinc-800 shadow-md bg-[#18181B]">
        <View className="w-12 h-12 rounded-full bg-blue-400 items-center justify-center relative overflow-hidden">
          {/* Gradient Simulation */}
          <View className="absolute w-full h-full bg-purple-400 opacity-60 rounded-full -bottom-2 -right-2" />
          <Sparkles size={18} color="white" fill="white" className="z-10" />
        </View>
        <View className="flex-1 pr-2">
          <Body className="text-white text-base font-bold mb-0.5">
            Hidden Subscription?
          </Body>
          <Caption className="text-zinc-400 text-xs leading-4">
            We detected a recurring payment to "Gym Ultra".
          </Caption>
        </View>
        <TouchableOpacity>
          <Body className="text-[#D4B6FF] font-bold text-sm">Review</Body>
        </TouchableOpacity>
      </View>

      {/* Your Subscriptions List */}
      <View className="flex-row justify-between items-center mb-4 px-1">
        <H2 className="text-lg font-semibold text-surface-light mb-0">
          Your Subscriptions
        </H2>
        <TouchableOpacity>
          <Caption className="text-xs text-zinc-500">See all</Caption>
        </TouchableOpacity>
      </View>

      <View className="gap-3 mb-6">
        <SubscriptionItem
          logo="N"
          logoColor="text-black"
          bg="bg-white"
          name="Notion Personal"
          price="$48.00"
          detail="Yearly • Dec 2024"
          badge="Yearly"
          badgeColor="text-[#D4B6FF] bg-[#D4B6FF]/10"
        />
        <SubscriptionItem
          logo="N"
          logoColor="text-white"
          bg="bg-[#E50914]"
          name="Netflix Premium"
          price="$19.99"
          detail="Monthly • Due in 2 days"
          badge="Soon"
          badgeColor="text-orange-400 bg-orange-900/30"
        />
        <SubscriptionItem
          icon={<Zap size={20} color="black" fill="black" />}
          bg="bg-[#1DB954]"
          name="Spotify Duo"
          price="$14.99"
          detail="Monthly • 12th Oct"
          badge="Auto-pay"
          badgeColor="text-zinc-400 bg-zinc-800"
        />
        <SubscriptionItem
          logo="Cr"
          logoColor="text-white"
          bg="bg-[#FF0000]"
          name="Adobe Creative Cloud"
          price="$54.99"
          detail="Monthly • 15th Oct"
        />
      </View>

      <TouchableOpacity className="mb-32 border border-dashed border-zinc-700 rounded-2xl p-4 flex-row items-center justify-center gap-2 active:bg-white/5">
        <PlusCircle size={20} color="#A1A1AA" />
        <Body className="text-zinc-400 font-medium">
          Add Custom Subscription
        </Body>
      </TouchableOpacity>
    </ScreenLayout>
  );
}

function SubscriptionItem({
  logo,
  logoColor,
  bg,
  border,
  icon,
  name,
  price,
  detail,
  badge,
  badgeColor,
}: any) {
  return (
    <TouchableOpacity className="bg-[#18181B] rounded-[1.5rem] p-4 flex-row items-center gap-4 active:bg-zinc-800">
      <View
        className={cn(
          "w-12 h-12 rounded-xl items-center justify-center shrink-0",
          bg,
          border && "border",
          border
        )}
      >
        {icon ? (
          icon
        ) : (
          <Body className={cn("font-bold text-xl", logoColor)}>{logo}</Body>
        )}
      </View>
      <View className="flex-1">
        <View className="flex-row justify-between items-center mb-0.5">
          <Body
            className="font-bold text-base text-white flex-1 mr-2"
            numberOfLines={1}
          >
            {name}
          </Body>
          <Body className="font-bold text-base text-white">{price}</Body>
        </View>
        <View className="flex-row justify-between items-center">
          <Caption className="text-xs text-zinc-500 font-medium">
            {detail}
          </Caption>
          {badge && (
            <View className={cn("px-2 py-0.5 rounded-md", badgeColor)}>
              <Caption
                className={cn(
                  "text-[10px] font-bold tracking-wide",
                  badgeColor?.split(" ")[0]
                )}
              >
                {badge}
              </Caption>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
