import React from "react";

const ErrorPage = () => {
  return (
    <main className="min-h-screen">
      <div className="container min-h-screen mx-auto flex flex-col items-center justify-center py-12">
        <h1 className="text-6xl text-red-500">404</h1>
        <h2 className="text-3xl text-gray-800">Page Not Found</h2>
      </div>
    </main>
  );
};

export default ErrorPage;
