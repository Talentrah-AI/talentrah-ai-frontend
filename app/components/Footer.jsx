import * as React from "react";

function Footer() {
  return (
    <footer className="flex gap-4 justify-center items-center py-4 text-xs text-gray-500">
      <p>© 2025 Talentrah. All rights reserved</p>
      <button
        className="text-blue-600 hover:text-blue-700 transition-colors"
        aria-label="View Terms and conditions"
      >
        Terms & conditions
      </button>
      <button
        className="text-blue-600 hover:text-blue-700 transition-colors"
        aria-label="View Privacy policy"
      >
        Privacy policy
      </button>
    </footer>
  );
}

export default Footer;
