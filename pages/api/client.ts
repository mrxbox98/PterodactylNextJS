import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const session = await getSession({ req })

    if(!session && !req.headers["Authorization"])
    {
        res.status(401);
        res.end();
    }
    else if(session)
    {
        session.user!.id;
    }

    res.status(200).json({ name: 'John Doe' })
}