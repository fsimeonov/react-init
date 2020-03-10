import React, {Component} from 'react';

class CreateProgram extends Component {

    onFormSubmit = (submitEvent) => {
        submitEvent.preventDefault();
        this.props.onCreateProgram(submitEvent.target.name.value);
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h2>Create new study program</h2>
                <div>
                    <label>Ime: </label>
                    <input className='form-control' name='name'/>
                </div>
                <button type='submit'>Create</button>
            </form>
        );
    }

}
export default CreateProgram;