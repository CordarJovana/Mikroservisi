import Title from '../components/subcomponents/Title';
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import '../style/Calendar.css';
import '@fullcalendar/core/locales/sr-cyrl';

function Calendar(props) {
  const { id } = props;
  const [examDates, setExamDates] = useState([]);
  const [examRegistrations, setExamRegistrations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseExamDates = await axios.get(`http://backend:1337/getAllExamsReg/${id}`);
        const responseExamRegistrations = await axios.get(`http://backend:1337/getAllExamDeadlines`);
        setExamDates(responseExamDates.data);
        setExamRegistrations(responseExamRegistrations.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const createExamRegistrationEvents = (registration) => {
    const events = [];

    for (let i = new Date(registration.datumPocetkaPrijave); i <= new Date(registration.datumZavrsetkaPrijave); i.setDate(i.getDate() + 1)) {
      const date = new Date(i);
      events.push({
        title: 'Пријава испита',
        date: date.toISOString().substring(0, 10),
        backgroundColor: '#2c3e50'
      });
    }
    return events;
  };

  const examDateEvents = examDates.map(date => ({
    title: 'Испит ' + date.predmet.nazivPredmeta,
    date: date.datum.substring(0, 10),
    backgroundColor: '#EF5555'
  }));

  const examRegistrationEvents = examRegistrations.flatMap(registration =>
    createExamRegistrationEvents(registration)
  );

  const allEvents = [...examDateEvents, ...examRegistrationEvents];

  return (
    <div className="calender">
      <Title title="Мој Календар" />
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin]}
          events={allEvents}
          firstDay={1}
          locale="sr-cyrl"
          buttonText={{ today: 'Данас' }}
          headerToolbar={{
            start: 'today',
            center: 'title',
            end: 'prev,next',
          }}
          fixedWeekCount={false}
        />
      </div>
    </div>
  );
}

export default Calendar;
