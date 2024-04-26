export type conversation = {
  img: String;
  members: user[];
  messages: any[];
  type: String;
  name: String;
};

export type user = {
  userName: String;
  friends: user[];
  profilePic: String;
  fullName: String;
};
