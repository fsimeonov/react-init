import React from 'react';
import StudentItem from '../StudentItem/StudentItem';

const StudentsList = (props) => {
    let students = props.list.map(function (it) {
        return (
            <StudentItem onClick={props.onSelectStudent} onDelete={props.onDeleteStudent} key={it.index} student={it}/>
        );
    });

    return (
        <table className='table table-bordered table-hover table-striped'>
            <thead>
            <tr>
                <th>Ime:</th>
                <th>Prezime:</th>
                <th>Delete: </th>
            </tr>
            </thead>
            <tbody>
            {students}
            </tbody>
        </table>
    );
};

export default StudentsList;