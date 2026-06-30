import { Badge } from "@/components/ui/badge";
import type { EventStatus } from "../interfaces/event";

type EventStatusTagProps = {
  status: EventStatus;
};

export const EventStatusTag = (props: EventStatusTagProps) => {
  const { status = "upcoming" } = props;

  const getVariant = (status: EventStatus): string => {
    switch (status) {
      case "upcoming":
        return "brandSecondary";
      case "live":
        return "brand";
      case "past":
        return "destructive";
      case "ongoing":
        return "success";
      default:
        return "default";
    }
  };

  return (
    <Badge variant={getVariant(status) as keyof typeof Badge} className="w-fit">
      {status.toUpperCase()}
      {status === "live" && (
        <span className="ml-2 inline-flex h-2 w-2 animate-ping rounded-full bg-red-500" />
      )}
    </Badge>
  );
};
