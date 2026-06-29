import durationPlugin from "dayjs/plugin/duration";
import { useCallback, useMemo } from "react";

import dayjs from "@/shared/lib/dayjs/dayjsWithLocale";

dayjs.extend(durationPlugin);

type UseFormatDurationTimeProps = {
    durationTime?: string;
};

export const useFormatDurationTime = ({
  durationTime,
}: UseFormatDurationTimeProps) => {
  const formattedDuration = useMemo(() => {
    if (!durationTime) return "--";

    const [h, m, s] = durationTime.split(":").map(Number);

    const d = dayjs.duration({
      hours: h || 0,
      minutes: m || 0,
      seconds: s || 0,
    });

    return `${d.hours() ? d.hours() + "ч" : ""} ${
            d.minutes() ? d.minutes() + "м" : ""
        } ${d.seconds() ? d.seconds() + "с" : ""}`.trim();
  }, [durationTime]);
  
  const getForamtedDurationTime = useCallback((durTime: string)=> {
    if (!durTime) return "--";

    const [h, m, s] = durTime.split(":").map(Number);

    const d = dayjs.duration({
      hours: h || 0,
      minutes: m || 0,
      seconds: s || 0,
    });

    return `${d.hours() ? d.hours() + "ч" : ""} ${
            d.minutes() ? d.minutes() + "м" : ""
        } ${d.seconds() ? d.seconds() + "с" : ""}`.trim();
  }, [])

  return {
    formattedDuration,
    getForamtedDurationTime
  };
};
