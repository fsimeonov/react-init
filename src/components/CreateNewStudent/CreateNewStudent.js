import React, {Component} from 'react';

class CreateNewStudent extends Component {


    onFormSubmit = (submitEvent) => {
        submitEvent.preventDefault();

        this.props.onCreateNewStudent({
            name: submitEvent.target.ime.value,
            lastName: submitEvent.target.prezime.value,
            index: submitEvent.target.indeks.value,
            studyProgramName: submitEvent.target.nasoka.value
        });
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h2>Create new student</h2>
                <div>
                    <label>Ime: </label>
                    <input className='form-control' name='ime'/>
                </div>
                <div>
                    <label>Prezime: </label>
                    <input className='form-control' name='prezime'/>
                </div>
                <div>
                    <label>Indeks: </label>
                    <input className='form-control' name='indeks'/>
                </div>
                <div>
                    <label>Nasoka: </label>
                    <input className='form-control' name='nasoka'/>
                </div>
                <button type='submit'>Create</button>
            </form>
        );
    }
}


export default CreateNewStudent;