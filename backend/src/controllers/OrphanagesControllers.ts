import { request, Request, Response } from "express";
import { getRepository } from "typeorm";
import Orphanage from "../models/Orphanage";

export default {
  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;
    const orphanagesRepository = getRepository(Orphanage);
    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map((image) => {
      return { path: image.filename };
    });
    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    };
    const orphanage = orphanagesRepository.create(data);
    await orphanagesRepository.save(orphanage);
    return response.status(201).json(orphanage);
  },
};
