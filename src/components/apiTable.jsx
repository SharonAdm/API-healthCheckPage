import React, { Component } from 'react';

class ApiTable extends Component {

    constructor(props) {
        super(props);

        var apiArray = [
            { name: "api1", status: false, url: "" },
            { name: "api2", status: false, url: "" },
            { name: "api3", status: false, url: "" },
            { name: "api4", status: false, url: "" },
            { name: "api5", status: false, url: "" },
            { name: "api6", status: false, url: "" }
        ];
        this.state = {
            items: [],
            isLoaded: false,
            apilist: apiArray
        }



    }
    componentDidMount() {

        var listOfApi =  this.state.apilist;
        console.log("first message")
        listOfApi.forEach(
            function (row) {
                if (row.name === "api1") {
                    fetch("http://www.mocky.io/v2/5da316a22f00005b008a06de")
                        .then(res => res.json())
                        .then(result => {
                            if (result.status === "UP") {
                                row.status = true;
                            }
                        });
                }
            });

            this.setState ({ listOfApi });
            console.log(this.state.apilist[0]);
    }

    render() {


        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>API</th>
                        <th> Status</th>
                    </tr>

                </thead>
                <tbody>

                    {
                        this.state.apilist.map((api) =>
                            <tr><td>{api.name}</td><td>{api.status ? "true" : "false"}</td></tr>)
                    }

                </tbody>
            </table>
        );
    }
}

export default ApiTable;