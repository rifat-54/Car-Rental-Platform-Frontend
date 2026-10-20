import { Card, CardContent } from "@/components/ui/card";
import BannerButton from "./BannerButton";
import MotionCar from "./MotionCar";
export default function Banner() {
  return (
    <Card className="py-8 border-none shadow-none bg-transparent">
      <CardContent className="flex items-center justify-between p-0">
        <div className="w-2/5">
          <h1 className="text-6xl font-bold mb-2 text-foreground">
            Explore the Finest <span className="text-red-500">Global</span>{" "}
            Offers
          </h1>
          <h4 className="text-xl text-muted-foreground my-4">
            Find your ideal ride for any adventure with our diverse range of
            affordable and dependable car rentals.
          </h4>
          <div className="flex gap-4 mt-6">
            <BannerButton></BannerButton>
          </div>
        </div>

        <div className="w-3/5 flex justify-end">
          <MotionCar />
        </div>
      </CardContent>
    </Card>
  );
}