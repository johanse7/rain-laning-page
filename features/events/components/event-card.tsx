"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Event } from "@/features/events/interfaces/event";
import { formatDate } from "@/lib/utils";
import { CalendarDays, MapPin } from "lucide-react";
import { useEventStatus } from "../hooks/useEventStatus";
import { EventStatusTag } from "./event-status-tag";

type EventCardProps = {
  event: Event;
};

export const EventCard = (props: EventCardProps) => {
  const { event } = props;

  const { countDownFormated, eventStatus, timeEventFormated } = useEventStatus(
    event.startDate,
    event.endDate,
  );

  return (
    <Card key={event.title} variant="surfaceSoft" className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          {eventStatus && <EventStatusTag status={eventStatus} />}
          {countDownFormated && (
            <Badge variant="brand" className="w-fit">
              Comienza en {countDownFormated}
            </Badge>
          )}
          {timeEventFormated && (
            <Badge variant="brandSoft" className="w-fit">
              Termina en {timeEventFormated}
            </Badge>
          )}
        </div>

        <CardTitle className="text-2xl text-brand-foreground">
          {event.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pb-6 text-brand-muted">
        <p>{event.description}</p>
        <div className="space-y-2 text-sm text-brand-foreground flex flex-col">
          <div className="inline-flex gap-2 items-center">
            <CalendarDays className="size-4 text-brand-primary" />
            {formatDate(event.startDate)} - {formatDate(event.endDate)}
          </div>
          <div className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-brand-primary" />
            {event.location}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
