import React from 'react';

const StudentsItem = (props) => {
    return (
        <tr onClick={() => props.onClick(props.student)}>
            <td>{props.student.name}</td>
            <td>{props.student.lastName}</td>
            <td onClick={() => props.onDelete(props.student)}><button className='btn btn-danger'>x</button></td>
        </tr>
    );

};

export default StudentsItem;