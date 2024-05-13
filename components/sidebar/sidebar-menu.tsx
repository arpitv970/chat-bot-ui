"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, CircleUserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileUploadSec } from "@/components/upload/file-upload-sec";
import { useState } from "react";

export const SidebarMenu = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`${open ? "w-[30%]" : "w-0"} transition-all ease-in-out duration-300 relative`}
    >
      <Card className="flex flex-col justify-between h-full rounded-l-none rounded-r-lg overflow-hidden">
        <CardHeader>
          <CardTitle>File Upload</CardTitle>
          <CardDescription>
            You can add any type of readable file
          </CardDescription>
        </CardHeader>
        <CardContent className="h-full">
          <FileUploadSec />
        </CardContent>
        <CardFooter>
          <Button
            size={"lg"}
            variant={"secondary"}
            className="flex justify-start items-center gap-4 p-3 w-full"
          >
            <CircleUserRound />
            <p>{`User's Name`}</p>
          </Button>
        </CardFooter>
      </Card>
      <ChevronRight
        onClick={() => setOpen((prev) => !prev)}
        className={`absolute cursor-pointer top-[50%] left-[100%] transition-all duration-300 ease-in-out ${open ? "-rotate-180" : "rotate-0"}`}
      />
    </div>
  );
};
