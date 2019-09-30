import React from "react";
import { connect } from "react-redux";

import { Table, Button } from "semantic-ui-react";
import { User, Post, AppState } from "./../types";

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// interface AppState {
//   users: Object[];
//   posts: Post[];
// }

interface Props {
  posts: Post[];
}
interface State {
  postSelected: boolean;
}
class UserPost extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      postSelected: true
    };
  }
  componentDidUpdate(prevProps: Props) {
    if (prevProps.posts !== this.props.posts) {
      this.setState({
        postSelected: true
      });
    }
  }
  handleClose = () => {
    //const { posts } = this.props;
    this.setState({
      postSelected: false
    });
  };

  render() {
    const { posts } = this.props;
    const { postSelected } = this.state;

    if (!posts || posts.length < 1 || postSelected === false) {
      return null;
    }
    const firstPost = posts[0];
    return (
      <div>
        <Button
          onClick={e => this.handleClose()}
          color="red"
          size="tiny"
          floated="left"
        >
          X
        </Button>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Body</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body id="posts">
            <Table.Row key={firstPost.id}>
              <Table.Cell>{firstPost.title}</Table.Cell>
              <Table.Cell>{firstPost.body}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (appState: AppState) => {
  return {
    posts: appState.posts
  };
};

export default connect(mapStateToProps)(UserPost);
