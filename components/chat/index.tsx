import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ChatPage = () => {
  return (
    <div className="w-full bg-zinc-900 h-full">
      <Card className="border-none flex bg-zinc-900 flex-col justify-between h-full">
        <CardHeader>
          <CardTitle>Chat-Bot</CardTitle>
          <CardDescription>Get your answers from any files</CardDescription>
        </CardHeader>
        <CardContent className="h-full">
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <div className="flex gap-4 w-full mx-auto justify-center items-center">
            <Input
              type="text"
              placeholder="Message Chat-Bot"
              className=" h-full border p-3 rounded-lg"
            />
            <Button variant={"secondary"} size={"icon"} className="p-3 ">
              <Send />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
