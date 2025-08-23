import React, { useEffect, useRef } from "react";
import { Animated, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

type ProgressCircleProps = {
  progress: number; // 0 - 100
  width: number; // ancho del SVG
  height: number; // alto del SVG
  strokeWidth?: number; // grosor del trazo
  color?: string;
  backgroundColor?: string;
  style?: ViewStyle;
};

export default function ProgressCircle({
  progress,
  width,
  height,
  strokeWidth = 0.05,
  color = "#4caf50",
  backgroundColor = "#e0e0e0",
  style,
}: ProgressCircleProps) {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const radius = (width - strokeWidth) / 2;
  const circumference = Math.PI * radius;

  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  const d = `
    M ${strokeWidth / 2} ${height}
    A ${radius} ${radius} 0 0 1 ${width - strokeWidth / 2} ${height}
  `;

  const AnimatedPath = Animated.createAnimatedComponent(Path);

  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={style}
    >
      {/* Fondo */}
      <Path
        d={d}
        stroke={backgroundColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="transparent"
      />
      {/* Progreso */}
      <AnimatedPath
        d={d}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
      />
    </Svg>
  );
}
