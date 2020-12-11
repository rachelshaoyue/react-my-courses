import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import AcademicYear from "./AcademicYear";
import Study from "./Study";
import Class from "./Class";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: [],
            semesters: []
        };

        this.updateTerms = this.updateTerms.bind(this);
    }

    updateTerms = (yearList, semesterList) => {
        this.setState({
            years: yearList,
            semesters: semesterList
        });

    };

    render() {
        let classes = this.state.years.map (year => {
            return (
                <div>
                    <h2 id={year}>{year}</h2>
                    {this.state.semesters.map(semester => {
                        const link = year + "_" + semester;
                        return (
                            <div>
                                <h4 id={link}>{semester}</h4>
                                <Class year={year} semester={semester}/>
                            </div>
                        )
                    })}
                </div>
            )
        });
        return (
            <div className="MainPage">
                <h1>My Courses</h1>
                <Row>
                    <Col className="navbar-col" xs="3">
                        <AcademicYear updateTerms={this.updateTerms} years={this.state.years} semesters={this.state.semesters}/>
                    </Col>
                    <Col>
                        <Study/>
                        <Row className="gpa">
                            <div>Cumulative GPA: 3.98/4.0</div>
                        </Row>
                        <Row className="classes">
                            {classes}
                        </Row>
                    </Col>
                </Row>
                <footer>
                    Copyright &#169; 2020<br/> Rachel Taylor
                </footer>
            </div>
        )
    }
}

export default MainPage;