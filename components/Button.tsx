import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

interface ButtonProps {
  title?: string;
  onPress?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
  customClass?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  isLoading,
  disabled,
  variant = "primary",
  customClass,
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case "secondary":
        return "bg-gray-500";
      case "danger":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      className={`rounded-[8] font-lexenda-regular py-3 ${getButtonStyle()} ${customClass}`}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text className="text-white text-center font-lexenda-medium text-lg">{title}</Text>
      )}
    </TouchableOpacity>
  );
};
