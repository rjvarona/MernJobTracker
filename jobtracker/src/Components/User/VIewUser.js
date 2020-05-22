


const  User = props => {
    <tr>
        <td>{props.users.name}</td>
        <td>{props.users.name}</td>
        <td>{props.users.name}</td>
    </tr>
}


export default class ViewUser extends Component {

    constructor(props) {
        super(props);

        this.state = { users: [] }
    }

    componentWillMount() {
        axios.get('http://localhost:5000/users')
            .then(response => {
                this.setState({ users: response.data });
                console.log(this.users);
            })
            .catch((error) => { console.log(error) });
    }
    userTable() {
        return this.state.users.map(curr => {
            return <User users={curr} key={curr._id}  />   
        })
    }
 


    render() {
        return (
            <div className="container">
                <div class="row">
                    {this.userTable()}
                </div>
            </div>
        );
    }
}