export default function handler(_request, response) {
  response.setHeader('Cache-Control', 'public, max-age=300, s-maxage=3600');
  response.status(410).send('Gone');
}
