import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex items-center p-4 gap-3 max-w-[400px]">
      <Input placeholder="Type something...."/>
      <Button>Submit</Button>
    </div>
  );
}
