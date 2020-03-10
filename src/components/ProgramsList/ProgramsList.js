import React from 'react';

const ProgramsList = (props) => {
    let programs = props.list.map(function (it) {
      return (<li className={'border border-secondary p-2'} key={it.id} onClick={() => props.onSelect(it)}>
           <span className={'pr-4'}>{it.name}</span>
          <button className='btn btn-danger' onClick={() => props.onDelete(it)}>x</button>
       </li>);
    });
    return (
      <ul style={{overflowY: "scroll", height: "150px"}}>
          {programs}
      </ul>
    );
};

export default ProgramsList;