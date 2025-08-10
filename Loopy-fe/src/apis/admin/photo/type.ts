export type UploadOwnerCafePhotosServerResponse =
  | string[]          
  | { urls: string[] };    

export interface UploadOwnerCafePhotosResult {
  urls: string[];        
}
