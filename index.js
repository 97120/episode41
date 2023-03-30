import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3client.js";

const bucketParams = { Bucket: "msquarefdc" }

const run = async () =>
{
    try
    {
        const data = await s3Client.send( new ListObjectsCommand( bucketParams ) )
        console.log( "success", data );
        return data;
    } catch ( error )
    {
        console.log( error )
    }
}
run()