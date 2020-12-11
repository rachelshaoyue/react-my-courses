import React, {Component} from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

class AcademicYear extends Component {
    constructor(props) {
        super(props);
    }

    updateTerms = (apiResponse) => {
        let i;
        let yearList = [];
        let semesterList = [];

        for(i = 0; i < apiResponse[0].length; i++){
            yearList.push(apiResponse[0][i]);
        }

        for(i = 0; i < apiResponse[1].length; i++){
            semesterList.push(apiResponse[1][i]);
        }
        this.props.updateTerms(yearList, semesterList);
    };

    fetchTerms = () => {
        //In package.json add "proxy": "http://localhost:5000"
        //This will allow redirect to REST api in Flask w/o CORS errors
        fetch('/termData')
            .then(
                response => response.json()
            )//The promise response is returned, then we extract the json data
            .then (jsonOutput => //jsonOutput now has result of the data extraction
                {
                    this.updateTerms(jsonOutput)
                }
            );
    };

    componentDidMount(){
        this.fetchTerms();
    }

    render() {
        let years = this.props.years.map(year => {
            const link = '#' + year;
            return (
                <NavItem>
                    <div className="dropdown-semesters">
                        <NavLink className="year-item" href={link}>{year}</NavLink>
                        <Nav vertical>
                            {this.props.semesters.map(semester => {
                                const link = "#" + year + "_" + semester;
                                return (
                                    <NavItem>
                                        <NavLink className="semester-item" href={link}>{semester}</NavLink>
                                    </NavItem>
                                )
                            })}
                        </Nav>
                    </div>
                </NavItem>
            )
        });

        return (
            <div className="AcademicYear">
                <Nav vertical>
                    {years}
                </Nav>
            </div>
        )
    }
}

export default AcademicYear;