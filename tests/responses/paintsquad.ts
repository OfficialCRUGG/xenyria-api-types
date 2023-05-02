export default async function ({ test, get, logger }) {
  await test(
    "RESTGetAPIPaintSquadVersionDataResponse",
    "/paintsquad/version_data"
  );

  await test(
    "RESTGetAPIPaintSquadLeaderboardResponse",
    "/paintsquad/leaderboard"
  );
  await test(
    "RESTGetAPIPaintSquadLeaderboardResponse",
    "/paintsquad/leaderboard?timespan=month&ranking_type=eightball&skin_data=false"
  );
  await test(
    "RESTGetAPIPaintSquadLeaderboardResponse",
    "/paintsquad/leaderboard?timespan=month&ranking_type=eightball&skin_data=true"
  );

  await test(
    "RESTGetAPIPaintSquadPlayerStatsResponse",
    "/paintsquad/player_stats?xen_id=4964"
  );
  await test(
    "RESTGetAPIPaintSquadPlayerStatsResponse",
    "/paintsquad/player_stats?xen_id=9999999999999999"
  );

  await test(
    "RESTGetAPIPaintSquadAssetRenderResponse",
    "/paintsquad/asset_render?asset_name=slurret"
  );
  await test(
    "RESTGetAPIPaintSquadAssetRenderResponse",
    "/paintsquad/asset_render?asset_name=invalidassetname"
  );

  await test(
    "RESTGetAPIPaintSquadArenaImageResponse",
    "/paintsquad/arena_image?asset_name=urchin_underpass"
  );
  await test(
    "RESTGetAPIPaintSquadArenaImageResponse",
    "/paintsquad/arena_image?asset_name=invalidarenaname"
  );

  await test(
    "RESTGetAPIPaintSquadLastMatchesResponse",
    "/paintsquad/last_matches?xen_id=4964"
  );
  await test(
    "RESTGetAPIPaintSquadLastMatchesResponse",
    "/paintsquad/last_matches?xen_id=9999999999999999"
  );

  const response = await get("/paintsquad/last_matches?xen_id=4964");
  const match_id = response?.data?.data?.[0]?.match_id;
  if (match_id) {
    logger.debug("Successfully found a valid Match ID to test with.");
    await test(
      "RESTGetAPIPaintSquadMatchDetailsResponse",
      `/paintsquad/match_details?match_id=${match_id}`
    );
  } else {
    logger.warn("Couldn't find a Match ID to test with. Skipping this test...");
  }
  await test(
    "RESTGetAPIPaintSquadMatchDetailsResponse",
    "/paintsquad/match_details?match_id=9999999999999999"
  );

  await test(
    "RESTGetAPIPaintSquadInventoryResponse",
    "/paintsquad/inventory?xen_id=4964"
  );
  await test(
    "RESTGetAPIPaintSquadInventoryResponse",
    "/paintsquad/inventory?xen_id=9999999999999999"
  );

  await test(
    "RESTGetAPIPaintSquadWeaponStatsResponse",
    "/paintsquad/weapon_stats?xen_id=4964"
  );
  await test(
    "RESTGetAPIPaintSquadWeaponStatsResponse",
    "/paintsquad/weapon_stats?xen_id=9999999999999999"
  );

  await test(
    "RESTGetAPIPaintSquadPlayerDataResponse",
    "/paintsquad/player_data?xen_id=4964"
  );
  await test(
    "RESTGetAPIPaintSquadPlayerDataResponse",
    "/paintsquad/player_data?xen_id=9999999999999999"
  );
}
