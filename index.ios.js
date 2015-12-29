// iOS

// var React = require('react-native');
// var { TabBarIOS, NavigatorIOS } = React;

// var App = React.createClass({
//   render: function() {
//     return (
//       <TabBarIOS>
//         <TabBarIOS.Item title="React Native" selected={true}>
//           <NavigatorIOS initialRoute={{ title: 'React Native' }} />
//         </TabBarIOS.Item>
//       </TabBarIOS>
//     );
//   },
// });

var React = require('react-native');
var { NativeModules, Text } = React;

var Message = React.createClass({
  getInitialState() {
    return { text: 'Goodbye World.' };
  },
  componentDidMount() {
    NativeModules.MyCustomModule.processString(this.state.text, (text) => {
      this.setState({text});
    });
  },
  render: function() {
    return (
      <Text>{this.state.text}</Text>
    );
  }
});
