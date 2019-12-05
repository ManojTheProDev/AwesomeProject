/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Step1, { CustomComponent } from './step1';

import { copilot, CopilotStep, walkthroughable } from 'react-native-copilot';

const CopilotText = walkthroughable(Text);

const StepNumberComponent = ({
  isFirstStep,
  isLastStep,
  currentStep,
  currentStepNumber,
}) => {
  console.log("currentStep :::", isFirstStep, isLastStep, currentStep)
return (<View><Text>{currentStepNumber}</Text></View>)
};

const circleSvgPath = ({ position, canvasSize }): string =>
  `M0,0H${canvasSize.x}V${canvasSize.y}H0V0ZM${position.x._value},${
    position.y._value
  }Za50 50 0 1 0 100 0 50 50 0 1 0-100 0`;

  const TooltipComponent = ({
    isFirstStep,
    isLastStep,
    handleNext,
    handlePrev,
    handleStop,
    currentStep,
    tooltipLabelTextValue,
    tooltipTextValue,
  }) => (
    <View style={styles.tooltipContainer}>
      <View style={styles.tooltipHeader}>
        <View style={styles.tooltipLabel}>
          {/* <Text style={styles.tooltipLabelText}>{tooltipLabelTextValue}</Text> */}
          <Text style={styles.tooltipLabelText}>Create a balanced team</Text>
        </View>
        <StepNumberComponent />
      </View>
      <View style={styles.tooltipBody}>
        <View style={styles.tooltipStep}>
          <Text style={styles.tooltipText}>{tooltipTextValue}</Text>
          <Text style={styles.tooltipText}>Use your skill to pick players from all roles. Lorem Epsom pick your players and lorem ipsum</Text>
        </View>
      </View>
    </View>
  );

class App extends React.Component {

  componentDidMount() {
    this.props.copilotEvents.on('stepChange', this.handleStepChange);
    this.props.start();
  }

  handleStepChange = (step) => {
    console.log(`Current step is: ${step.name}`);
  }

  render() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
            <CopilotStep text="This is a first world example!" order={2} name="hello">
              <CopilotText style={{backgroundColor: 'red'}}>Hello world!</CopilotText>
            </CopilotStep>
            </View>
            <Step1 />
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
};

export const styles = StyleSheet.create({
  tooltipContainer: {
    flex: 1,
    backgroundColor: '#5E2396',
    borderRadius: 6,
  },
  tooltipHeader: {
    flex: 1,
  },
  tooltipLabel: {},
  tooltipLabelText: {},
  tooltipBody: {},
  tooltipStep: {},
  tooltipStep: {},
  tooltipText: {},
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // paddingTop: 40,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
    width: "100%",
    height: "100%",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default copilot({
  tooltipComponent: TooltipComponent,
  stepNumberComponent: StepNumberComponent,
  // svgMaskPath: circleSvgPath,
  animated: true, // Can be true or false
  overlay: 'svg', // Can be either view or svg
})(App)
