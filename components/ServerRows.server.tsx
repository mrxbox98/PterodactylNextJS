import { getSession } from "next-auth/react"
import ServerRow from "./ServerRow.client";

const ServerRows = async () => {

    let session = await getSession();

    if(!session)
    {
        return (
            <>
                <p className="text-red-500">Not Authorized</p>
            </>
        )
    }

    let request = await fetch("/api/client");

    let response = await request.json();

    let rows = [];

    for(let i=0;i<response.data.length;i++)
    {
        rows.push(<ServerRow name={response.data[i].attributes.name} ></ServerRow>)
    }

    return (
        <tbody>
            {rows}
        </tbody>
    )

}

export default ServerRows