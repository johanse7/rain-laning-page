import { formatCountDown } from "@/lib/utils";
import { useEffect, useState } from "react";

type EventStatus = "upcoming" | "ongoing" | "past" | "live";

const DEFAULT_COUNTDOWN_TIME = 30 * 60 * 1000;

export const useEventStatus = (startDate: Date, endDate: Date) => {
  const [countDown, setCountDown] = useState<number>(0);
  const [missingTimeCurrentEvent, setMissingTimeCurrentEvent] = useState(() => {
    const now = new Date();
    if (now >= startDate && now <= endDate) {
      return endDate.getTime() - now.getTime();
    }
    return null;
  });

  const [eventStatus, setEventStatus] = useState<EventStatus | undefined>(
    undefined,
  );

  //Initialize event status
  useEffect(() => {
    initEventStatus();
  }, []);

  ///Count down
  useEffect(() => {
    const now = new Date();
    const differenceTime = startDate.getTime() - now.getTime();

    let timer: NodeJS.Timeout | null = null;
    if (differenceTime > 0 && differenceTime <= DEFAULT_COUNTDOWN_TIME) {
      setCountDown(differenceTime);
      timer = setInterval(() => {
        setCountDown((prev) => {
          if (prev <= 0) {
            clearInterval(timer!);
            return 0;
          }
          return prev - 1000;
        });
      }, 1000);

      return;
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [startDate]);

  //Event status change when countdown ends to live
  useEffect(() => {
    if (countDown <= 0 && eventStatus === "upcoming") {
      setEventStatus("live");
    }
  }, [countDown]);

  ///start counting the time of the event
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (eventStatus === "live") {
      timer = setInterval(() => {
        setMissingTimeCurrentEvent((time) => {
          if (time === null) {
            const durationEvent = endDate.getTime() - startDate.getTime();
            return durationEvent - 1000;
          }

          if (time <= 0) {
            clearInterval(timer!);
            return 0;
          }
          return time - 1000;
        });
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [eventStatus]);

  ///Event status finalization
  useEffect(() => {
    if (
      eventStatus === "live" &&
      missingTimeCurrentEvent !== null &&
      missingTimeCurrentEvent <= 0
    ) {
      setEventStatus("past");
    }
  }, [eventStatus, missingTimeCurrentEvent]);

  const initEventStatus = () => {
    const now = new Date();
    const eventDate = new Date(startDate);

    if (eventDate > now) {
      setEventStatus("upcoming");
      return;
    }

    const endDateTime = new Date(endDate);
    if (now >= eventDate && now <= endDateTime) {
      setEventStatus("live");
      return;
    }

    if (eventDate < now) {
      setEventStatus("past");
      return;
    }

    setEventStatus("ongoing");
  };

  return {
    eventStatus,
    countDownFormated: countDown > 0 ? formatCountDown(countDown) : null,
    timeEventFormated:
      missingTimeCurrentEvent && missingTimeCurrentEvent > 0
        ? formatCountDown(missingTimeCurrentEvent)
        : null,
  };
};
