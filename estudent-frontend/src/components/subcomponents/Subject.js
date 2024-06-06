import React, { useState } from 'react';
import '../../style/Subject.css';
import Table from '../../components/subcomponents/Table';

function Subject(props) {
    const { subject, onExpand, expanded } = props;

    function getObavezanIliIzborni(izborni) {
        return izborni ? "Изборни" : "Обавезан";
    }

    const columns = [
        { name: 'Име', property: 'ime' },
        { name: 'Презиме', property: 'prezime' },
        { name: 'Е-пошта', property: 'mail' },
    ];

    const data = subject.professors.map((profesor) => ({
        ime: profesor.ime,
        prezime: profesor.prezime,
        mail: profesor.mail,
    }));

    function toggleDetails() {
        onExpand(subject.id);
    }

    return (
        <div className="subject">
            <span className="subject-header" onClick={toggleDetails}>
                {subject.nazivPredmeta}
            </span>
            {expanded && (
                <div className="subject-details">
                    <p>ЕСПБ: {subject.espb}</p>
                    <p>Семестар: {subject.semestar.brojSemestra}</p>
                    <p>Обавезан/Изборни: {getObavezanIliIzborni(subject.izborni)}</p>
                    <p>Сајт: <a href={subject.website} target="_blank" rel="noopener noreferrer">{subject.website}</a></p>
                    <span className="profesori-table-header">Професори</span>
                    <Table key={subject.id} columns={columns} data={data} className="table table-profesori" />
                </div>
            )}
        </div>
    );
}

export default Subject;
