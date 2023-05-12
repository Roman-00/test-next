import type { NextApiRequest, NextApiResponse } from 'next';
import usefulMock from '../../__mocks__/en/useful-links.json';

const handler = (req: NextApiRequest, res: NextApiResponse<UsefulLinksItemType[]>) => {
    res.status(200).json(usefulMock);
}

export default handler;
