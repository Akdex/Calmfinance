import { Button } from "@/src/components/ui/Button";
import { Body, Caption, H1, H2 } from "@/src/components/ui/Typography";
import { useTransactionStore } from "@/src/store/useTransactionStore";
import {
  Calendar,
  Check,
  PlusCircle,
  Scan,
  Sparkles,
  Utensils,
  X,
} from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  Modal,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface AddTransactionModalProps {
  visible: boolean;
  onClose: () => void;
  initialType?: "income" | "expense";
}

export function AddTransactionModal({
  visible,
  onClose,
  initialType = "expense",
}: AddTransactionModalProps) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Food & Dining");
  const [type, setType] = useState<"income" | "expense">(initialType);

  // Update type when initialType changes or modal opens (useEffect might be needed if modal stays mounted)
  // However, simple useState init only runs once on mount. If the modal is kept mounted and only hidden/shown, we need useEffect or key.
  // A better way for React Native modals that are conditional rendered or hidden:
  // If `visible` is used to condition render, useState init works. If hidden via style, it doesn't.
  // `<Modal>` behavior: usually stays mounted. props change.
  // So I should use `useEffect` to sync `type` with `initialType` when `visible` becomes true?
  // Or just rely on the parent mounting/unmounting it.
  // Given current usage, let's keep it simple. But to be safe, I'll add a useEffect to reset form when visible changes to true.

  // Reset state when modal opens
  useEffect(() => {
    if (visible) {
      setType(initialType);
      setAmount("");
      setDescription("");
      setCategory(initialType === "income" ? "Salary" : "Food & Dining");
    }
  }, [visible, initialType]);

  const addTransaction = useTransactionStore((state) => state.addTransaction);

  const handleSave = () => {
    if (!amount || !description) return;
    addTransaction({
      id: Math.random().toString(36).substr(2, 9),
      amount: parseFloat(amount),
      description,
      category,
      type,
      date: new Date().toISOString(),
    });
    setAmount("");
    setDescription("");
    onClose();
  };

  const handleSaveAndNew = () => {
    if (!amount || !description) return;
    addTransaction({
      id: Math.random().toString(36).substr(2, 9),
      amount: parseFloat(amount),
      description,
      category,
      type,
      date: new Date().toISOString(),
    });
    setAmount("");
    setDescription("");
    // Don't close modal
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View className="flex-1 bg-background-dark">
        {/* Header */}
        <View className="flex-row justify-between items-start px-6 pt-6 pb-2">
          <View>
            <View className="bg-accent-indigo/15 self-start px-2 py-1 rounded-md mb-2">
              <Caption className="text-accent-indigo text-[10px] font-bold uppercase tracking-wider">
                New Entry
              </Caption>
            </View>
            <H1 className="text-3xl text-surface-light font-bold">
              Add {type === "income" ? "Income" : "Expense"}
            </H1>
            <Body className="text-zinc-500 text-sm max-w-[250px] leading-5">
              Let's detail this transaction step-by-step.
            </Body>
          </View>
          <TouchableOpacity
            onPress={onClose}
            className="w-10 h-10 rounded-full bg-surface-highlight border border-white/10 items-center justify-center active:bg-zinc-700"
          >
            <X size={20} color="#A1A1AA" />
          </TouchableOpacity>
        </View>
        <ScrollView
          className="flex-1 px-5 pt-6"
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          {/* AI Scan Receipt Card */}
          <TouchableOpacity className="mb-8 rounded-[2rem] p-6 flex-row items-center gap-4 bg-[#18181B] border border-white/5 overflow-hidden relative">
            {/* Glow Effect */}
            <View className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-3xl rounded-full pointer-events-none" />

            <View className="flex-1">
              <View className="flex-row items-center gap-2 mb-2">
                <Sparkles size={14} color="#EAB308" fill="#EAB308" />
                <Caption className="text-yellow-500 font-bold tracking-wider text-[10px] uppercase">
                  AI Auto-Fill
                </Caption>
              </View>
              <H2 className="text-white text-xl font-bold mb-1">
                Scan Receipt
              </H2>
              <Body className="text-zinc-400 text-xs leading-4 pr-4">
                Upload or snap a photo to extract details instantly.
              </Body>
            </View>

            <View className="w-12 h-12 rounded-2xl bg-zinc-800 items-center justify-center border border-white/10">
              <Scan size={20} color="white" />
            </View>
          </TouchableOpacity>

          {/* Step 1: Amount */}
          <View className="bg-surface-dark border border-white/5 rounded-4xl p-6 mb-6 relative overflow-hidden">
            <View className="absolute top-0 right-0 w-32 h-32 bg-accent-indigo opacity-10 blur-3xl rounded-full" />

            <View className="flex-row items-center gap-3 mb-2 z-10">
              <View className="w-8 h-8 rounded-full bg-accent-indigo items-center justify-center shadow-lg shadow-accent-indigo/20">
                <Body className="font-bold text-white text-sm">1</Body>
              </View>
              <H2 className="text-lg font-semibold text-surface-light mb-0">
                Total Amount
              </H2>
            </View>
            <Caption className="text-zinc-500 text-sm mb-6 pl-11">
              Enter the exact value shown on your receipt.
            </Caption>

            <View className="flex-col items-center bg-background-dark/50 rounded-2xl p-6 border border-white/5 mx-2">
              <View className="flex-row items-center justify-center w-full">
                <Body className="text-3xl font-medium text-zinc-500 mr-2">
                  $
                </Body>
                <TextInput
                  value={amount}
                  onChangeText={setAmount}
                  placeholder="0.00"
                  placeholderTextColor="#52525B"
                  keyboardType="decimal-pad"
                  className="text-5xl font-bold text-white text-center p-0 min-w-[100px]"
                  selectionColor="#6366F1"
                />
              </View>
            </View>

            <View className="mt-4 flex-row justify-center">
              <View className="bg-surface-highlight px-3 py-1 rounded-full border border-white/5">
                <Caption className="text-[10px] text-zinc-400">
                  USD - United States Dollar
                </Caption>
              </View>
            </View>
          </View>

          {/* Step 2: Category */}
          <View className="bg-surface-dark border border-white/5 rounded-4xl p-6 mb-6">
            <View className="flex-row items-center gap-3 mb-2">
              <View className="w-8 h-8 rounded-full bg-surface-highlight border border-white/5 items-center justify-center">
                <Body className="font-bold text-zinc-400 text-sm">2</Body>
              </View>
              <H2 className="text-lg font-semibold text-surface-light mb-0">
                Category
              </H2>
            </View>
            <Caption className="text-zinc-500 text-sm mb-6 pl-11">
              What kind of purchase was this?
            </Caption>

            <View className="flex-row gap-4 pl-2">
              <TouchableOpacity className="flex-1 bg-accent-indigo/10 border-2 border-accent-indigo rounded-2xl p-5 items-center justify-center gap-2 active:scale-95">
                <Utensils size={32} color="#6366F1" />
                <Body className="font-medium text-sm text-surface-light">
                  Food & Dining
                </Body>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-surface-highlight border border-white/5 rounded-2xl p-5 items-center justify-center gap-2 active:scale-95">
                <PlusCircle size={32} color="#52525B" />
                <Body className="font-medium text-sm text-zinc-400">
                  New Category
                </Body>
              </TouchableOpacity>
            </View>
          </View>

          {/* Step 3: Date */}
          <View className="bg-surface-dark border border-white/5 rounded-4xl p-6 mb-6">
            <View className="flex-row items-center gap-3 mb-2">
              <View className="w-8 h-8 rounded-full bg-surface-highlight border border-white/5 items-center justify-center">
                <Body className="font-bold text-zinc-400 text-sm">3</Body>
              </View>
              <H2 className="text-lg font-semibold text-surface-light mb-0">
                Date & Time
              </H2>
            </View>
            <Caption className="text-zinc-500 text-sm mb-6 pl-11">
              When did this transaction happen?
            </Caption>

            <TouchableOpacity className="flex-row items-center p-4 rounded-2xl bg-surface-highlight border border-white/5 active:border-zinc-500">
              <View className="w-12 h-12 rounded-xl bg-background-dark items-center justify-center mr-4">
                <Calendar size={24} color="#6366F1" />
              </View>
              <View className="flex-1">
                <Body className="text-surface-light font-medium text-lg">
                  Today,{" "}
                  {new Date().toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </Body>
                <Caption className="text-xs text-zinc-600">
                  Tap to change date
                </Caption>
              </View>
            </TouchableOpacity>
          </View>

          {/* Step 4: Notes/Desc */}
          <View className="bg-surface-dark border border-white/5 rounded-4xl p-6 mb-6">
            <View className="flex-row items-center gap-3 mb-2">
              <View className="w-8 h-8 rounded-full bg-surface-highlight border border-white/5 items-center justify-center">
                <Body className="font-bold text-zinc-400 text-sm">4</Body>
              </View>
              <H2 className="text-lg font-semibold text-surface-light mb-0">
                Description
              </H2>
            </View>
            <Caption className="text-zinc-500 text-sm mb-6 pl-11">
              Brief description of the expense.
            </Caption>
            <TextInput
              className="w-full bg-surface-highlight rounded-2xl p-4 text-surface-light border border-white/5"
              placeholder="e.g. Lunch at Cafe"
              placeholderTextColor="#52525B"
              value={description}
              onChangeText={setDescription}
            />
          </View>
        </ScrollView>

        {/* Footer */}
        <View className="absolute bottom-0 left-0 right-0 p-5 bg-background-dark/90 border-t border-white/5">
          <View className="flex-row gap-4">
            <Button
              label="Save & New"
              variant="outline"
              className="flex-1 py-4 rounded-full bg-surface-dark border border-white/5"
              onPress={handleSaveAndNew}
            />

            <TouchableOpacity
              onPress={handleSave}
              className="flex-[1.5] py-4 rounded-full bg-accent-indigo items-center justify-center flex-row gap-2 shadow-lg shadow-accent-indigo/30 active:opacity-90"
            >
              <Check size={20} color="white" />
              <Body className="text-white font-semibold">Save Expense</Body>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
