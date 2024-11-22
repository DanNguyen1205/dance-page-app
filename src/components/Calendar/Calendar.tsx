import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'; 
import { EventClickArg } from '@fullcalendar/core';
import styles from "./Calendar.module.css"; // Import CSS module properly

interface EventData {
    title: string;
    start: string;
    end: string;
}

const Calendar = () => {
    const [events] = useState<EventData[]>([
        { title: 'Beginner Ballet', start: '2023-11-11T10:00:00', end: '2023-11-11T11:00:00' },
        { title: 'Hip Hop Basics', start: '2023-11-12T14:00:00', end: '2023-11-12T15:00:00' },
        { title: 'Contemporary Dance', start: '2023-11-13T18:00:00', end: '2023-11-13T19:30:00' },
    ]);

    // Define event handlers for date click and event click
    const handleDateClick = (info: DateClickArg) => {
        alert(`Date clicked: ${info.dateStr}`);
    };

    const handleEventClick = (info: EventClickArg) => {
        const { title, start, end } = info.event;
        alert(`Class: ${title}\nStart: ${start?.toISOString()}\nEnd: ${end?.toISOString()}`);
    };

    return (
        <>
        <div className={`${styles.calendar}`}>
            <div className={`${styles.calendarWrapper}`}>
                <h2>Dance Class Schedule</h2>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    events={events}
                    dateClick={handleDateClick}
                    eventClick={handleEventClick}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                />
            </div>
        </div>
        </>

    );
}

export default Calendar