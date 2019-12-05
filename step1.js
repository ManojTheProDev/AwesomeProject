import React, {Component} from 'react';
import { View, Text } from 'react-native';

import { styles } from './App';

import { CopilotStep } from 'react-native-copilot';

export const HelloFuck = ({ copilot }) => {
  return (
    <View {...copilot}>
      <Text>
        Hey ho
      </Text>
    </View>
  )
}

class Step1 extends Component {

  render() {
    return (
      <>
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Step One</Text>
      <Text style={styles.sectionDescription}>
        Edit <Text style={styles.highlight}>App.js</Text> to change this
        screen and then come back to see your edits.
      </Text>
    </View>
    <CopilotStep text="This is a second world example!" order={1} name="fgdvf">
      <HelloFuck />
    </CopilotStep>
    </>)
  }
}

export default Step1