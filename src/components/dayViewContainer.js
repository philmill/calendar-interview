import { connect } from 'react-redux';

import DayView from './dayView';

function mapStateToProps(state) {
  return {
    event: state.api.events.find(event => event.id === state.ui.selectedEventId) || {},
  }
}

export default connect(mapStateToProps)(DayView);
