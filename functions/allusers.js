export async function onRequest(context) {
  const { DB } = context.env;

  const result = await DB.prepare(
    "SELECT * FROM users"
  ).all();

  return Response.json(result.results);
}
