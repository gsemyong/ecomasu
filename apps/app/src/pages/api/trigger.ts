import { createPagesRoute } from "@trigger.dev/nextjs";
import { trigger } from "@/trigger";

import "@/jobs";

//this route is used to send and receive data with Trigger.dev
const { handler, config } = createPagesRoute(trigger);
export { config };

export default handler;
