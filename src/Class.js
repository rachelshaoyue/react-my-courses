import React, {Component} from 'react';
import {Card, CardHeader, CardBody, CardTitle, CardText} from 'reactstrap';

class Class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
        };
    }

    updateClasses = (apiResponse) => {
        let i;
        let classList = [];
        if(apiResponse.length === 0){
            this.setState({courses: ["No Courses or Co-op"]})
        }

        for(i = 0; i < apiResponse.length; i++){
            let dict = {
                "name": apiResponse[i][0],
                "description": apiResponse[i][1],
                "units": apiResponse[i][2],
                "grade": apiResponse[i][3],
                "semester": apiResponse[i][4],
                "year": apiResponse[i][5],
                "study": apiResponse[i][6]
            };
            classList.push(dict);
        }

        this.setState({courses: classList});
    };

    fetchClasses = (year, semester) => {
        //In package.json add "proxy": "http://localhost:5000"
        //This will allow redirect to REST api in Flask w/o CORS errors
        fetch(`/classData/${year}/${semester}`)
            .then(
                response => response.json()
            )//The promise response is returned, then we extract the json data
            .then (jsonOutput => //jsonOutput now has result of the data extraction
                {
                    this.updateClasses(jsonOutput)
                }
            );
    };

    componentDidMount(){
        this.fetchClasses(this.props.year, this.props.semester);
    }

    render() {
        let courses = this.state.courses.map(course => {
            return(
                <Card>
                    <CardHeader>{course.name} ({course.units})</CardHeader>
                    <CardBody>
                        <CardTitle>{course.description}</CardTitle>
                        <CardText>{course.grade}</CardText>
                    </CardBody>
                </Card>
        )
        });

        let noClasses = <p className="none">No Courses or Co-op</p>;
        return (
            <div className="Class">
                {
                    (this.state.courses.length === 0)
                    ? noClasses
                    : courses
                }
            </div>
        )
    }
}

export default Class;