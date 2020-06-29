// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiHandler } from 'next';
require('date-utils');

/**
 * 雑に現在時刻を返すAPI
 */
const handler: NextApiHandler = (req, res) => {
  res.statusCode = 200;
  const dt = new Date();
  const format = dt.toTimeString();
  res.json({ now: format });
}

export default handler;
