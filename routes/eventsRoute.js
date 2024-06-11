import express from "express";

import { getEvents } from "../services/events/getEvents.js";
import { getEventById } from "../services/events/getEventById.js";
import { createEvent } from "../services/events/createEvent.js";
import { updateEventById } from "../services/events/updateEventById.js";
import { deleteEvent } from "../services/events/deleteEvent.js";

import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const { title } = req.query;
    const events = getEvents(title);
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while getting list of events!");
  }
});

router.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const event = getEventById(id);

    if (!event) {
      res.status(404).send(`Event with id ${id} was not found!`);
    } else {
      res.status(200).json(event);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while getting event by id!");
  }
});

router.post("/", authMiddleware, (req, res) => {
  // try {
  const {
    createdBy,
    title,
    description,
    image,
    categoryIds,
    location,
    startTime,
    endTime,
  } = req.body;
  const newEvent = createEvent(
    createdBy,
    title,
    description,
    image,
    categoryIds,
    location,
    startTime,
    endTime
  );
  res.status(201).json(newEvent);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).send("Something went wrong while creating new event!");
  // }
});

router.put("/:id", authMiddleware, (req, res) => {
  try {
    const { id } = req.params;
    const {
      createdBy,
      title,
      description,
      image,
      categoryIds,
      location,
      startTime,
      endTime,
    } = req.body;
    const updatedEvent = updateEventById(
      id,
      createdBy,
      title,
      description,
      image,
      categoryIds,
      location,
      startTime,
      endTime
    );
    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while updating event by id!");
  }
});

router.delete("/:id", authMiddleware, (req, res) => {
  try {
    const { id } = req.params;
    const deletedEventId = deleteEvent(id);

    if (!deletedEventId) {
      res.status(404).send(`Event with id ${id} was not found!`);
    } else {
      res.status(200).json({
        message: `Event with id ${deletedEventId} was deleted!`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while deleting event by id!");
  }
});

export default router;
