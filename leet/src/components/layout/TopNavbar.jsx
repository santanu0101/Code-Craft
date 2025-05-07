import { ArrowLeft, ArrowRight, Maximize2, Play, CheckCircle } from 'lucide-react';

export default function TopNavbar() {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
      <div className="flex items-center space-x-4">
        <button className="p-1 rounded hover:bg-gray-700">
          <ArrowLeft size={20} />
        </button>
        <h1 className="font-medium">SAS-Coding Problem</h1>
      </div>
      <div className="flex items-center space-x-4">
        
      </div>
    </div>
  );
}
