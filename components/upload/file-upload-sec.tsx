"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { CircleX } from "lucide-react";
import { useState } from "react";

export const FileUploadSec = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileUpload = (event: any) => {
    const files: FileList = event.target.files;
    const filesArray: File[] = Array.from(files);
    setSelectedFiles([...selectedFiles, ...filesArray]);
  };

  const handleRemoveFile = (fileIndex: number) => {
    setSelectedFiles(selectedFiles.filter((_, index) => index !== fileIndex));
  };

  return (
    <div className="h-full">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        {/*
        <Label htmlFor="file-upload">Select Files</Label>
        */}
        <Input
          id="file-upload"
          onChange={(e) => handleFileUpload(e)}
          type="file"
          multiple
          className="border-2 border-dashed"
        />
      </div>

      {selectedFiles.length ? (
        <ScrollArea className="w-full h-max">
          <div className="p-4">
            <h4 className="mb-4 text-lg font-medium leading-none">
              Selected Files
            </h4>

            {selectedFiles.map((file, index) => (
              <>
                <div
                  className="text-sm w-full flex justify-between items-center"
                  key={index}
                >
                  <p>
                    {file.name.length > 30
                      ? file.name.slice(0, 30) + `...`
                      : file.name + file.name.split(".").pop()}
                  </p>
                  <CircleX
                    className="text-primary hover:text-red-500 transition-all duration-300 ease-in-out"
                    onClick={() => handleRemoveFile(index)}
                  />
                </div>
                <Separator className="my-2" />
              </>
            ))}
          </div>
        </ScrollArea>
      ) : null}
    </div>
  );
};
