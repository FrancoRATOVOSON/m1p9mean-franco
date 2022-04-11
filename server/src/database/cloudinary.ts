/* eslint-disable import/prefer-default-export */
import { v2 as cloudinary } from 'cloudinary'
import { bufferToBase64 } from '../utils/functions'
import { IImageType } from '../utils/types'

cloudinary.config({
  cloud_name: 'duw4pkdvg',
  api_key: '534459718276865',
  api_secret: 'j6zc4fwHFhOTn6xoK3BJl_3II5M',
})

export async function uploadImage(
  imageFile: IImageType,
  folder: string,
  public_id?: string
): Promise<string> {
  const uploadedFile = await cloudinary.uploader.upload(
    `data:${imageFile.mimetype};base64,${bufferToBase64(imageFile.buffer)}`,
    {
      resource_type: 'image',
      public_id,
      folder: `ekaly/${folder}`,
      overwrite: true,
    }
  )

  return uploadedFile.secure_url
}
