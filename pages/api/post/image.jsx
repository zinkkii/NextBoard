import aws from "aws-sdk";

export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log("/api/post/image ----- filename : " + req.body.filename);
    console.log(req.query.file);
    //setting
    aws.config.update({
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_KEY,
      region: process.env.REGION,
      signatureVersion: "v4",
    });

    //presignedURL 발급
    const s3 = new aws.S3();
    const url = s3.createPresignedPost({
      Bucket: process.env.BUCKET_NAME,
      Fields: { key: req.body.filename },
      Expires: 60, //seconds
      Conditions: [
        ["content-length-range", 0, 1048576], //파일용량 1MB 까지 제한
      ],
    });
    res.status(200).json(url);
  }
}
