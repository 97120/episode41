import { S3 } from "@aws-sdk/client-s3";

const s3Client = new S3( {
    endpoint: "https://sgp1.digitaloceanspaces.com",
    region: "asia",
    credentials: {
        accessKeyId: "DO00BP7U9JNXC6LDEM3J",
        secretAccessKey: "N3vZ3itN4GBvEJtZsCR5yac5dwfSWNKQaRwYoWQF5P8",
    }
} )
export { s3Client }