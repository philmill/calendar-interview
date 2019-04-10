import { connect } from 'react-redux';

import DateCell from './dateCell';
import {setSelectedEventId} from "../actions/uiActions";

function mapDispatchToProps(dispatch) {
  return {
    handleEventClick: (eventId) => dispatch(setSelectedEventId(eventId))
  }
}

export default connect(null, mapDispatchToProps)(DateCell);
