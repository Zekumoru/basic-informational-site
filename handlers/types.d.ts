import { IncomingMessage, ServerResponse } from "node:http";

type Response = ServerResponse<IncomingMessage> & {
  req: IncomingMessage;
};

type RequestHandler = (
  req: IncomingMessage,
  res: Response,
) => Response | Promise<Response>;

export type { RequestHandler, Response };
