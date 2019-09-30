export interface User {
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
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface AppState {
  users: User[];
  posts: Post[];
}
