import { RESTGetAPIResponse, RESTPlayerListServer } from "../interfaces";

export interface RESTGetAPINetworkPlayerListResponse
  extends RESTGetAPIResponse {
  data?: RESTPlayerListServer[];
}

export interface RESTGetAPINetworkMaintenanceResponse
  extends RESTGetAPIResponse {
  data?: {
    scheduled: boolean;
    scheduled_timestamp: number;
    maintenance: boolean;
  };
}
