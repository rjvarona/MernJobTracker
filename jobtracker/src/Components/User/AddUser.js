import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


debugger
export default class CreateYeet extends Component {
    constructor(props) {
        super(props);


        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);

        this.onSubmit = this.onSubmit.bind(this);


        this.state = {

            name:'',
            DOB: '',
            PreferredJob: '',

        }
    }


    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeDOB(e) {
        this.setState({
            DOB: e.target.value
        });
    }

    onChangePreferredJob(e) {
        this.setState({
            PreferredJob: e.target.value
        });
      
    }


    onSubmit(e) {
        e.preventDefault();
        const user = {

            Name: this.state.name,
            DOB: this.state.DOB,
            PreferredJob: this.state.PreferredJob,
        }
        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));


        window.location = '/users'
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <form onSubmit={this.onSubmit}>

                            <Card >
                                <h3 style={{ textAlign: "center" }}>Create User</h3>
                                <CardActionArea>

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        
                                            <TextField
                                                id="standard-multiline-flexible"
                                                label="header"
                                                required
                                                multiline
                                                rowsMax={4}
                                                value={this.state.name}
                                                onChange={this.onChangeName}
                                            />
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <TextField
                                                type="text"
                                                required
                                                label="user"
                                                multiline
                                                className="form-control"
                                                value={this.state.DOB}
                                                rows={3}
                                                onChange={this.onChangeDOB}
                                            />
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <TextField
                                                type="text"
                                                required
                                                label="PreferredJob"
                                                multiline
                                                className="form-control"
                                                value={this.state.PreferredJob}
                                                rows={3}
                                                onChange={this.onChangePreferredJob}
                                            />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <br/>
                                <br/>
                                <CardActions>

                                    <Button size="small" color="primary" type="submit" value="Create User">
                                        <input value="create" type="submit" className="btn btn-primary" />

                                    </Button>
                                </CardActions>
                            </Card>

                        </form>

                        <div class="col-4"></div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        )
    }
}