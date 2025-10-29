import { API_URL } from '../constants'

export type CloudinaryFile = {
  asset_id: string
  folder: string
  format: string
  public_id: string
  secure_url: string
}

export type SignData = {
  apiKey: string
  timestamp: string
  signature: string
  cloudName: string
}

export async function getSignature(folder: string): Promise<SignData> {
  const response = await fetch(`${API_URL}/upload-signature?folder=${folder}`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${localStorage.getItem('userAccessToken') || ''}`,
    }),
  })
  const signData: SignData = await response.json()
  return signData
}

export async function uploadImage(
  folder: string,
  signData: SignData,
  rawFile: File,
): Promise<CloudinaryFile> {
  const url = `https://api.cloudinary.com/v1_1/${signData.cloudName}/auto/upload`

  const formData = new FormData()
  formData.append('file', rawFile)
  formData.append('api_key', signData.apiKey)
  formData.append('timestamp', signData.timestamp)
  formData.append('signature', signData.signature)
  formData.append('folder', folder)
  formData.append('use_filename', 'true')

  const imageResponse = await fetch(url, {
    method: 'POST',
    body: formData,
  })

  const image: CloudinaryFile = await imageResponse.json()
  return image
}
