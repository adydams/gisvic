
import { Phone } from "lucide-react";

const TopContactBar = () => {
  return (
    <div className="bg-slate-600 text-white py-2 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <span className="mr-2">Get Pricing & Schedule Tour</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              (800) 564-0684
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;