export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-br from-gray-900 to-gray-800 text-gray-100 py-6 md:py-8 border-t border-gray-700
                       relative md:fixed md:bottom-0 md:left-0">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* サイト情報 */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-white">
            JavaScript理解度チェック
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            This site is a JavaScript quiz app — created for learning and testing.
          </p>
        </div>

        {/* リンク */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Links</h4>
          <ul className="space-y-2">
            <li>
              <a 
                href="/" 
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 inline-flex items-center group"
              >
                <span className="mr-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                Home
              </a>
            </li>
            <li>
              <a 
                href="/history" 
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 inline-flex items-center group"
              >
                <span className="mr-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                History
              </a>
            </li>
          </ul>
        </div>

        {/* 連絡先 */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Contact</h4>
          <div className="space-y-2">
            <a 
              href="mailto:support@example.com"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm block"
            >
              📧 support@example.com
            </a>
            <p className="text-sm text-gray-500 pt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
