import Link from "next/link";
import { DashboardIcon } from "../components/icons/dashboard-icon";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] lg:min-h-[80vh] text-center p-6 animate-in fade-in zoom-in duration-500">
      <div className="w-full max-w-[280px] md:max-w-sm lg:max-w-md xl:max-w-lg mb-8 lg:mb-12">
        <svg
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-xl"
        >
          <path
            d="M36.1086 230.957C48.5134 250.144 69.3093 263.856 93.3536 269.09C117.398 274.324 142.668 270.598 163.636 258.627C184.605 246.656 199.646 227.352 205.82 204.148C211.993 180.944 208.834 156.12 196.957 135.035"
            stroke="#E6EFF5"
            strokeWidth="30"
            strokeLinecap="round"
          />
          <circle cx="280.5" cy="115.5" r="85.5" fill="#F5F7FA" />
          <circle
            cx="280.5"
            cy="115.5"
            r="69.5"
            stroke="#2D60FF"
            strokeWidth="12"
          />
          <path
            d="M336 171L365 200"
            stroke="#2D60FF"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M260 115.5C260 104.178 269.178 95 280.5 95C291.822 95 301 104.178 301 115.5"
            stroke="#718EBF"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M280.5 135V136"
            stroke="#2D60FF"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M50 150 C 20 150, 20 100, 50 100 C 50 70, 100 70, 110 90 C 130 80, 150 100, 140 120 C 160 130, 140 160, 110 150 L 50 150"
            fill="#4C49ED"
            opacity="0.1"
          />
          <path
            d="M100 200 C 70 200, 70 150, 100 150 C 100 120, 150 120, 160 140 C 180 130, 200 150, 190 170 C 210 180, 190 210, 160 200 L 100 200"
            fill="#E6EFF5"
          />
        </svg>
      </div>

      <div className="space-y-4 max-w-lg lg:max-w-2xl">
        <h2 className="text-xl  lg:text-2xl xl:text-3xl font-extrabold text-heading-primary tracking-tight">
          Oops! Page Not Found
        </h2>
        <p className="text-muted text-sm lg:text-lg leading-relaxed">
          It looks like you've ventured into uncharted territory. The page you
          are looking for doesn't exist or has been moved.
        </p>
      </div>

      <div className="mt-8 lg:mt-12">
        <Link
          href="/dashboard"
          className="btn-primary inline-flex items-center gap-2 px-6 py-3 lg:px-8 lg:py-4 rounded-xl text-sm lg:text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
        >
          <DashboardIcon className="size-5 lg:size-6" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
