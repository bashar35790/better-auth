"use client"

function NotFoundPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
            <div className="text-center max-w-xl">

                {/* 404 Number */}
                <h1 className="text-7xl md:text-9xl font-extrabold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-3 text-gray-400">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-2 rounded-xl cursor-pointer bg-orange-700 transition"
                    >
                        Home
                    </button>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-2 rounded-xl border border-gray-600 hover:bg-gray-700 transition"
                    >
                        Go Back
                    </button>

                </div>

                {/* Extra small text */}
                <p className="mt-6 text-xs text-gray-500">
                    Error code: 404
                </p>
            </div>
        </div>
    );
}

export default NotFoundPage;
