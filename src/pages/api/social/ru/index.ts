import type { NextApiRequest, NextApiResponse } from 'next';
import resultsMock from '../../__mocks__/ru/social.json';

const handler = (req: NextApiRequest, res: NextApiResponse<SocialItemType[]>) => {
    res.status(200).json(resultsMock);
}

export default handler;
