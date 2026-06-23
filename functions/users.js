export async function onRequest(context) {
  const { DB } = context.env;

  const result = await DB.prepare(
    "SELECT COUNT(*) as total FROM users"
  ).first();

  return Response.json(result);
}
