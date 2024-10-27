// import React from 'react';

// const ChatIcon = () => {
//   return (
//     <svg
//       stroke='currentColor'
//       fill='none'
//       strokeWidth='2'
//       viewBox='0 0 24 24'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//       className='h-4 w-4'
//       height='1em'
//       width='1em'
//       xmlns='http://www.w3.org/2000/svg'
//     >
//       <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'></path>
//     </svg>
//   );
// };

// export default ChatIcon;

import React from 'react';

const LegalIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="h-4 w-4"
    >
      {/* Document Path */}
      <path
        d="M9 2h6a2 2 0 0 1 2 2v4h-2V4H9v16h3v2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
      />
      {/* Handshake Path */}
      <path
        d="M21.5 17.5a3 3 0 0 0-4.5-2.6 3 3 0 0 0-4.5 2.6 3 3 0 0 0 3 3h3.5a3 3 0 0 0 3-3z"
      />
      <path
        d="M15.5 21.5l3.5-3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LegalIcon;
