import { StatusBar, View } from "react-native";
import { CustomButton, DailySummarySection, MainDashboard } from "./components";
import { colors } from "./styles";

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

      <View
        style={{
          padding: 10,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          columnGap: 10,
          marginTop: 20,
        }}
      >
        <CustomButton
          title="Commands"
          onPress={() => {}}
          color={"white"}
          bg={colors["primary"]}
        />
        <CustomButton
          title="Reports"
          onPress={() => {}}
          bg={colors["gray-200"]}
          color={colors["gray-600"]}
        />
      </View>

      <DailySummarySection
        items={[
          { title: "Top Speed", value: "61 km/h", icon: "topSpeed" },
          { title: "Avg. Speed", value: "18 km/h", icon: "avgSpeed" },
          { title: "Route Length", value: "13 km/h", icon: "routeLength" },
          { title: "Fuel Consumption", value: "0.5 liters", icon: "fuel" },
          {
            title: "Route Start",
            value: " 05:51 AM",
            icon: "routeStart",
          },
          {
            title: "Route end",
            value: " 05:51 AM",
            icon: "routeEnd",
          },
          { title: "Trip Count", value: "6", icon: "routeStart" },
          { title: "Move Duration", value: "1hr 21 min", icon: "moveDuration" },
          { title: "Stop Count ", value: "9", icon: "stopCount" },
          { title: "Stop Duration ", value: "3hr 26min", icon: "stopDuration" },
        ]}
      />
    </>
  );
}
