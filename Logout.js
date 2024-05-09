import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';

const Profile = () => {

  const [isEnabled, setIsEnabled] = useState(false);

  const interruptor = () => {
    setIsEnabled((previousState) =>  !previousState);
  }
  const containerStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isEnabled ? '#3e805e' : '#4b2580',
  }
  const textStyle={
    fontSize: 24,
    marginBottom: 20,
    color: isEnabled ? '#fff' : '#333',
  }

  toggleSwitch() {
    const previous_state = this.state.isEnabled;
    const theme = !this.state.isEnabled ? "dark" : "light"
    var updates = {}
    updates["/users/" + firebase.auth().currentUser.uid + "/current_theme"] = themefirebase.database().ref().update(updates);
    this.setState({ isEnabled: !previous_state, light_theme: previous_state})
  };

  return (
    <View style={[styles.container, containerStyle]}>
     <Text style={[styles.text, textStyle]}>Perfil</Text>
     <View style={styles.switchContainer}>
    <Switch
    trackColor={{ false: '#767577', true: '#81b0ff' }}
    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
    ios_backgroundColor="#3e3e3e"
    onValueChange={interruptor}
    value={isEnabled}
    />
     </View>
     </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fonstSize: 24,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Profile;