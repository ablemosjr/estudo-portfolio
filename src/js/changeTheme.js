const buttonChangeTheme = document.querySelector('#button-theme');
let theme = localStorage.getItem('theme');

// Theme Icons
const moonIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1582 17.4668C18.1126 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41101 20.3741 6.88299 19.5345 5.67422 18.3258C4.46545 17.117 3.62593 15.589 3.2539 13.9205C2.88187 12.252 2.99271 10.5121 3.57345 8.9043C4.1542 7.29651 5.18082 5.88737 6.53321 4.84175C7.88559 3.79614 9.50779 3.15731 11.21 3C10.2134 4.34827 9.73384 6.00945 9.85852 7.68141C9.98321 9.35338 10.7039 10.9251 11.8894 12.1106C13.0749 13.2961 14.6466 14.0168 16.3186 14.1415C17.9905 14.2662 19.6517 13.7866 21 12.79Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

const sunIcon = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_7_44)">
      <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 1V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 21V23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4.22 4.22L5.64 5.64" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18.36 18.36L19.78 19.78" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1 12H3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 12H23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4.22 19.78L5.64 18.36" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18.36 5.64L19.78 4.22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_7_44">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
`;

theme = ['light', 'dark'].includes(theme) ? theme : 'light';
localStorage.setItem('theme', theme);

function updateTheme(newTheme) {
  theme = newTheme;
  if (theme === 'dark') {
    document.body.classList.add('dark');
    buttonChangeTheme.innerHTML = sunIcon;
  } else {
    document.body.classList.remove('dark');
    buttonChangeTheme.innerHTML = moonIcon;
  }
}

updateTheme(theme);

buttonChangeTheme.addEventListener('click', () => {
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  updateTheme(newTheme);
});
