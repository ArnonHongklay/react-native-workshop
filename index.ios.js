
'use strict';

var React     = require('react-native');
var Featured  = require('./app/Featured');
var Search    = require('./app/Search')

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
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'featured'}
          systemIcon='bookmarks'
          icon=""
          onPress={() => {
            this.setState({
              selectedTab: 'featured'
            });
          }}>
          <Featured/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'search'}
          systemIcon='search'
          icon=""
          onPress={() => {
            this.setState({
              selectedTab: 'search'
            });
          }}>
          <Search/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('OhmpiengApp', () => OhmpiengApp);
