import { Upload as UploadAntd, UploadProps, UploadFile } from "antd";
import { UploadChangeParam } from "antd/es/upload";

export type { UploadProps, UploadChangeParam, UploadFile }

export const Upload = ({ ...props }: UploadProps) => {
  return <UploadAntd {...props} />;
}
