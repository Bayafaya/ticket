import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";
import { useMemo } from "react";

import dayjs from "@/shared/lib/dayjs/dayjsWithLocale";

dayjs.extend(duration);
dayjs.extend(customParseFormat);
type UseAddTimeProps = {
    time?: string;
    durationTime?: string;
};

export const useAddTime = ({ time, durationTime }: UseAddTimeProps) => {
  const endTime = useMemo(() => {
    if (!time || !durationTime) return null;

    const parts = durationTime.split(":").map(Number);

    const h = parts[0] ?? 0;
    const m = parts[1] ?? 0;
    const s = parts[2] ?? 0;

    const dur = dayjs.duration({ hours: h, minutes: m, seconds: s });

    return dayjs(time, "HH:mm").add(dur).format("HH:mm");
  }, [time, durationTime]);

  return { endTime };
};
