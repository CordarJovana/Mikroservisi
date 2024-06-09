import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from '../components/subcomponents/Table';
import Title from '../components/subcomponents/Title';
import '../style/ExamRegistration.css';

function ExamRegistration(props) {
    const { id } = props;
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        axios.get(`http://35.222.157.204:1337/getActiveExamRegistrations/${id}`)
            .then(response => {
                const examRegistrationsExisting = response.data.withPrijave;
                const examRegistrationsNonExisting = response.data.withoutPrijave;
                const formattedDataExisting = examRegistrationsExisting.map(registration => {
                    const dateString = registration.datum;
                    const date = new Date(dateString);
                    const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear().toString()}`;
                    return {
                        Subject: registration.predmet.nazivPredmeta,
                        'Exam term': registration.ispitniRok.naziv,
                        'Exam date': formattedDate,
                        'Actions': (
                            <button className="exam-registration-button" onClick={() => {
                                const ispitId = registration.id;
                                const studentId = id;
                                axios.post(`http://34.28.30.203:900/deletePrijava`, { ispitId, studentId })
                                    .then(response => {
                                        console.log(response.data);
                                        setRefresh(!refresh);
                                    }).catch(error => console.error(error));
                            }}>Одјави испит</button>
                        )
                    };
                });
                const formattedDataNonExisting = examRegistrationsNonExisting.map(registration => {
                    const dateString = registration.datum;
                    const date = new Date(dateString);
                    const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear().toString()}`;

                    return {
                        Subject: registration.predmet.nazivPredmeta,
                        'Exam term': registration.ispitniRok.naziv,
                        'Exam date': formattedDate,
                        'Actions': (
                            <button className="exam-registration-button" onClick={() => {
                                const ispitId = registration.id;
                                const studentId = id;
                                axios.post('http://34.28.30.203:900/createNewPrijava', { ispitId, studentId })
                                    .then(response => {
                                        console.log(response.data);
                                        setRefresh(!refresh);
                                    }).catch(error => console.error(error));
                            }}>Пријави испит</button>
                        )
                    };
                });
                setData([...formattedDataExisting, ...formattedDataNonExisting]);
                setColumns([
                    { name: 'Испитни рок', property: 'Exam term' },
                    { name: 'Предмет', property: 'Subject' },
                    { name: 'Датум полагања', property: 'Exam date' },
                    { name: 'Пријављивање', property: 'Actions' },
                ]);
            }).catch(error => console.error(error));
    }, [id, refresh]);

    return (
        <div className="exam-registration">
            <Title title="Пријава испита" />
            <Table data={data} columns={columns} className="table table-exam-registration" />
        </div>
    );
}

export default ExamRegistration;
