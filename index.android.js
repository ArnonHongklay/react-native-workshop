var React = require('react-native');
var { requireNativeComponent } = React;

class OhmpiengApp extends React.Component {
  render() {
    return <NativeOhmpiengApp {...this.props} />;
  }
}
OhmpiengApp.propTypes = {
  myCustomProperty: React.PropTypes.oneOf(['a', 'b']),
};

var NativeOhmpiengApp = requireNativeComponent('OhmpiengApp', OhmpiengApp);
module.exports = OhmpiengApp;
