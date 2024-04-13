// All the styles in this project are present in this file
//

import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

// generate using the tailwind css
export const colors = {
  "gray-50": "#f9fafb", // selected gray color
  "gray-100": "#f3f4f6",
  "gray-200": "#e5e7eb",
  "gray-300": "#d1d5db",
  "gray-400": "#9ca3af",
  "gray-500": "#6b7280",
  "gray-600": "#4b5563",
  "gray-700": "#374151",
  "gray-800": "#1f2937",
  "gray-900": "#111827",
  "blue-100": "#dbeafe",
  "blue-200": "#bfdbfe",
  "blue-300": "#93c5fd",
  "blue-400": "#60a5fa",
  "blue-500": "#3b82f6",
  "blue-600": "#2563eb",
  "blue-700": "#1d4ed8",
  "blue-800": "#1e40af",
  "blue-900": "#1e3a8a",
  "green-100": "#d1fae5",
  "green-200": "#a7f3d0",
  "green-300": "#6ee7b7",
  "green-400": "#34d399",
  "green-500": "#10b981",
  "green-600": "#059669",
  "green-700": "#047857",
  "green-800": "#065f46",
  "green-900": "#064e3b",
  primary: "#603CC7",
  "primary-light": "#603cc775",
};

export const dashboardStyles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get("screen").width - 10,
    padding: 10,
    paddingVertical: 20,
    backgroundColor: colors["gray-50"],
    borderRadius: 10,
    marginHorizontal: 5,
    elevation: 10,
  },
  firstRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatar: {
    position: "relative",
    borderRadius: 50,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors["gray-300"],
    borderWidth: 2,
  },
  speedIndicator: {
    position: "absolute",
    top: 0,
    right: -(100 - 50) / 2, // so that it is in the middle
    width: 50,
    height: 50,
    padding: 5,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: colors["gray-50"],
    borderColor: colors["primary-light"],
    borderWidth: 1,
  },
  speed: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors["primary"],
  },
  speedUnit: {
    fontSize: 10,
    color: colors["gray-500"],
    fontWeight: "normal",
  },

  driverInfo: {
    marginLeft: 10 + 50 / 2, // 50 is the width of speed indicator and it is in center
  },
  activeStatus: {
    height: 10,
    width: 10,
    borderRadius: 50,
    backgroundColor: colors["green-600"],
    marginLeft: 5,
  },
  userWithStatus: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors["gray-600"],
  },
  location: {
    color: colors["gray-400"],
  },
  expireDate: {
    color: colors["gray-400"],
  },
  charge: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  chargeNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors["primary"],
  },
  statusContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 20,
  },
  status: {
    flexDirection: "row",
  },
  circleIcon: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: colors["gray-300"],
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: {
    marginLeft: 5,
  },
  statusTextTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: colors["gray-400"],
  },
  statusTextStatus: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors["gray-600"],
  },
  secondRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  secondRowStatus: {
    borderRightColor: colors["gray-300"],
    flex: 1,
  },
  secondRowStatusTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: colors["gray-400"],
  },
  secondRowStatusValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors["gray-600"],
  },
});

export const dailySummaryStyles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    columnGap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors["gray-600"],
  },
  mainContainer: {
    width: "100%",
    marginTop: 10,
  },
  itemsContainer: {
    flexDirection: "row",
    padding: 10,
    flexWrap: "wrap",
    width: "100%",
    paddingVertical: 20,
    gap: 5,
  },
  itemContainer: {
    width: (Dimensions.get("screen").width - 25) / 2,
    padding: 10,
    backgroundColor: colors["gray-50"],
    borderRadius: 10,
  },
  itemTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "normal",
    color: colors["gray-400"],
  },
  itemValue: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: colors["gray-600"],
  },
});

export const buttonStyles = StyleSheet.create({
  mainButton: {
    flex: 1,
    height: 50,
    backgroundColor: colors["primary"],
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "medium",
  },
});

export const reportStyles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    padding: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors["gray-600"],
    marginLeft: 10,
  },
  itemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginTop: 10,
  },
  mainButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: (Dimensions.get("screen").width - 25) / 2,
    backgroundColor: colors["gray-100"],
    borderRadius: 10,
    padding: 10,
    height: 50,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: colors["gray-600"],
    marginLeft: 10,
  },
});

export const tripStyles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get("screen").width - 10,
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    elevation: 10,
  },

  firstRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: colors["gray-300"],
  },
  firstCol: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 20,
    position: "relative",
    paddingVertical: 10,
  },

  greenDot: {
    height: 15,
    width: 15,
    borderRadius: 50,
    backgroundColor: colors["green-600"],
    position: "absolute",
    top: 7.5,
  },
  redDot: {
    height: 15,
    width: 15,
    borderRadius: 50,
    backgroundColor: "red",
    position: "absolute",
    bottom: 7.5,
  },
  lineInBetween: {
    height: "100%",
    width: 2,
    position: "absolute",
    backgroundColor: colors["gray-300"],
  },
  secondCol: {
    flexDirection: "column",
    gap: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors["gray-600"],
  },
  time: {
    fontSize: 14,
    fontWeight: "normal",
    color: colors["gray-500"],
  },

  location: {
    fontSize: 14,
    fontWeight: "normal",
    color: colors["gray-500"],
  },
  locationWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    gap: 2,
  },
  secondRow: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  secondRowStatus: {
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
  },

  statusWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  secondRowStatusTitle: {
    fontSize: 14,
    fontWeight: "normal",
    color: colors["gray-500"],
  },

  secondRowStatusValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors["gray-600"],
  },
});

export const infoStyles = StyleSheet.create({
  driverInfo: {
    marginLeft: 10,
  },
  mainContainer: {
    width: Dimensions.get("screen").width - 10,
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    elevation: 10,
    padding: 20,
  },
  vehichleInfoContainer: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: colors["gray-300"],
    marginTop: 10,
  },
  vehicleInfo: {
    flexDirection: "row",
    gap: 4,
    marginTop: 5,
  },
  vehicleInfoTitleText: {
    fontSize: 14,
    fontWeight: "normal",
    color: colors["gray-500"],
  },
  vehicleInfoValue: {
    fontSize: 14,
    fontWeight: "normal",
    color: colors["gray-500"],
    flex: 1,
    textAlign: "right",
  },

  vehicleInfoTitle: {
    flexDirection: "row",
    gap: 4,
    flex: 1,
  },

  otherInfoContainer: {
    gap: 4,
    marginTop: 5,
  },
  otherInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  otherInfoTitle: {
    fontSize: 14,
    fontWeight: "normal",
    color: colors["gray-500"],
    width: "50%",
  },

  otherInfoValue: {
    fontSize: 14,
    fontWeight: "normal",
    color: colors["gray-500"],
  },
});
