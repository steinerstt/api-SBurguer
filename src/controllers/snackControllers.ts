import { Request, Response } from "express";
import { iSnack } from "../interfaces/snackInterface";
import { getAllSnacksService } from "../services/snack/getAllSnacksService";
import { getSnackService } from "../services/snack/getSnackService";
import { getSnacksSearchService } from "../services/snack/getSnacksSearchService";

export const getAllSnacksController = async (req: Request, res: Response) => {
  const allSnacks = await getAllSnacksService();
  return res.status(200).json(allSnacks);
};

export const getSnackController = async (req: Request, res: Response) => {
  const idSnack: string = req.params.id;
  const snack = await getSnackService(idSnack);
  return res.status(200).json(snack);
};

export const getSnacksSearchController = async (
  req: Request,
  res: Response
) => {
  const textSearch: string = req.params.textSearch;
  const snacks: iSnack[] = await getSnacksSearchService(textSearch);
  return res.status(200).json(snacks);
};
