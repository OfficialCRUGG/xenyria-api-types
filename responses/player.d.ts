import { Group, Language } from "../enums";

export interface RESTGetAPIPlayerFetchResponse {
  success: boolean;
  data?: {
    xen_id: number;
    username: string;
    uuid: string;
    playtime_in_seconds: number;
    language: Language;
    token: number;
  };
  message?: string;
}

export interface RESTGetAPIPlayerVotesResponse {
  success: boolean;
  data?: {
    total_vote_count: number;
    current_vote_streak: number;
    queued_vote_rewards: number;
  };
  message?: string;
}

export interface RESTGetAPIPlayerGroupResponse {
  success: boolean;
  data?: {
    group_id: Group;
    membership_end: number;
  };
  message?: string;
}
