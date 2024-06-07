import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from '../components/subcomponents/Table';
import Title from '../components/subcomponents/Title';
import '../style/ExamDeadlines.css';

function formatDate(date) {
    return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear().toString()}`;
}

function ExamDeadlines() {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        axios.get(`http://35.222.226.126:1337/getAllExamDeadlines`)
            .then(response => {
                const examDeadlines = response.data;
                const formattedData = examDeadlines.map(deadline => {
                    const startingDate = formatDate(new Date(deadline.datumPocetka));
                    const endingDate = formatDate(new Date(deadline.datumKraja));
                    const registrationEndingDate = formatDate(new Date(deadline.datumZavrsetkaPrijave));
                    const registrationStartingDate = formatDate(new Date(deadline.datumPocetkaPrijave))
                    return {
                        'Exam term': deadline.naziv,
                        'Registration deadline': `${registrationStartingDate} - ${registrationEndingDate}`,
                        'Deadline': `${startingDate} - ${endingDate}`,
                    };
                });
                setData(formattedData);
                setColumns([
                    { name: 'Испитни рок', property: 'Exam term' },
                    { name: 'Трајање пријаве', property: 'Registration deadline' },
                    { name: 'Трајање рока', property: 'Deadline' },
                ]);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="exam-deadlines">
            <Title title="Испитни рокови" />
            <Table data={data} columns={columns} className="table table-exam-deadlines" />
        </div>
    );
}

export default ExamDeadlines;
