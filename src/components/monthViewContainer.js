import { connect } from 'react-redux';

import MonthView from './monthView';

function mapStateToProps(state) {
  return {
    events: state.api.events,
  }
}

export default connect(mapStateToProps)(MonthView);
