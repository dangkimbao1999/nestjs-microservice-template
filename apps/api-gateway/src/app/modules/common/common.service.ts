import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CommonService {
  private readonly s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  async uploadMultipleFiles(files: Express.Multer.File[]): Promise<string[]> {
    const uploadPromises = files.map((file) => {
      const filename = uuidv4() + '-' + file.originalname;
      const contentType = file.mimetype;

      return this.s3
        .upload({
          Bucket: process.env.AWS_S3_BUCKET_NAME,
          Key: filename,
          Body: file.buffer,
          ACL: 'public-read',
          ContentType: contentType,
        })
        .promise()
        .then(() => {
          return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${filename}`;
        });
    });

    return Promise.all(uploadPromises);
  }
}
