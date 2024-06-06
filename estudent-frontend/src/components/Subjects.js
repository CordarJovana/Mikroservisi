import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Subject from '../components/subcomponents/Subject';
import Title from '../components/subcomponents/Title';

function Subjects(props) {
  const { id } = props;
  const [subjects, setSubjects] = useState([]);
  const [expandedSubjectId, setExpandedSubjectId] = useState(null);

  useEffect(() => {
    async function fetchSubjects() {
      try {
        const response = await axios.get(`http://localhost:1337/getAllStudentSubjects/${id}`);
        setSubjects(response.data.result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSubjects();
  }, [id]);

  function toggleSubject(subjectId) {
    if (subjectId === expandedSubjectId) {
      setExpandedSubjectId(null);
    } else {
      setExpandedSubjectId(subjectId);
    }
  }

  return (
    <div className="subjects">
      <Title title="Предмети" />
      {subjects.map((subject) => (
        <Subject
          key={subject.id}
          subject={subject}
          expanded={subject.id === expandedSubjectId}
          onExpand={() => toggleSubject(subject.id)}
        />
      ))}
    </div>
  );
}

export default Subjects;
