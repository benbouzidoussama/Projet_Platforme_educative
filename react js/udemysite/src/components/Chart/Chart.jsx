import React, { Component, Fragment } from 'react'; // PureComponent supprimé car non utilisé
import { Col, Container, Row, Tooltip } from 'react-bootstrap'
import "../Chart/Chart.css"
import "../../asset/css/Bootstrap.min.css"
import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts'
import AppUrl from '../../AppUrl/AppUrl'
import RestApi from '../../AppUrl/RestApi'
import ReactHtmlParser from 'react-html-parser';

export class Chart extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            tech_description:""


        }
    }
    componentDidMount(){
            RestApi.GetRequest(AppUrl.Chart).then(result=>{
                this.setState({data:result});
            })
            RestApi.GetRequest(AppUrl.Home).then(result => {
                this.setState({ tech_description: result[0]["tech_description"] });
            })
    }




    render() {

        return (
            <Fragment>
                <Container className='p-5'>
                <h1 className='serviceTitle text-center'>TECHNOLOGY USED</h1>
                <div className='botton'></div>
                    <Row>
                        <Col style={{ width: '50%', height: '300px' }} lg={6} md={12} sm={12} >
                            <h4 className="text-center">Experinces</h4>

                            <ResponsiveContainer >
                                <BarChart width={150} height={40} data={this.state.data}>

                                    <XAxis dataKey="x_data" />
                                    <Tooltip />

                                    <Bar dataKey="y_data" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>


                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className='chartDescription'>
                                { ReactHtmlParser(this.state.tech_description) }
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment >
        )
    }
}

export default Chart