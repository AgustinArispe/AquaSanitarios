import { CheckCircle2 } from "lucide-react";

interface FeatureItemProps {
  text: string;
}

export default function FeatureItem({ text }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}