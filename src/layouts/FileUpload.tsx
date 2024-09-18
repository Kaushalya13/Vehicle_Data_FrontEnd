import { useRef, useState } from "react";

interface FileUploadProps {
  accept: string;
  onSelectFile: (file: File | null) => void;
  disabled: boolean;
}

const FileUpload = ({ accept, onSelectFile, disabled }: FileUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileName(file?.name || "Choose file");
    onSelectFile(file);
  };

  return (
    <div>
      <button
        onClick={() => fileInputRef.current?.click()}
        disabled={disabled}
        style={{
          padding: "10px 8px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.6 : 1,
        }}
      >
        {fileName || "Choose file"}
      </button>
      <input
        type="file"
        accept={accept}
        ref={fileInputRef}
        onChange={handleFileChange}
        hidden
        disabled={disabled}
      />
    </div>
  );
};

export default FileUpload;
