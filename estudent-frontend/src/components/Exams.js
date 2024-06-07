import Title from '../components/subcomponents/Title';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TablePassedeExams from '../components/subcomponents/Table';
import TableNonPassedExams from '../components/subcomponents/Table';
import '../style/Exams.css';

function formatDate(date) {
    return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear().toString()}`;
}

function Exams(props) {
    const { id } = props;
    const [passedExamsData, setPassedExamsData] = useState([]);
    const [passedExamsColumns, setPassedExamsColumns] = useState([]);
    const [nonPassedExamsData, setNonPassedExamsData] = useState([]);
    const [nonPassedExamsColumns, setNonPassedExamsColumns] = useState([]);

    useEffect(() => {
        axios.get(`http://35.222.226.126:1337/getAllStudentExams/${id}`)
          .then(response => {
            const passedExams = response.data.passedExams;
            const nonPassedExams = response.data.nonPassedExams;
      
            const passedExamsData = passedExams.map(exam => ({
              subject: exam.predmet.nazivPredmeta,
              espb: exam.predmet.espb,
              grade: exam.ocena,
              date: formatDate(new Date(exam.datum))
            }));
            setPassedExamsData(passedExamsData);
            setPassedExamsColumns([
              { name: 'Предмет', property: 'subject' },
              { name: 'Оцена', property: 'grade' },
              { name: 'ЕСПБ', property: 'espb' },
              { name: 'Датум', property: 'date' }
            ]);
      
            const nonPassedExamsData = nonPassedExams.map(exam => ({
              subject: exam.predmet.nazivPredmeta,
              espb: exam.predmet.espb,
              grade: exam.ocena,
              date: formatDate(new Date(exam.datum))
            }));
            setNonPassedExamsData(nonPassedExamsData);
            setNonPassedExamsColumns([
              { name: 'Предмет', property: 'subject' },
              { name: 'Оцена', property: 'grade' },
              { name: 'ЕСПБ', property: 'espb' },
              { name: 'Датум', property: 'date' }
            ]);
          })
          .catch(error => console.error(error));
      }, [id]);
      
    return (
        <div className="exams">
            <Title title="Испити" />
            <div className='passed-exams'>
            <span className="subtitle-label">Положени испити</span>
            <TablePassedeExams data={passedExamsData} columns={passedExamsColumns} className="table table-passed-exams" />
            </div>
            <div className='non-passed-exams'>
            <span className="subtitle-label">Неуспешна полагања</span>
            <TableNonPassedExams data={nonPassedExamsData} columns={nonPassedExamsColumns} className="table table-passed-exams" />
            </div>
        </div>
    );
}

export default Exams;
