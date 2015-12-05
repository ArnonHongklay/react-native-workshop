
'use strict';

var React = require('react-native');
var Featured = require('./app/Featured');
var Search = require('./app/Search')

var {
    AppRegistry,
    TabBarIOS,
    Component
   } = React;

class OhmpiengApp extends Component {

  constructor(props) {
      super(props);
      this.state = {
          selectedTab: 'featured'
      };
  }

  render() {
    render: function() {
      return (
        <ToolbarAndroid
          logo={require('image!app_logo')}
          title="AwesomeApp"
          actions={[{title: 'Settings', icon: require('image!icon_settings'), show: 'always'}]}
          onActionSelected={this.onActionSelected} />
      )
    },
    onActionSelected: function(position) {
      if (position === 0) { // index of 'Settings'
        showSettings();
      }
    }
  }
}

AppRegistry.registerComponent('OhmpiengApp', () => OhmpiengApp);
