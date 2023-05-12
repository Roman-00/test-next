import type { NextApiRequest, NextApiResponse } from 'next';
import resultsMock from '../../__mocks__/ru/results.json';

const handler = (req: NextApiRequest, res: NextApiResponse<ResultsItemType[]>) => {
    res.status(200).json(resultsMock);
}

export default handler;
