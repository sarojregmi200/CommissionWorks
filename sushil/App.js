import { StatusBar, View } from "react-native";
import styles from "./styles";
import { MainDashboard } from "./components";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={"blue"} />
      <MainDashboard
        userName="Pulsar Aashis"
        location="Butwal 13, devinagar"
        expireDate="2081-03-20"
        charge={20}
        speed={50}
        vehicleInfo={[
          {
            name: "Ignition",
            icon: "thunder",
            status: "Off",
            active: false,
          },

          {
            name: "GPS",
            icon: "gps",
            status: "On",
            active: true,
          },
          {
            name: "Network Status",
            icon: "network",
            status: "online",
            active: true,
          },
        ]}
        status={[
          { name: "Server Time", value: "04-04-2042 13:52" },
          { name: "Device Time", value: "04-04-2042 13:52" },
        ]}
      />
    </>
  );
}
