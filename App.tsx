import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import { Avatar, Badge, Button, ButtonGroup, Card, CheckBox, Divider, Image, Input } from 'react-native-elements';

const App: React.FC = () => {
  const [text1, setText1] = useState<string>('');
  const  [selectedIdx, setSelectedIdx] = useState<number>(0);
  const  buttons = ['What', 'the', 'Fuck'];
  return (
    <View style={{flex:1, paddingVertical: 80}}>
      <Card>
        <Card.Title>expo-expo</Card.Title>
        <View style={{width:80, marginLeft: 10}}>
          <Avatar
            containerStyle={{backgroundColor:'gray'}}
            rounded
            size="large"
            icon={{ name: 'home' }}
          />
          <Badge
            status="success"
            value={buttons[selectedIdx]}
            containerStyle={{ position: 'absolute', top: -5, right: -5 }}
          />
        </View>
        <Divider style={{
          backgroundColor: 'gray',
          margin:10,
          height:1,
          }}
        />
        <ButtonGroup
          onPress={(i)=>{
            setSelectedIdx(i)
          }}
          selectedIndex={selectedIdx}
          buttons={buttons}
          containerStyle={{height: 40}}
        />
      </Card>
    </View>
  );
}

export default App;
