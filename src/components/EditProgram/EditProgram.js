import React, {Component} from 'react';

class EditProgram extends Component {

    onFormSubmit = (submitEvent) => {
        submitEvent.preventDefault();
        this.props.onEditProgram(this.state.program.index, submitEvent.target.name.value);
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h2>Edit program details</h2>
                <div>
                    <label>Ime: </label>
                    <input className='form-control' name='name' key={this.props.program.id} defaultValue={this.props.program.name}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default EditProgram;