import React, { useRef } from 'react';
import { Paperclip } from 'lucide-react';

interface ImageUploadProps {
  onImageUpload: (files: FileList) => void;
}

const ImageUpload = ({ onImageUpload }: ImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      onImageUpload(files);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="p-2 rounded-full hover:bg-gray-100 transition"
        title="Upload images"
      >
        <Paperclip className="w-6 h-6 text-gray-600" />
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/heic"
        multiple
        className="hidden"
        onChange={handleChange}
      />
    </>
  );
};

export default ImageUpload;