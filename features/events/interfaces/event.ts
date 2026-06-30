export interface Event {
  title: string;
  startDate: Date;
  endDate: Date;
  location: string;
  description: string;
}

export type EventStatus = "upcoming" | "live" | "past" | "ongoing";