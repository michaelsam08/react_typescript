interface UserListAction {
  type: string;
  payload: any;
}

export default (state: Object[] = [], action: any) => {
  switch (action.type) {
    case "GET_USERLIST":
      return action.payload;
    default:
      return state;
  }
};
