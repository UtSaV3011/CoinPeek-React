import React, { Component } from 'react'
import Header from './Header'

class MainPage extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
        this.renderTableData = this.renderTableData.bind(this)
        this.state = {
            tableData: []
        }
    }
    logout() {
        
        localStorage.setItem('isLoggedIn', JSON.stringify(false))
        console.log(localStorage.getItem('isLoggedIn'))
        this.props.logInOut();
    
    }
    componentDidUpdate(prevState) {
        if (prevState.tableData != this.state.tableData) {
            console.log('APIUPDATE')
            fetch('https://api.coincap.io/v2/assets')
                .then(response => response.json())
                .then(dataa => this.setState({ tableData: dataa.data }))
                .catch(error => {
                    // alert('Please Wait')
                    // window. location. reload()
                }
                )
        }

    }
    renderTableData() {
        return this.state.tableData.map((data, index) => {
            const { id, name, priceUSD, supply } = data //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{priceUSD}</td>
                    <td>{supply}</td>
                </tr>
                //    <div>
                /* <tr key={this.state.tableData[0].id}>
                <td>{this.state.tableData[0].id}</td>
                <td>{this.state.tableData[0].name}</td>
                <td>{this.state.tableData[0].priceUSD}</td>
                <td>{this.state.tableData[0].supply}</td>
             </tr>
                <tr key={this.state.tableData[1].id}>
                <td>{this.state.tableData[1].id}</td>
                <td>{this.state.tableData[1].name}</td>
                <td>{this.state.tableData[1].priceUSD}</td>
                <td>{this.state.tableData[1].supply}</td>
             </tr>
                <tr key={this.state.tableData[2].id}>
                <td>{this.state.tableData[2].id}</td>
                <td>{this.state.tableData[2].name}</td>
                <td>{this.state.tableData[2].priceUSD}</td>
                <td>{this.state.tableData[2].supply}</td>
             </tr> */

                //   </div>
            )
        })
    }

    render() {
        return (
            <div>
                <Header />
                <button onClick={this.logout}>Logout</button>
                <table id='Table'>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MainPage
