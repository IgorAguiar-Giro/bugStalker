test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt); //check if date is ISO8601

  expect(responseBody.dependencies.database.version).toEqual("16.0"); //hardcoded test version for Postgres Version

  expect(responseBody.dependencies.database.max_connections).toEqual(100); //hardcoded test for max connections

  expect(responseBody.dependencies.database.opened_connections).toEqual(1); //Test for Opened Connections
});
