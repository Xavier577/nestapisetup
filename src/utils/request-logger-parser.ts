import { Request } from 'express';

export default function requestParser(req: Request) {
  return JSON.stringify({
    method: req.method,
    path: req.path,
    origin: req.headers.origin,
    headers: req.headers,
    body: req.body,
    query: req.query,
    params: req.params,
    session: (req as any).session,
    clientInfo: {
      ip: req.socket.remoteAddress,
      ipVersion: req.socket.remoteFamily,
    },
    timestamp: new Date(),
  });
}
