import eventData from "../../data/events.json" assert { type: "json" };

export const getEventById = (id) => {
  return eventData.events.find((event) => event.id === id);
};
