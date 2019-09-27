import React from "react";
import { connect } from "react-redux";
import { getUserPost, getUserList } from "../actions";
import Search from "./search";
import { Table } from "semantic-ui-react";

// const pageCont = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   border: "5px solid gray",
//   width: "100%"
// } as React.CSSProperties;
// const tableLabels = {
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "space-around",
//   border: "2px solid green",
//   fontSize: "24px",
//   width: "100%",
//   minWidth: "600px"
// } as React.CSSProperties;
// const tableInfo = {
//   width: "100%",
//   cursor: "pointer",
//   textAlign: "center"
// } as React.CSSProperties;

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
      <Table.Row>
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
        <Table celled padded>
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
        <div>
          <Search
            handleSearchInput={(input: string) =>
              this.setState({ searchInput: input })
            }
          />
        </div>
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
