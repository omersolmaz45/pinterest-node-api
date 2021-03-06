// Type definitions for pinterest-node-api

declare class BaseClient {

}

declare class Users extends BaseClient {

  getUserOwnInfo(params: any): Promise<any>;
  getUserBoards(params: any): Promise<any>;
  getUserBoardSuggestions(params: any): Promise<any>;
  getUserPins(params: any): Promise<any>;
  searchUserBoards(params: any): Promise<any>;
  searchUserPins(params: any): Promise<any>;
  followBoard(params: any): Promise<any>;
  followUser(params: any): Promise<any>;
  getUserFollowers(params: any): Promise<any>;
  getUserFollowingBoards(params: any): Promise<any>;
  getUserFollowingInterests(params: any): Promise<any>;
  getUserFollowingUsers(params: any): Promise<any>;
  unfollowBoard(board: string): Promise<any>;
  unfollowUser(user: string): Promise<any>;
  getUserInfo(user: string): Promise<any>;

}

declare class Boards extends BaseClient {

  createBoard(params: any): Promise<any>;
  getBoard(board: string): Promise<any>;
  getBoardPins(board: string): Promise<any>;
  getUserBoards(params: any): Promise<any>;
  updateBoard(board: string, params: any): Promise<any>;
  deleteBoard(board: string): Promise<any>;

}

declare class Pins extends BaseClient {

  createPin(params: any): Promise<any>;
  getPin(pin: string): Promise<any>;
  getBoardPins(board: string): Promise<any>;
  getUserPins(params: any): Promise<any>;
  updatePin(pin: string, params: any): Promise<any>;
  deletePin(pin: string): Promise<any>;

}

declare class Sections extends BaseClient {

  createBoardSection(board: string, params: any): Promise<any>;
  getBoardSections(board: string): Promise<any>;
  getBoardSectionPins(section: string): Promise<any>;
  deleteBoardSection(section: string): Promise<any>;

}

declare class pinterestNodeClient {

  constructor()

  constructor(accessToken: string);

  setHost(host?: string, port?: string, protocol?: string): void;

  setUserToken(userToken: string): void;

  users: Users;
  boards: Boards;
  pins: Pins;
  sections: Sections;
}

declare namespace pinterestNodeClient {

}
export = pinterestNodeClient;