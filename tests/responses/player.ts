export default async function ({ test }) {
  await test("RESTGetAPIPlayerFetchResponse", "/player/fetch?username=CRUGG");
  await test("RESTGetAPIPlayerFetchResponse", "/player/fetch?xen_id=4964");
  await test(
    "RESTGetAPIPlayerFetchResponse",
    "/player/fetch?xen_id=9999999999999999"
  );
  await test(
    "RESTGetAPIPlayerFetchResponse",
    "/player/fetch?xen_id=ThisUsernameDefinetlyDoesNotExistInMinecraft"
  );
  await test(
    "RESTGetAPIPlayerFetchResponse",
    "/player/fetch?uuid=1279b4d9-cd87-487a-b812-dee3c7aae15b"
  );
  await test("RESTGetAPIPlayerFetchResponse", "/player/fetch?uuid=invalid");
  await test("RESTGetAPIPlayerFetchResponse", "/player/fetch");

  await test("RESTGetAPIPlayerVotesResponse", "/player/votes?xen_id=4964");
  await test(
    "RESTGetAPIPlayerVotesResponse",
    "/player/votes?xen_id=9999999999999999"
  );

  await test("RESTGetAPIPlayerGroupResponse", "/player/group?xen_id=4964");
  await test(
    "RESTGetAPIPlayerGroupResponse",
    "/player/group?xen_id=9999999999999999"
  );
}
