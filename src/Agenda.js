import React, { useEffect } from "react";
import { useState } from 'react';
import events from './events';

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment';
import 'moment/locale/nl';
import './styles.scss';
import WeekCalendar from './WeekCalendar';
moment.locale('nl');

const localizer = momentLocalizer(moment);

const newEvents = [];



export default function Agenda() {
    return (
        <div>



            <Calendar

                localizer={localizer}
                defaultDate={new Date()}
                timeslots={4}
                step={15}
                defaultView="week"
                events={events}
                // toolbar={false}
                style={{ height: "100vh" }}
                components={{
                    toolbar: WeekCalendar
                }}
            />

        </div>
    );

}