// for the ease of transfer and understandability all the components are present in this file
import { Image, Text, TouchableOpacity, View } from "react-native";
import { colors, dashboardStyles } from "./styles";
import Icon from "./assets/utilities/Icon";

export const MainDashboard = ({
  userName,
  location,
  expireDate,
  charge,
  speed,
  vehicleInfo,
  status,
}) => {
  return (
    <View style={dashboardStyles.mainContainer}>
      <View style={dashboardStyles.firstRow}>
        <View style={dashboardStyles.userAvatar}>
          <Image
            source={require("./assets/svg/bikeIcon.png")}
            style={{ maxHeight: 50, maxWidth: 50 }}
          />
          <View style={dashboardStyles.speedIndicator}>
            <Text style={dashboardStyles.speed}>{speed}</Text>
            <Text style={dashboardStyles.speedUnit}>KM/H</Text>
          </View>

          {/* It is going to show the charge */}
          <View style={dashboardStyles.chargeBorder}></View>
        </View>
        <View style={dashboardStyles.driverInfo}>
          <View style={dashboardStyles.userWithStatus}>
            <Text style={dashboardStyles.userName}>{userName}</Text>
            <View style={dashboardStyles.activeStatus}></View>
          </View>
          <Text style={dashboardStyles.location}>{location}</Text>
          <Text style={dashboardStyles.expireDate}>{expireDate}</Text>
          <View style={dashboardStyles.charge}>
            <Icon
              name={"thunder"}
              width={20}
              height={20}
              color={colors["primary"]}
            />
            <Text style={dashboardStyles.chargeNumber}>{charge}%</Text>
          </View>
        </View>
      </View>
      <View style={dashboardStyles.statusContainer}>
        {vehicleInfo.length > 0 &&
          vehicleInfo.map((info, index) => (
            <View style={dashboardStyles.status} key={index}>
              <View style={dashboardStyles.circleIcon}>
                <Icon
                  name={info.icon}
                  height={20}
                  width={20}
                  color={info.active ? colors["green-600"] : colors["gray-400"]}
                />
              </View>
              <View style={dashboardStyles.statusText}>
                <Text style={dashboardStyles.statusTextTitle}>{info.name}</Text>
                <Text
                  style={[
                    dashboardStyles.statusTextStatus,
                    info.active && {
                      color: colors["green-600"],
                    },
                  ]}
                >
                  {info.status}
                </Text>
              </View>
            </View>
          ))}
      </View>

      <View style={dashboardStyles.secondRow}>
        {status?.length > 0 &&
          status.map((stat, index) => (
            <View
              key={index}
              style={[
                dashboardStyles.secondRowStatus,
                index !== status?.length - 1 && {
                  borderRightWidth: 1,
                },
                index !== 0 && {
                  paddingLeft: 10,
                },
              ]}
            >
              <Text style={[dashboardStyles.secondRowStatusTitle]}>
                {stat.name}
              </Text>
              <Text style={dashboardStyles.secondRowStatusValue}>
                {stat.value}
              </Text>
            </View>
          ))}
      </View>
    </View>
  );
};

// @params items
// items = [{
// title: string,
// value: string,
// image?: string(path)
// icon: string (iconName)
// }]
//
import { dailySummaryStyles } from "./styles";

export const DailySummarySection = ({ items }) => {
  return (
    <View style={dailySummaryStyles.mainContainer}>
      <View style={dailySummaryStyles.titleContainer}>
        <Icon
          name={"daily"}
          height={25}
          width={25}
          color={colors["primary-light"]}
        />
        <Text style={dailySummaryStyles.title}>Daily Summary</Text>
      </View>

      <View style={dailySummaryStyles.itemsContainer}>
        {items?.length > 0 &&
          items.map((item, index) => (
            <View key={index} style={dailySummaryStyles.itemContainer}>
              <View style={dailySummaryStyles.itemTitleContainer}>
                <Text style={dailySummaryStyles.itemTitle}>{item.title}</Text>
                {item?.icon && (
                  <Icon
                    name={item.icon}
                    height={20}
                    width={20}
                    color={colors["gray-400"]}
                  />
                )}
                {item?.image && <Image source={item.image} />}
              </View>
              <Text style={dailySummaryStyles.itemValue}>{item.value}</Text>
            </View>
          ))}
      </View>
    </View>
  );
};

// button
// @params title, onPress, color
//
import { buttonStyles } from "./styles";

export const CustomButton = ({ title, onPress, bg, color }) => {
  return (
    <TouchableOpacity
      style={[buttonStyles.mainButton, { backgroundColor: bg }]}
      onPress={onPress}
    >
      <Text style={[{ color: color }, buttonStyles.title]}>{title}</Text>
    </TouchableOpacity>
  );
};

// Advanced Reports navigation with buttons Section
// @params title, onPress, bg
//
export const AdvancedReportBtn = ({ title, onPress, bg, icon }) => {
  return (
    <TouchableOpacity
      style={[reportStyles.mainButton, { backgroundColor: bg }]}
      onPress={onPress}
    >
      <View style={reportStyles.iconContainer}>
        <Icon name={icon} height={20} width={20} color={colors["gray-400"]} />
      </View>
      <Text style={[{ color: bg }, reportStyles.title]}>{title}</Text>
    </TouchableOpacity>
  );
};

import { reportStyles } from "./styles";
// Advance Reports Section
// @params items, onPress

export const AdvancedReports = ({ items }) => {
  return (
    <View style={reportStyles.mainContainer}>
      <View style={reportStyles.titleContainer}>
        <Icon
          name={"daily"}
          height={25}
          width={25}
          color={colors["primary-light"]}
        />
        <Text style={reportStyles.title}>Advanced Reports</Text>
      </View>

      <View style={reportStyles.itemsContainer}>
        {items?.length > 0 &&
          items.map((item, index) => (
            <AdvancedReportBtn
              key={index}
              title={item.title}
              onPress={item.onPress}
              icon={item.icon}
            />
          ))}
      </View>
    </View>
  );
};
