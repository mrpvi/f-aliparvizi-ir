const links = [
  {
    href: "https://github.com/aliparvizi",
    label: "GitHub",
    svg: (
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="inline-block align-middle"
      >
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/aliparvizi",
    label: "LinkedIn",
    svg: (
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="inline-block align-middle"
      >
        <path
          d="M4.98 3.5C3.87 3.5 3 4.37 3 5.48c0 1.1.87 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.37 6.1 3.5 4.98 3.5zM3.5 8.5h3v12h-3v-12zm7.5 0h2.86v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.33h-3v-4.72c0-1.13-.02-2.59-1.58-2.59-1.58 0-1.82 1.23-1.82 2.5v4.81h-3v-12z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    href: "https://medium.com/@aliparvizi",
    label: "Medium",
    svg: (
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="inline-block align-middle"
      >
        <ellipse cx="5.5" cy="12" rx="4.5" ry="7" fill="currentColor" />
        <ellipse cx="18.5" cy="12" rx="2.5" ry="7" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="2.5" ry="7" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 shadow-sm mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        <div className="flex items-center gap-4 order-2 md:order-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="bg-gray-100 hover:bg-blue-500 text-gray-500 hover:text-white rounded-full p-2 transition-colors shadow-sm"
            >
              {link.svg}
            </a>
          ))}
        </div>
        <div className="hidden md:block h-8 w-px bg-gray-200 mx-8 order-3"></div>
        <div className="flex flex-col items-center order-1 md:order-2 w-full md:w-auto">
          <span className="text-gray-600 text-sm font-medium">
            Rights Reserved © Aliparvizi.ir 2025
          </span>
          <span className="block w-24 h-1 bg-blue-500 rounded mt-2"></span>
        </div>
      </div>
    </footer>
  );
}
