import React from "react";
import { connect } from "react-redux";
import { getUserPost, getUserList } from "../actions";
import Search from "./search";
import { Table } from "semantic-ui-react";
import CSS from "csstype";

const searchStyle: CSS.Properties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center"
};
const tableInfo: CSS.Properties = {
  cursor: "pointer"
};
interface User {
  id: number;
  email: string;
  name: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface AppState {
  users: User[];
  posts: Post[];
}

interface DispatchProps {
  getUsers: () => void;
  getPost: (userId: number) => void;
}

interface OwnProps {
  users: User[];
}

type Props = DispatchProps & OwnProps;

interface State {
  searchInput: string;
}

class UserList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  componentDidMount = () => {
    this.props.getUsers();
  };

  private renderTableData = () => {
    const { users, getPost } = this.props;
    const { searchInput } = this.state;

    const userArray =
      searchInput.length > 0
        ? users.filter(user => user.name.toLowerCase().includes(searchInput))
        : users;
    return userArray.map(user => (
      <Table.Row style={tableInfo}>
        <Table.Cell>
          <a
            id={user.id.toString()}
            onClick={e => getPost(Number(e.currentTarget.id))}
          >
            {user.name}
          </a>
        </Table.Cell>
        <Table.Cell>
          <a
            id={user.id.toString()}
            onClick={e => getPost(Number(e.currentTarget.id))}
          >
            {user.email}{" "}
          </a>
        </Table.Cell>
        <Table.Cell>
          <a
            id={user.id.toString()}
            onClick={e => getPost(Number(e.currentTarget.id))}
          >
            {user.address.city}{" "}
          </a>
        </Table.Cell>
        <Table.Cell>
          <a
            id={user.id.toString()}
            onClick={e => getPost(Number(e.currentTarget.id))}
          >
            {user.company.name}{" "}
          </a>
        </Table.Cell>
      </Table.Row>
    ));
  };
  public render() {
    return (
      <div>
        <br />
        <div style={searchStyle}>
          <Search
            handleSearchInput={(input: string) =>
              this.setState({ searchInput: input })
            }
          />
        </div>
        <Table celled padded selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>City</Table.HeaderCell>
              <Table.HeaderCell>Company</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderTableData()}</Table.Body>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (appState: AppState): OwnProps => {
  return {
    users: appState.users
  };
};

const mapDispatchToProps = {
  getUsers: getUserList,
  getPost: getUserPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
