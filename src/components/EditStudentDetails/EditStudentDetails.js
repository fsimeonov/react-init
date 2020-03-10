import React, {Component} from 'react';

class EditStudentDetails extends Component {

    onFormSubmit = (submitEvent) => {
        submitEvent.preventDefault();

        this.props.onEditStudent(this.props.student.index, {
            name: submitEvent.target.name.value,
            lastName: submitEvent.target.lastName.value,
            studyProgramName: submitEvent.target.studyProgramName.value,
        });
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h2>Edit student details</h2>
                <div>
                    <label>Ime: </label>
                    <input className='form-control' name='name' key={this.props.student.index} defaultValue={this.props.student.name}/>
                </div>
                <div>
                    <label>Prezime: </label>
                    <input className='form-control' name='lastName' key={this.props.student.index} defaultValue={this.props.student.lastName}/>
                </div>
                <div>
                    <label>Indeks: </label>
                    <input className='form-control' name='index' key={this.props.student.index} defaultValue={this.props.student.index} disabled/>
                </div>
                <div>
                    <label>Nasoka: </label>
                    <input className='form-control' name='studyProgramName' key={this.props.student.index} defaultValue={this.props.student.studyProgram.name}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}


export default EditStudentDetails;