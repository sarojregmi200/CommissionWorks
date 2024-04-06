// for the ease of transfer and understandability all the components are present in this file
import { Image, Text, View } from "react-native";
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
          {/* this is going to be the circle */}
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
            <View style={dashboardStyles.icon}></View>
            <Text style={dashboardStyles.chargeNumber}>{charge}</Text>
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
                  color={info.active ? colors["green-500"] : colors["gray-500"]}
                />
              </View>
              <View style={dashboardStyles.statusText}>
                <Text style={dashboardStyles.statusTextTitle}>{info.name}</Text>
                <Text
                  style={[
                    dashboardStyles.statusTextStatus,
                    info.active && {
                      color: colors["green-500"],
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
