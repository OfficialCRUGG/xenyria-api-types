export default async function ({ test }) {
  await test("RESTGetAPITestingHelloResponse", "/testing/hello");
}
