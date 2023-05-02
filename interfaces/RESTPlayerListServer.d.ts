import { RESTPlayerListPlayer } from ".";

export interface RESTPlayerListServer {
  server_id: string;
  players: RESTPlayerListPlayer[];
}
