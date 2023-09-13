import aws from "aws-sdk";

export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log("/api/post/image ----- filename : " + req.body.filename);
    const filename = req.body.filename;
    //setting
    aws.config.update({
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_KEY,
      region: process.env.REGION,
      signatureVersion: "v4",
    });

    //presignedURL 발급
    const s3 = new aws.S3();
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: `${filename}`,
      Expires: 300,
      ContentType: "image/*",
    };
    s3.getSignedUrl("putObject", params, function (err, url) {
      if (err) {
        console.log("getSignedURL ERROR------!");
        return console.log(err);
      }
      res.status(200).json(url);
    });
  }
}
