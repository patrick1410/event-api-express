import eventData from "../../data/events.json" assert { type: "json" };

export const deleteEvent = (id) => {
  const index = eventData.events.findIndex((event) => event.id === id);

  if (index === -1) {
    return null;
  }

  eventData.events.splice(index, 1);
  return id;
};
