export default async function ({ test }) {
  await test("RESTGetAPINetworkPlayerListResponse", "/network/player_list");
  await test("RESTGetAPINetworkMaintenanceResponse", "/network/maintenance");
}
