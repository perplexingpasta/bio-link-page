"use client"
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-grid-black/[0.05] animate-bgMove pointer-events-none fixed left-0 top-0 h-full w-full">
        {/* <div className="absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" /> */}
      </div>
      <div className="relative">{children}</div>

      <style jsx global>{`
        @keyframes bgMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-bgMove {
          animation: bgMove 8s linear infinite;
        }
      `}</style>
    </>
  );
};

export default layout;
