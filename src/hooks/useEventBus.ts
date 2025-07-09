/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { onEvent, offEvent } from "@fiap-pos-front-end/fiap-tc-shared";

export function useEventBus<T>(event: string, handler: (payload: T) => void) {
  useEffect(() => {
    onEvent(event, handler as any);
    return () => offEvent(event, handler as any);
  }, [event, handler]);
}
