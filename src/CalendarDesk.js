import React, { useEffect } from "react";
import { useState } from 'react';



import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment';
import 'moment/locale/nl';
// import Firebase from 'firebase';

moment.locale('nl');

const localizer = momentLocalizer(moment);

const newEvents = [];

export default function CalendarDesk() {

    const [eventDb, setEventDb] = useState([]);


    useEffect(() => {
        // let ref = Firebase.database().ref('/events');
        // ref.on('value', snapshot => {
        //     snapshot.forEach((childSnap) => {
        //         let state = childSnap.val();
        //         console.log(state);
        //         //newEvents.push({title: state.title, id: state.id, resourceId: state.resourceId,start: new Date(state.yearStart,state.monthStart,state.dayStart,state.hourStart,state.minuteStart,state.secondStart),end: new Date(state.yearStart,state.monthStart,state.dayStart,state.hourEnd,state.minuteEnd,state.secondEnd)}); 
        //         setEventDb(eventDb => [...eventDb, { title: state.title, id: state.id, resourceId: state.resourceId, start: new Date(state.yearStart, state.monthStart, state.dayStart, state.hourStart, state.minuteStart, state.secondStart), end: new Date(state.yearStart, state.monthStart, state.dayStart, state.hourEnd, state.minuteEnd, state.secondEnd) }]);
        //     });
        // })

        // console.log(newEvents);

    }, []);

    const resourceMap = [
        { resourceId: 1, resourceTitle: 'Robin Frissen' },
        { resourceId: 2, resourceTitle: 'Raoul Frissen' },
        { resourceId: 3, resourceTitle: 'Joppe Meijers' },

    ]

    let today = new Date();
    let formats = {
        timeGutterFormat: (date, culture, localizer) =>
            localizer.format(date, 'H:mm', culture),
    }

    const onSelectEvent = function (pEvent) {
        const r = window.confirm("Weet je zeker dat je de afspraak wilt verwijderen?'")
        if (r === true) {
            //const idx = indexOf(pEvent)
            // console.log(pEvent);
            // var ref = Firebase.database().ref('events');
            // ref.orderByChild('id').equalTo(pEvent.id).on('child_added', (snapshot) => {
            //     snapshot.ref.remove()
            // });

            // setEventDb(eventDb.filter(item => item.id !== pEvent.id));


        }
    }

    return (
        <div>


            <Calendar
                events={eventDb}
                localizer={localizer}
                defaultView={'day'}
                views={['day', 'work_week']}
                timeslots={4}
                step={15}
                defaultDate={new Date()}
                formats={formats}
                onSelectEvent={event => onSelectEvent(event)}
                min={new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8)}
                max={new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18)}
                resources={resourceMap}
                resourceIdAccessor="resourceId"
                resourceTitleAccessor="resourceTitle"
                culture={moment.locale('nl')}
                messages={{
                    today: "Vandaag",
                    previous: "<",
                    next: ">",
                    month: "Maand",
                    week: "Week",
                    day: "Dag"
                }}
            />

        </div>
    );

}