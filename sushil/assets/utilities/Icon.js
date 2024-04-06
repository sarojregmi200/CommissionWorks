import { Text } from "react-native";
import * as Icons from "./index";

const Icon = ({ name, color, height = 10, width = 10 }) => {
  const Icon = Icons[name];

  if (!Icon) {
    return <Text>Icon not found</Text>;
  }

  return <Icon fill={color} height={height} width={width} />;
};

export default Icon;
