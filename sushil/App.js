import {
  Dimensions,
  Pressable,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import {
  AdvancedReports,
  CustomButton,
  DailySummarySection,
  InfoScreen,
  MainDashboard,
  TripsCard,
} from "./components";
import { colors } from "./styles";

export default function App() {
  return (
    <ScrollView>
      <StatusBar backgroundColor={"blue"} />
      <MainDashboard
        userName="Pulsar Aashis"
        location="Butwal 13, devinagar"
        userOnline={true}
        expireDate="2081-03-20"
        charge={20}
        speed={50}
        vehicleInfo={[
          {
            name: "Ignition",
            icon: "bolt",
            status: "Off",
            active: false,
          },
          {
            name: "GPS",
            icon: "location-arrow",
            status: "On",
            active: true,
          },
          {
            name: "Network Status",
            icon: "wifi",
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
          marginTop: 10,
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
          { title: "Top Speed", value: "61 km/h", icon: "speedometer" },
          { title: "Avg. Speed", value: "18 km/h", icon: "speedometer-medium" },
          { title: "Route Length", value: "13 km/h", icon: "ruler" },
          { title: "Fuel Consumption", value: "0.5 liters", icon: "fuel" },
          {
            title: "Route Start",
            value: " 05:51 AM",
            icon: "map-marker-path",
          },
          {
            title: "Route end",
            value: " 05:51 AM",
            icon: "map-marker-path",
          },
          { title: "Trip Count", value: "6", icon: "routes-clock" },
          {
            title: "Move Duration",
            value: "1hr 21 min",
            icon: "map-clock-outline",
          },
          { title: "Stop Count ", value: "9", icon: "clock-alert-outline" },
          {
            title: "Stop Duration ",
            value: "3hr 26min",
            icon: "bus-clock",
          },
        ]}
      />
      <AdvancedReports
        items={[
          { title: "Trips", icon: "routes", onPress: () => {} },
          { title: "Route", icon: "map-marker-path", onPress: () => {} },
          { title: "Playback", icon: "history", onPress: () => {} },
          { title: "Info", icon: "information-variant", onPress: () => {} },
          { title: "Summary", icon: "chart-bar", onPress: () => {} },
        ]}
      />

      <InfoScreen
        userName={"Pulsar Aashis"}
        location={"Butwal 13, devinagar"}
        userOnline={true}
        expireDate={"2081-03-20"}
        charge={20}
        speed={50}
        vehicleInfo={[
          {
            name: "Device Type",
            icon: "motorbike",
            value: "Pulsar",
          },
          {
            name: "Latitude",
            icon: "latitude",
            value: "27.6819",
          },
          {
            name: "Longitude",
            icon: "longitude",
            value: "27.6819",
          },
          {
            name: "Speed",
            icon: "speedometer",
            value: "61 km/h",
          },
        ]}
        otherInfo={[
          {
            title: "status",
            value: "online",
          },
          {
            title: "Ingition",
            value: "off",
          },
          {
            title: "charge",
            value: "true",
          },
          {
            title: "Server Time",
            value: "04-04-2042 13:52",
          },
          {
            title: "Device Time",
            value: "04-04-2042 13:52",
          },
        ]}
      />
      <TripsCard
        startTime={"05:51 AM"}
        endTime={"05:51 AM"}
        startLocation={"Butwal 11 devinagar"}
        endLocation={"Butwal 10 shantinagar"}
        distance={"13 km"}
        duration={"1 hr 21 min"}
        maxSpeed={"61 km/h"}
      />
    </ScrollView>
  );
}
