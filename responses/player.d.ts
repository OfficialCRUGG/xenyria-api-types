import { Group, Language } from "../enums";
import { RESTGetAPIResponse } from "../interfaces";

export interface RESTGetAPIPlayerFetchResponse extends RESTGetAPIResponse {
  data?: {
    xen_id: number;
    username: string;
    uuid: string;
    playtime_in_seconds: number;
    language: Language;
    token: number;
  };
}

export interface RESTGetAPIPlayerVotesResponse extends RESTGetAPIResponse {
  data?: {
    total_vote_count: number;
    current_vote_streak: number;
    queued_vote_rewards: number;
  };
}

export interface RESTGetAPIPlayerGroupResponse extends RESTGetAPIResponse {
  data?: {
    group_id: Group;
    membership_end: number;
  };
}
