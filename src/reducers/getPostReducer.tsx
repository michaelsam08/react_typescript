interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface UserPostAction {
  type: string;
  payload: any;
}

export default (state: Post[] = [], action: any) => {
  switch (action.type) {
    case "GET_USERPOST":
      return action.payload;
    default:
      return state;
  }
};
