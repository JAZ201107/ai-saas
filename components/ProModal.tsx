import React, { FC, useState } from "react";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";

import {
  ArrowRight,
  Check,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
  Zap,
} from "lucide-react";

import { useProModal } from "@/hooks/useProModal";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import axios from "axios";
import { Button } from "./ui/button";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
  },
];

interface ProModalProps {}

const ProModal: FC<ProModalProps> = ({}) => {
  const proModal = useProModal();
  const [loading, setIsLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error: any) {
      console.log(error, "STRIPE_CLIENT_ERROR");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader className="flex flex-col justify-center items-center gap-y-4 pb-2">
          <DialogTitle>
            <div className="flex items-center gap-x-2 font-bold text-xl">
              Upgrade to Genius
              <Badge variant="premium" className="uppercase text-sm py-1">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="w-full text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="p-3 border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6  h-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <Check />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={onSubscribe}
            size="lg"
            variant="premium"
            className="w-full"
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
