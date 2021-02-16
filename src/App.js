import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from './events';
import Agenda from './Agenda'

import "./App.css";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// import 'react-big-calendar/lib/sass/styles.scss'
import './styles.scss';

const localizer = momentLocalizer(moment);

class App extends Component {
  constructor(...args) {
    super(...args)

    this.state = { events }
  }

  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Some title"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        {/* <Calendar

          localizer={localizer}
          defaultDate={new Date()}
          defaultView="week"
          events={events}
          style={{ height: "100vh" }}
        /> */}

        <Agenda/>
      </div>
    );
  }
}

export default App;
