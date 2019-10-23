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
        
        var api = {
            api1: false,
            api2: false,
            api3: false,
            api4: false,
            api5: false,
            api6: false,

        }

        this.state = {
            api: api,
            //items: [],
            //isLoaded: false,
            apilist: apiArray
        }



    }
    toggle(id, flag) {
        const obj = { [id]: flag }
        const newApi = { ...this.state.api, ...obj }
        this.setState({
            api: newApi
        })
    }
    componentDidMount() {

        this.toggle("api1", true)
        this.toggle("api2", true)

        // apilist.forEach(
        //     function (row) {
        //         if (row.name === "api1") {
        //             fetch("http://www.mocky.io/v2/5da316a22f00005b008a06de")
        //                 .then(res => res.json())
        //                 .then(result => {
        //                     if (result.status === "UP") {
        //                         row.status = true;
        //                     }
        //                     this.setState({});
        //                 });
        //         }
        //     });
    }

    render() {

        console.log(this.state.api)
        console.log("asd", Object.keys(this.state.api))
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
                        Object.keys(this.state.api).map((item) =>
                            <tr><td> {item} </td> <td> {this.state.api[item] === true ? "up" : "down"}</td></tr>)
                    }

                </tbody>
            </table>
        );
    }
}

export default ApiTable;