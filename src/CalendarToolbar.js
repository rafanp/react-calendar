import React, { useEffect } from "react";

export default class CalendarToolbar extends React.Component {
    render() {
      return (
        <div className="rbc-btn-group">
            <button
              className="toolbar-navigation-button"
              type="button"
            >
              {/* <Icon
                className="navigate-icon"
                icon={this.props.isRTL ? 'chevron-right' : 'chevron-left'}
              /> */}
            </button>
            <span
              className="today-label"
            >
              {/* {i18n('calendar-today')} */}
            </span>
            <button
              className="toolbar-navigation-button"
              type="button"
            >
              {/* <Icon
                className="navigate-icon"
                icon={this.props.isRTL ? 'chevron-left' : 'chevron-right'}
              /> */}
            </button>
        </div>
      );
    }
  }
