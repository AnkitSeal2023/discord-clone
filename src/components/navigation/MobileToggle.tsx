"use client";

import { Menu } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle,
  SheetDescription 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationSidebar } from "./NavigationSidebar";
import { useGesture } from "@use-gesture/react";
import { useState } from "react";

export const MobileToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const bindGestures = useGesture(
    {
      onDrag: ({ direction: [dx], cancel }) => {
        if (dx > 0 && !isOpen) {
          setIsOpen(true);
          cancel();
        } else if (dx < 0 && isOpen) {
          setIsOpen(false);
          cancel();
        }
      },
    },
    {
      drag: {
        bounds: { left: 0, right: 72 },
        threshold: 30,
      },
    }
  );

  return (
    <>
      <div 
        {...bindGestures()} 
        className="fixed left-0 top-0 w-4 h-full z-50 md:hidden touch-pan-right"
      />
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="fixed top-0 left-0 z-30 p-4 md:hidden">
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden my-[-10]">
              <Menu />
            </Button>
          </SheetTrigger>
        </div>
        <SheetContent side="left" className="p-0 w-[72px]">
          <SheetTitle className="sr-only">
            Server Navigation Sidebar
          </SheetTitle>
          <SheetDescription className="sr-only">
            Navigation menu for accessing different Discord servers
          </SheetDescription>
          <NavigationSidebar />
        </SheetContent>
      </Sheet>
    </>
  );
}; 