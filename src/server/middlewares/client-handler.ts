import * as path from 'path';
import { Request, Response, NextFunction } from 'express';

export const CLIENT_ROUTES = ['/about', '/contact', '/oops', '/registration'];

export function clientHandler(req: Request, res: Response, next: NextFunction) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
}
