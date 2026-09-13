import type { EventStatus } from "@/features/events/interfaces/event";
import { formatCountDown } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

const DEFAULT_COUNTDOWN_TIME = 30 * 60 * 1000;

export const useEventStatus = (startDate: Date, endDate: Date) => {
  const startTime = startDate.getTime();
  const endTime = endDate.getTime();
  const hasValidDates = Number.isFinite(startTime) && Number.isFinite(endTime);
  const hasValidRange = hasValidDates && endTime >= startTime;
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!hasValidRange) {
      return;
    }

    if (Date.now() > endTime) {
      return;
    }

    const timer = setInterval(() => {
      const current = Date.now();

      if (current > endTime) {
        clearInterval(timer);
        setNow(endTime);
        return;
      }

      setNow(current);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [endTime, hasValidRange, startTime]);

  const eventStatus = useMemo<EventStatus>(() => {
    if (!hasValidRange) {
      return "past";
    }

    if (now < startTime) {
      return "upcoming";
    }

    if (now <= endTime) {
      return "live";
    }

    return "past";
  }, [endTime, hasValidRange, now, startTime]);

  const countDown = useMemo(() => {
    if (!hasValidRange) {
      return null;
    }
    console.log("now", now);
    const differenceTime = startTime - now;

    if (differenceTime > 0 && differenceTime <= DEFAULT_COUNTDOWN_TIME) {
      return differenceTime;
    }

    return null;
  }, [hasValidRange, now, startTime]);

  const missingTimeCurrentEvent = useMemo(() => {
    if (!hasValidRange || eventStatus !== "live") {
      return null;
    }

    return Math.max(endTime - now, 0);
  }, [endTime, eventStatus, hasValidRange, now]);

  return {
    eventStatus,
    countDownFormated: countDown ? formatCountDown(countDown) : null,
    timeEventFormated:
      missingTimeCurrentEvent && missingTimeCurrentEvent > 0
        ? formatCountDown(missingTimeCurrentEvent)
        : null,
  };
};
