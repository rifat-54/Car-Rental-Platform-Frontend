"use client";
import { Button } from "@/components/ui/button";
const BannerButton = () => {
  return (
    <div className="space-x-4">
      <Button onClick={() => console.log("Hello")} color="primary">
        Book Now
      </Button>
      <Button color="primary">Learn More</Button>
    </div>
  );
};

export default BannerButton;