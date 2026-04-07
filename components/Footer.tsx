export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xl font-semibold mb-6">
          Kwara Ti Wa Ni — The Future Belongs to All of Us
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="bg-amber-500 hover:bg-amber-600 rounded-full p-3 transition"
            title="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="#"
            className="bg-amber-500 hover:bg-amber-600 rounded-full p-3 transition"
            title="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
            </svg>
          </a>
          <a
            href="#"
            className="bg-amber-500 hover:bg-amber-600 rounded-full p-3 transition"
            title="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.426-.103.25-.129.599-.129.948v5.431h-3.546v-11h3.408v1.561h.05c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 8.855c-1.144 0-2.049-.931-2.049-2.08 0-1.152.905-2.08 2.049-2.08 1.144 0 2.049.928 2.049 2.08 0 1.149-.905 2.08-2.049 2.08zm1.752 11.597H3.585V9.452h3.504v10.999zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>

        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Kwara Ti Wa Ni. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
