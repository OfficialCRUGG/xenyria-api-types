import { RESTPlayerListServer } from "../interfaces";

export interface RESTGetAPINetworkPlayerListResponse {
  success: boolean;
  data?: RESTPlayerListServer[];
  message?: string;
}

export interface RESTGetAPINetworkMaintenanceResponse {
  success: boolean;
  data?: {
    scheduled: boolean;
    scheduled_timestamp: number;
    maintenance: boolean;
  };
}
