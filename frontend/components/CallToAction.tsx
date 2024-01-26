import { CheckCircle } from "lucide-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col items-center gap-10 py-5 text-gray-800">
      <div className="flex flex-wrap items-center justify-center gap-5 md:gap-10">
        <div className="feature">
          <CheckCircle size={30} className="text-green-500" />
          <p>Costum link</p>
        </div>
        <div className="feature">
          <CheckCircle size={30} className="text-green-500" />
          <p>Analytic</p>
        </div>
        <div className="feature">
          <CheckCircle size={30} className="text-green-500" />
          <p>Tools</p>
        </div>
        <div className="feature">
          <CheckCircle size={30} className="text-green-500" />
          <p>Manage link</p>
        </div>
        <div className="feature">
          <CheckCircle size={30} className="text-green-500" />
          <p>Protect link</p>
        </div>
      </div>
      <button className="btn-primary">Register & get more features</button>
    </div>
  );
}
