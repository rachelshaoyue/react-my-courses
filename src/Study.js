import React, {Component} from 'react';

class Study extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studies: []
        }
    }

    updateStudies = (apiResponse) => {
        let i;
        let studyList = [];
        for(i = 0; i < apiResponse.length; i++){
            let dict = {
                "degree": apiResponse[i][1],
                "required": apiResponse[i][2],
                "completed": apiResponse[i][3],
                "needed": apiResponse[i][4]
            };
            studyList.push(dict);
        }

        this.setState({studies: studyList})
    };

    fetchStudies = () => {
        //In package.json add "proxy": "http://localhost:5000"
        //This will allow redirect to REST api in Flask w/o CORS errors
        fetch('/studyData')
            .then(
                response => response.json()
            )//The promise response is returned, then we extract the json data
            .then (jsonOutput => //jsonOutput now has result of the data extraction
                {
                    this.updateStudies(jsonOutput)
                }
            );
    };

    componentDidMount(){
        this.fetchStudies();
    }
    render() {
        let studies = this.state.studies.map(study => {
            return (
                <div>
                    {study.degree}<br/>
                    Credits
                    <ul>
                        <li>Required: {study.required}</li>
                        <li>Completed: {study.completed}</li>
                        <li>Needed: {study.needed}</li>
                    </ul>
                </div>
            )
        });

        return (
            <div className="Study">
                {studies}
            </div>
        )
    }
}

export default Study;