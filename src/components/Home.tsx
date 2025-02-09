export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      {/* <!-- Hero Section --> */}

      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black to-gray-900">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Learn. Test. Excel.
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Watch engaging videos, test your knowledge, and level up your
            skills.
          </p>
          <a href="/playlists">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
              Get Started
            </button>
          </a>
        </div>
        <div className="mt-12">
          <svg
            className="w-12 h-12 text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </section>

      {/* <!-- Features Section --> */}

      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <!-- Feature 1 --> */}

            <div className="bg-white text-black p-8 rounded-lg shadow-lg text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
              <h3 className="text-2xl font-bold mb-4">
                Interactive Video Lessons
              </h3>
              <p className="text-gray-700">
                Learn from expertly crafted videos tailored for your growth.
              </p>
            </div>

            {/* <!-- Feature 2 --> */}

            <div className="bg-white text-black p-8 rounded-lg shadow-lg text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                ></path>
              </svg>
              <h3 className="text-2xl font-bold mb-4">Engaging Quizzes</h3>
              <p className="text-gray-700">
                Test your knowledge with fun and challenging exercises.
              </p>
            </div>

            {/* <!-- Feature 3 --> */}

            <div className="bg-white text-black p-8 rounded-lg shadow-lg text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
              <h3 className="text-2xl font-bold mb-4">Track Your Progress</h3>
              <p className="text-gray-700">
                Monitor your learning journey and see how far you've come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Call-to-Action Section --> */}

      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Level Up?</h2>
          <p className="text-gray-700 mb-8">
            Join thousands of learners mastering new skills every day.
          </p>
          <a href="/playlists">
            <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300">
              Start Learning Now
            </button>
          </a>
        </div>
      </section>

      {/* <!-- Footer --> */}

      <footer className="bg-black py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.56v14.91c0 .97-.79 1.76-1.76 1.76H1.76C.79 21.23 0 20.44 0 19.47V4.56C0 3.59.79 2.8 1.76 2.8h20.48c.97 0 1.76.79 1.76 1.76zM9.6 17.03v-6.7l6.4 3.35-6.4 3.35z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.23 5.924c-.806.358-1.67.6-2.577.708a4.515 4.515 0 001.98-2.49 9.027 9.027 0 01-2.86 1.09 4.506 4.506 0 00-7.677 4.108 12.8 12.8 0 01-9.29-4.71 4.506 4.506 0 001.394 6.014 4.49 4.49 0 01-2.04-.563v.057a4.506 4.506 0 003.616 4.415 4.52 4.52 0 01-2.034.077 4.507 4.507 0 004.21 3.13 9.037 9.037 0 01-5.6 1.93c-.364 0-.724-.022-1.08-.063a12.75 12.75 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 002.26-2.34z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-400">
            &copy; 2023 Learn & Test. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
