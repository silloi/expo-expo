import React from "react";
import { ScrollView, View } from "react-native";
import { Avatar, Badge, Text } from "react-native-elements";
import { DrawerContentComponentProps, DrawerItems } from "react-navigation-drawer";

const MyDrawerContent: React.FC<DrawerContentComponentProps> = 
(props: DrawerContentComponentProps) => {
  const icon = "https://pbs.twimg.com/profile_images/1256226829674913799/upEPbuy__400x400.png";
  return (
    <ScrollView>
      <View style={{height:120, marginTop:24, backgroundColor:'gray'}}>
        <View style={{height:80, width:80, marginTop:10, marginLeft:10}}>
          <Avatar
            rounded
            size="large"
            source={{uri:icon}}
          />
          <Badge
            status="success"
            value={"54"}
            containerStyle={{ position:'absolute', top:5, right:0 }}
          />
        </View>
        <View style={{marginLeft:10}}>
          <Text style={{color:'white'}}>@silloi</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </ScrollView>
  )
}

export default MyDrawerContent;