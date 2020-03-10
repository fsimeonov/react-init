import React, {Component} from 'react';
import './App.css';
import {
    fetchAllStudents,
    fetchStudent,
    patchStudent,
    deleteStudent,
    createStudent
} from '../../repository/studentRepository';
import {
    fetchAllPrograms,
    deleteProgram,
    createProgram,
    patchProgram
} from "../../repository/programRepository";
import StudentsList from '../StudentsList/StudentsList';
import EditStudentDetails from '../EditStudentDetails/EditStudentDetails';
import CreateNewStudent from "../CreateNewStudent/CreateNewStudent";
import ProgramsList from "../ProgramsList/ProgramsList";
import CreateProgram from "../CreateProgram/CreateProgram";
import EditProgram from "../EditProgram/EditProgram";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allStudents: [],
            pageNum: 1,
            students: [],
            selectedStudent: null,
            allPrograms: [],
            selectedProgram: null
        }
    }


    render() {
        return (
            <div className='container mt-3 text-center'>
                <h1>Study Programs:</h1>
                <div className={'row bg-light rounded border border-secondary'}>
                    <div className='col-4 p-2'>
                        <ProgramsList list={this.state.allPrograms} onDelete={this.deleteProgram}
                                      onSelect={this.selectProgram}/>
                    </div>
                    <div className='col-4 p-2'>
                        <CreateProgram onCreateProgram={this.createProgram}/>
                    </div>
                    <div className='col-4 p-2'>
                        {this.state.selectedProgram == null ? null :
                            <EditProgram program={this.state.selectedProgram} onEditProgram={this.editProgram}/>
                        }
                    </div>
                </div>
                <h1>Students:</h1>
                <div className={'row bg-light rounded border border-secondary'}>
                    <div className='col-4 p-2'>
                        <StudentsList list={this.state.students} onSelectStudent={this.selectStudent}
                                      onDeleteStudent={this.deleteStudent}/>
                        <div>
                            <button className='btn btn-outline-primary btn-sm'
                                    onClick={this.onPageDecrement}>&lt;</button>
                            <button className='btn btn-outline-primary btn-sm mx-1'
                                    disabled='disabled'>{this.state.pageNum}</button>
                            <button className='btn btn-outline-primary btn-sm'
                                    onClick={this.onPageIncrement}>&gt;</button>
                        </div>
                    </div>
                    <div className='col-4 p-2'>
                        <CreateNewStudent onCreateNewStudent={this.createNewStudent}/>
                    </div>
                    {this.state.selectedStudent == null ? null :
                        <div className='col-4 p-2'>
                            <EditStudentDetails student={this.state.selectedStudent}
                                                position={this.state.students.indexOf(this.state.selectedStudent)}
                                                onEditStudent={this.onEditStudent}/>
                        </div>
                    }
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.loadData(1);
    }

    deleteProgram = (program) => {
        deleteProgram(program).then(response => {
            if (response.status === 409) {
                alert("This program cannot be deleted because it has students enrolled in it!");
            } else {
                this.loadData(this.state.pageNum);
            }
        });
    };

    selectProgram = (program) => {
        this.setState({
            selectedProgram: program
        });
    };

    createProgram = (name) => {
        createProgram(name).then(response => this.loadData(this.state.pageNum));
    };

    editProgram = (id, name) => {
        patchProgram(id, name).then(response => this.loadData(this.state.pageNum));
    };

    loadData = (pageNumber) => {
        fetchAllPrograms()
            .then(response => response.json())
            .then(data => {
                this.setState({
                    allPrograms: data
                });
            });
        fetchAllStudents()
            .then(response => response.json())
            .then(data => {
                let studentsList = data;
                let pageNum = Math.min(pageNumber, Math.ceil(studentsList.length / 5));
                this.setState(
                    {
                        allStudents: studentsList,
                        pageNum: pageNum,
                        students: studentsList.slice((pageNum - 1) * 5, pageNum * 5),
                        selectedStudent: null
                    });
            });
    };


    onEditStudent = (index, params) => {
        patchStudent(index, params)
            .then(_ => this.loadData(this.state.pageNum));
    };

    selectStudent = (student) => {
        fetchStudent(student.index)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    selectedStudent: data
                })
            });
    };

    onPageIncrement = () => {
        if (this.state.pageNum < Math.ceil(this.state.allStudents.length / 5)) {
            this.setState((state) => {
                let newList = state.allStudents.slice(state.pageNum * 5, state.pageNum * 5 + 5);
                return {
                    students: newList,
                    pageNum: Math.min(state.pageNum + 1, Math.ceil(state.allStudents.length / 5))
                }
            });
        }
    };

    onPageDecrement = () => {
        this.setState((state) => {
            if (state.pageNum > 1) {
                let newNum = state.pageNum - 1;
                let newList = state.allStudents.slice((newNum - 1) * 5, Math.ceil(newNum * 5));
                return {
                    pageNum: newNum,
                    students: newList
                }
            }
            return {};
        });
    };

    createNewStudent = (studentForm) => {
        createStudent(studentForm)
            .then(_ => this.loadData(this.state.pageNum))
    };

    deleteStudent = (student) => {
        deleteStudent(student.index)
            .then(_ => this.loadData(this.state.pageNum));
    }
}

export default App;
