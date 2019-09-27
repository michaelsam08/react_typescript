import React from "react";
import { connect } from "react-redux";

import { Table, Button } from "semantic-ui-react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface AppState {
  users: Object[];
  posts: Post[];
}

interface Props {
  posts: Post[];
}

class UserPost extends React.Component<Props> {
  // constructor(props: any) {
  //   super(props);
  //   this.state = {
  //     postSelected: true
  //   };
  // }
  handleClose = () => {
    const { posts } = this.props;
    if (posts.length === 1) {
      return null;
    }
  };

  render() {
    const { posts } = this.props;
    if (!posts || posts.length < 1) {
      return null;
    }
    const firstPost = posts[0];
    return (
      <div>
        <Button
          onClick={e => this.handleClose}
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
