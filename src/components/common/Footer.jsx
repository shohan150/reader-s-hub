import logo from "/assets/logo.jpg";
export default function Footer() {
  return (
    <div className="">
      <hr />
      <footer className="footer items-center lg:p-8 p-4 bg-neutral text-neutral-content pt-8">
        <aside className="items-center grid-flow-col">
          <img src={logo} alt="Reader's Hub Logo" className="w-14" />
          <div className="space-y-1 ml-2">
            <p>Developed by Md. Shohanur Rahman</p>
            <p>A Book Finder Website using Open Library API</p>
          </div>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="mailto:shohan7035@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="50"
              viewBox="0 0 100 100"
            >
              <path
                fill="#c7ede6"
                d="M87.215,57.71C88.35,55.555,89,53.105,89,50.5c0-6.621-4.159-12.257-10.001-14.478	C78.999,36.015,79,36.008,79,36c0-11.598-9.402-21-21-21c-9.784,0-17.981,6.701-20.313,15.757C36.211,30.272,34.638,30,33,30	c-7.692,0-14.023,5.793-14.89,13.252C12.906,44.353,9,48.969,9,54.5C9,60.851,14.149,66,20.5,66c0.177,0,0.352-0.012,0.526-0.022	C21.022,66.153,21,66.324,21,66.5C21,77.822,30.178,87,41.5,87c6.437,0,12.175-2.972,15.934-7.614C59.612,81.611,62.64,83,66,83	c4.65,0,8.674-2.65,10.666-6.518C77.718,76.817,78.837,77,80,77c6.075,0,11-4.925,11-11C91,62.689,89.53,59.727,87.215,57.71z"
              ></path>
              <path
                fill="#fdfcef"
                d="M21.875,59v-0.5H7c-2.481,0-4.5-2.019-4.5-4.5c0-2.422,1.895-4.396,4.313-4.496l0.677-0.027	l0.226-0.64C8.208,47.439,9.527,46.5,11,46.5c0.41,0,0.812,0.072,1.194,0.215l1.189,0.442l0.152-1.26	c0.303-2.507,2.437-4.397,4.964-4.397c2.047,0,3.916,1.288,4.649,3.206l0.438,1.144l1.033-0.657C25.332,44.739,26.155,44.5,27,44.5	c2.402,0,4.377,1.879,4.494,4.276l0.035,0.721l0.695,0.193C34.153,50.228,33.5,52,33.5,54c0,2.481-0.019,4.5-2.5,4.5h-6.125V59	H21.875z"
              ></path>
              <path
                fill="#fdfcef"
                d="M24.875,58.5c0,0,3.64,0,6.125,0s1-2.015,1-4.5c0-2.333,1.718-4.229-0.555-4.455	C31.467,49.364,31.5,49.187,31.5,49c0-2.485-2.015-4.5-4.5-4.5c-1.438,0-2.703,0.686-3.527,1.736C23.333,43.6,21.171,41.5,18.5,41.5	c-2.761,0-5,2.239-5,5c0,0.446,0.077,0.87,0.187,1.282C13.045,47.005,12.086,46.5,11,46.5c-1.781,0-3.234,1.335-3.455,3.055	C7.364,49.533,7.187,49.5,7,49.5c-2.485,0-4.5,2.015-4.5,4.5s2.015,4.5,4.5,4.5s9.5,0,9.5,0h5.375V59h3V58.5z"
              ></path>
              <path
                fill="#472b29"
                d="M24.875,59c-0.275,0-0.5-0.225-0.5-0.5s0.225-0.5,0.5-0.5H31c2.206,0,2-1.794,2-4	c0-2.052,0.449-3.754-1.606-3.958c-0.13-0.013-0.256-0.081-0.338-0.184c-0.083-0.104-0.123-0.243-0.106-0.373l0.019-0.142	C30.99,49.189,31,49.096,31,49c0-2.206-1.794-4-4-4c-1.22,0-2.362,0.562-3.133,1.544c-0.094,0.121-0.243,0.193-0.393,0.193	c-0.049,0-0.101-0.008-0.151-0.024c-0.194-0.061-0.338-0.245-0.35-0.448C22.847,43.874,20.881,42,18.5,42	c-2.481,0-4.5,2.019-4.5,4.5c0,0.353,0.054,0.719,0.169,1.154c0.059,0.221-0.05,0.468-0.253,0.57	c-0.073,0.039-0.154,0.058-0.229,0.058c-0.148,0-0.289-0.066-0.385-0.182C12.724,47.401,11.884,47,11,47	c-1.496,0-2.769,1.126-2.959,2.618c-0.032,0.247-0.245,0.437-0.495,0.437L7.331,50.03C7.189,50.01,7.096,50,7,50	c-2.206,0-4,1.794-4,4s1.794,4,4,4h14.875c0.275,0,0.5,0.225,0.5,0.5s-0.225,0.5-0.5,0.5H7c-2.757,0-5-2.243-5-5	c0-2.589,1.941-4.729,4.516-4.978l0.591-0.057l0.232-0.545C7.969,46.95,9.405,46,11,46c0.309,0,0.617,0.036,0.916,0.108l0.994,0.24	l0.218-1C13.675,42.829,15.934,41,18.5,41c2.113,0,3.999,1.18,4.923,3.078l0.444,0.913l0.906-0.458C25.463,44.185,26.232,44,27,44	c2.561,0,4.697,1.917,4.971,4.459l0.067,0.631l0.601,0.207C34.649,49.99,34,51.88,34,54c0,2.757-0.243,5-3,5H24.875z"
              ></path>
              <path
                fill="#472b29"
                d="M18.5,41c-3.033,0-5.5,2.467-5.5,5.5c0,0.016,0,0.031,0,0.047C12.398,46.192,11.71,46,11,46	c-1.831,0-3.411,1.261-3.858,3.005C7.095,49.002,7.048,49,7,49c-2.757,0-5,2.243-5,5s2.243,5,5,5h14.875c0.276,0,0.5-0.224,0.5-0.5	s-0.224-0.5-0.5-0.5H7c-2.206,0-4-1.794-4-4s1.794-4,4-4c0.117,0,0.23,0.017,0.343,0.032l0.141,0.019	c0.021,0.003,0.041,0.004,0.062,0.004c0.246,0,0.462-0.185,0.495-0.437C8.232,48.125,9.504,47,11,47c0.885,0,1.723,0.401,2.301,1.1	c0.098,0.118,0.241,0.182,0.386,0.182c0.078,0,0.156-0.018,0.228-0.056c0.209-0.107,0.314-0.346,0.254-0.573	C14.054,47.218,14,46.852,14,46.5c0-2.481,2.019-4.5,4.5-4.5c2.381,0,4.347,1.872,4.474,4.263c0.011,0.208,0.15,0.387,0.349,0.45	c0.05,0.016,0.101,0.024,0.152,0.024c0.15,0,0.296-0.069,0.392-0.192C24.638,45.563,25.779,45,27,45c2.206,0,4,1.794,4,4	c0,0.117-0.017,0.23-0.032,0.343l-0.019,0.141c-0.016,0.134,0.022,0.268,0.106,0.373c0.084,0.105,0.207,0.172,0.34,0.185	C33.451,50.247,33,51.949,33,54c0,2.206,0.206,4-2,4h-6.125c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H31c2.757,0,3-2.243,3-5	c0-2.397,0.311-4.413-2.003-4.877C31.999,49.082,32,49.041,32,49c0-2.757-2.243-5-5-5c-1.176,0-2.293,0.416-3.183,1.164	C23.219,42.76,21.055,41,18.5,41L18.5,41z"
              ></path>
              <path
                fill="#472b29"
                d="M17,48c-1.403,0-2.609,0.999-2.913,2.341C13.72,50.119,13.301,50,12.875,50	c-1.202,0-2.198,0.897-2.353,2.068C10.319,52.022,10.126,52,9.937,52c-1.529,0-2.811,1.2-2.918,2.732	C7.01,54.87,7.114,54.99,7.251,55c0.006,0,0.012,0,0.018,0c0.13,0,0.24-0.101,0.249-0.232C7.607,53.497,8.669,52.5,9.937,52.5	c0.229,0,0.47,0.042,0.738,0.127c0.022,0.007,0.045,0.01,0.067,0.01c0.055,0,0.11-0.02,0.156-0.054	C10.962,52.537,11,52.455,11,52.375c0-1.034,0.841-1.875,1.875-1.875c0.447,0,0.885,0.168,1.231,0.473	c0.047,0.041,0.106,0.063,0.165,0.063c0.032,0,0.063-0.006,0.093-0.019c0.088-0.035,0.148-0.117,0.155-0.212	C14.623,49.512,15.712,48.5,17,48.5c0.208,0,0.425,0.034,0.682,0.107c0.023,0.007,0.047,0.01,0.07,0.01	c0.109,0,0.207-0.073,0.239-0.182c0.038-0.133-0.039-0.271-0.172-0.309C17.517,48.04,17.256,48,17,48L17,48z"
              ></path>
              <path
                fill="#fff"
                d="M70.405,24H60.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h9.905c0.276,0,0.5,0.224,0.5,0.5	S70.682,24,70.405,24z"
              ></path>
              <path
                fill="#fff"
                d="M73.5,24h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5	S73.777,24,73.5,24z"
              ></path>
              <path
                fill="#fff"
                d="M78.491,26H69.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h8.991c0.276,0,0.5,0.224,0.5,0.5	S78.767,26,78.491,26z"
              ></path>
              <path
                fill="#fff"
                d="M67.5,26h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5	S67.777,26,67.5,26z"
              ></path>
              <path
                fill="#fff"
                d="M64.5,26h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5	S64.777,26,64.5,26z"
              ></path>
              <path
                fill="#fff"
                d="M70.5,28h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5	S70.776,28,70.5,28z"
              ></path>
              <path
                fill="#fff"
                d="M73.5,19c-0.177,0-0.823,0-1,0c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c0.177,0,0.823,0,1,0	c0.276,0,0.5-0.224,0.5-0.5S73.776,19,73.5,19z"
              ></path>
              <path
                fill="#fff"
                d="M73.5,21c-0.177,0-4.823,0-5,0c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c0.177,0,4.823,0,5,0	c0.276,0,0.5-0.224,0.5-0.5S73.776,21,73.5,21z"
              ></path>
              <path
                fill="#fff"
                d="M78.5,23c-0.177,0-2.823,0-3,0c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c0.177,0,2.823,0,3,0	c0.276,0,0.5-0.224,0.5-0.5S78.776,23,78.5,23z"
              ></path>
              <path
                fill="#fff"
                d="M32.5,81h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5	S32.776,81,32.5,81z"
              ></path>
              <path
                fill="#fff"
                d="M36.5,81h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5	S36.776,81,36.5,81z"
              ></path>
              <path
                fill="#fff"
                d="M41.5,83h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5	S41.777,83,41.5,83z"
              ></path>
              <path
                fill="#fff"
                d="M29.5,83h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5	S29.776,83,29.5,83z"
              ></path>
              <path
                fill="#fff"
                d="M26.375,83H24.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1.875c0.276,0,0.5,0.224,0.5,0.5	S26.651,83,26.375,83z"
              ></path>
              <path
                fill="#fff"
                d="M35.5,79h-5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5	S35.777,79,35.5,79z"
              ></path>
              <path
                fill="#fff"
                d="M32.5,85h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5	S32.776,85,32.5,85z"
              ></path>
              <path
                fill="#78a0cf"
                d="M39.775,50.315v19.807h-7.837c-1.626,0-2.939-1.313-2.939-2.939V41.891L39.775,50.315z"
              ></path>
              <path
                fill="#c4211f"
                d="M39.775,36.64v13.675L29,41.891v-2.625c0-1.254,0.431-2.41,1.146-3.321	c1.774-2.305,5.258-2.768,7.563-0.921L39.775,36.64z"
              ></path>
              <polygon
                fill="#eb4235"
                points="66.224,36.64 66.224,50.305 53,60.64 39.775,50.315 39.775,36.64 53,46.965"
              ></polygon>
              <path
                fill="#f1bc19"
                d="M77,39.265v2.625l-10.775,8.415V36.64l2.067-1.616c0.99-0.774,2.155-1.146,3.321-1.146	C74.512,33.85,77.033,36.313,77,39.265z"
              ></path>
              <path
                fill="#9ca74c"
                d="M77,41.891v25.293c0,1.626-1.313,2.939-2.939,2.939h-7.837V50.305L77,41.891z"
              ></path>
              <line
                x1="31.939"
                x2="31.939"
                y1="65.224"
                y2="67.184"
                fill="none"
                stroke="#472b29"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth=".75"
              ></line>
              <line
                x1="31.939"
                x2="31.939"
                y1="59.347"
                y2="62.286"
                fill="none"
                stroke="#472b29"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth=".75"
              ></line>
              <line
                x1="31.939"
                x2="31.939"
                y1="49.551"
                y2="56.353"
                fill="none"
                stroke="#472b29"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth=".75"
              ></line>
              <path
                fill="none"
                stroke="#472b29"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.4"
                d="M39.775,36.867v33.256	h-7.837c-1.623,0-2.939-1.316-2.939-2.939V39.265c0-2.976,2.412-5.388,5.388-5.388"
              ></path>
              <path
                fill="none"
                stroke="#472b29"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.4"
                d="M75.858,35.948	c-1.832-2.345-5.218-2.76-7.563-0.929L53,46.97l0,0L37.705,35.02c-2.345-1.832-5.731-1.416-7.563,0.929"
              ></path>
              <line
                x1="54.356"
                x2="58.81"
                y1="55.842"
                y2="52.318"
                fill="none"
                stroke="#472b29"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth=".75"
              ></line>
              <line
                x1="48.822"
                x2="52.289"
                y1="53.609"
                y2="56.353"
                fill="none"
                stroke="#472b29"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth=".75"
              ></line>
              <line
                x1="44.985"
                x2="47.285"
                y1="50.573"
                y2="52.393"
                fill="none"
                stroke="#472b29"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth=".75"
              ></line>
              <line
                x1="42.456"
                x2="43.448"
                y1="48.571"
                y2="49.357"
                fill="none"
                stroke="#472b29"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth=".75"
              ></line>
              <polyline
                fill="none"
                stroke="#472b29"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.4"
                points="29.157,42.015 53,60.644 53,60.644 76.826,42.029"
              ></polyline>
              <path
                fill="none"
                stroke="#472b29"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.4"
                d="M71.612,33.878	c2.976,0,5.388,2.412,5.388,5.388v27.918c0,1.623-1.316,2.939-2.939,2.939h-7.837V36.8"
              ></path>
              <path
                fill="#fdfcef"
                d="M84.5,66v-0.5H77c-1.93,0-3.5-1.57-3.5-3.5c0-1.895,1.482-3.431,3.375-3.498l0.609-0.021l0.26-0.551	c0.409-0.868,1.295-1.43,2.256-1.43c0.142,0,0.28,0.012,0.417,0.035l0.97,0.172l0.186-0.967c0.362-1.878,2.014-3.24,3.928-3.24	c1.438,0,2.773,0.783,3.485,2.045l0.485,0.859l0.866-0.475c0.514-0.281,1.088-0.43,1.663-0.43c1.866,0,3.402,1.459,3.495,3.321	l0.034,0.671l0.633,0.223C97.561,59.207,98.5,60.527,98.5,62c0,1.93-1.57,3.5-3.5,3.5h-3.5V66H84.5z"
              ></path>
              <path
                fill="#fdfcef"
                d="M91.5,65.5c0,0,1.567,0,3.5,0s3.5-1.567,3.5-3.5c0-1.781-1.335-3.234-3.055-3.455	C95.473,58.366,95.5,58.187,95.5,58c0-1.933-1.567-3.5-3.5-3.5c-1.032,0-1.95,0.455-2.59,1.165c-0.384-1.808-1.987-3.165-3.91-3.165	c-2.209,0-4,1.791-4,4c0,0.191,0.03,0.374,0.056,0.558C81.128,56.714,80.592,56.5,80,56.5c-1.228,0-2.245,0.887-2.455,2.055	C77.366,58.527,77.187,58.5,77,58.5c-1.933,0-3.5,1.567-3.5,3.5s1.567,3.5,3.5,3.5s7.5,0,7.5,0V66h7V65.5z"
              ></path>
              <path
                fill="#472b29"
                d="M93.25,61C93.112,61,93,60.888,93,60.75c0-1.223,0.995-2.218,2.218-2.218	c0.034,0.009,0.737-0.001,1.244,0.136c0.133,0.036,0.212,0.173,0.176,0.306c-0.036,0.134-0.173,0.213-0.306,0.176	c-0.444-0.12-1.1-0.12-1.113-0.118c-0.948,0-1.719,0.771-1.719,1.718C93.5,60.888,93.388,61,93.25,61z"
              ></path>
              <circle cx="86.5" cy="65.5" r=".5" fill="#472b29"></circle>
              <path
                fill="#472b29"
                d="M91.5,66c-0.275,0-0.5-0.225-0.5-0.5s0.225-0.5,0.5-0.5H95c1.654,0,3-1.346,3-3	c0-1.496-1.126-2.769-2.618-2.959c-0.13-0.017-0.257-0.09-0.335-0.195c-0.082-0.108-0.116-0.248-0.095-0.379	C94.984,58.258,95,58.131,95,58c0-1.654-1.346-3-3-3c-0.85,0-1.638,0.355-2.219,1.001c-0.095,0.104-0.23,0.165-0.372,0.165	c-0.042,0-0.085-0.006-0.127-0.018c-0.187-0.051-0.322-0.196-0.361-0.38C88.58,54.164,87.142,53,85.5,53c-1.93,0-3.5,1.57-3.5,3.5	c0,0.121,0.014,0.238,0.032,0.354c0.039,0.272-0.057,0.503-0.233,0.604c-0.094,0.053-0.193,0.081-0.289,0.081	c-0.103,0-0.189-0.029-0.266-0.091C80.877,57.155,80.447,57,80,57c-0.967,0-1.793,0.691-1.963,1.645	c-0.043,0.237-0.249,0.41-0.491,0.41l-0.117-0.011C77.257,59.016,77.13,59,77,59c-1.654,0-3,1.346-3,3s1.346,3,3,3h7.5	c0.275,0,0.5,0.225,0.5,0.5S84.775,66,84.5,66H77c-2.206,0-4-1.794-4-4c0-2.041,1.59-3.79,3.62-3.982l0.519-0.049l0.258-0.452	C77.927,56.581,78.925,56,80,56l0.952,0.038l0.216-0.761C81.716,53.348,83.497,52,85.5,52c1.491,0,2.881,0.736,3.718,1.969	l0.463,0.684l0.759-0.326C90.937,54.112,91.476,54,92,54c2.03,0,3.738,1.52,3.974,3.534l0.067,0.576l0.534,0.228	C98.048,58.966,99,60.403,99,62c0,2.206-1.794,4-4,4H91.5z"
              ></path>
              <path
                fill="#472b29"
                d="M95,66h-3.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5H95c1.654,0,3-1.346,3-3	c0-1.496-1.125-2.768-2.618-2.959c-0.134-0.018-0.255-0.088-0.336-0.196s-0.115-0.244-0.094-0.377C94.975,58.314,95,58.16,95,58	c0-1.654-1.346-3-3-3c-0.85,0-1.638,0.355-2.219,1c-0.125,0.139-0.321,0.198-0.5,0.148c-0.182-0.049-0.321-0.195-0.36-0.379	C88.58,54.165,87.141,53,85.5,53c-1.93,0-3.5,1.57-3.5,3.5c0,0.143,0.021,0.28,0.041,0.418c0.029,0.203-0.063,0.438-0.242,0.54	c-0.179,0.102-0.396,0.118-0.556-0.01C80.878,57.155,80.449,57,80,57c-0.966,0-1.792,0.691-1.963,1.644	c-0.048,0.267-0.296,0.446-0.569,0.405C77.314,59.025,77.16,59,77,59c-1.654,0-3,1.346-3,3s1.346,3,3,3h7.5	c0.276,0,0.5,0.224,0.5,0.5S84.776,66,84.5,66H77c-2.206,0-4-1.794-4-4s1.794-4,4-4c0.059,0,0.116,0.002,0.174,0.006	C77.588,56.82,78.711,56,80,56c0.349,0,0.689,0.061,1.011,0.18C81.176,53.847,83.126,52,85.5,52c1.831,0,3.466,1.127,4.153,2.774	C90.333,54.276,91.155,54,92,54c2.206,0,4,1.794,4,4c0,0.048-0.001,0.095-0.004,0.142C97.739,58.59,99,60.169,99,62	C99,64.206,97.206,66,95,66z"
              ></path>
              <path
                fill="#472b29"
                d="M89.5,65c-0.159,0-0.841,0-1,0c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c0.159,0,0.841,0,1,0	c0.276,0,0.5-0.224,0.5-0.5S89.776,65,89.5,65z"
              ></path>
            </svg>
          </a>
          <a href="https://github.com/shohan150" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="30" fill="#4e6e91"></circle>
              <path
                fill="#6693c1"
                d="M50,83c-18.196,0-33-14.804-33-33s14.804-33,33-33s33,14.804,33,33S68.196,83,50,83z M50,22 c-15.439,0-28,12.561-28,28s12.561,28,28,28s28-12.561,28-28S65.439,22,50,22z"
              ></path>
              <path
                fill="#eeecd9"
                d="M69.457,49.039c0-3.321-1.305-6.334-3.419-8.573c0.396-2.203,0.351-5.301-0.538-7.966 c-4.475,0-8.114,3.447-8.702,4H43.994c-0.589-0.552-4.019-4-8.494-4c-0.8,2.401-1.087,5.233-0.846,7.295 c-2.518,2.286-4.108,5.575-4.108,9.245c0,6.908,5.599,12.459,12.507,12.459H45.5c-2.003,0.917-3.635,2.756-4,5 c-2,0-4.864-0.182-6.181-2.158c-2.46-3.69-3.59-3.69-4.819-3.69c-1.23,0-1.33,1.23-0.1,2.46s1.23,1.23,2.46,3.69 C33.872,68.828,36.5,70.5,41.5,70.5v6.6c0,0,6.346,1.4,8.5,1.4s8.5-1.4,8.5-1.4l0-9.445c0-2.718-1.681-5.092-4-6.155h2.449 C63.858,61.5,69.457,55.947,69.457,49.039z"
              ></path>
              <path
                fill="#1f212b"
                d="M50,85c-19.299,0-35-15.701-35-35s15.701-35,35-35s35,15.701,35,35S69.299,85,50,85z M50,17 c-18.196,0-33,14.804-33,33s14.804,33,33,33s33-14.804,33-33S68.196,17,50,17z"
              ></path>
              <path
                fill="#1f212b"
                d="M50,79c-15.99,0-29-13.009-29-29s13.01-29,29-29s29,13.009,29,29c0,2.925-0.435,5.812-1.291,8.582 c-0.082,0.263-0.364,0.411-0.625,0.33c-0.264-0.082-0.412-0.361-0.33-0.625C77.581,55.612,78,52.825,78,50 c0-15.439-12.561-28-28-28S22,34.561,22,50s12.561,28,28,28c5.856,0,11.464-1.788,16.217-5.171c0.225-0.16,0.536-0.107,0.697,0.117 c0.16,0.225,0.107,0.537-0.117,0.697C61.873,77.147,56.065,79,50,79z"
              ></path>
              <path
                fill="#1f212b"
                d="M68.631,72.068c-0.14,0-0.279-0.059-0.378-0.173c-0.181-0.209-0.158-0.525,0.051-0.706 c0.739-0.638,1.452-1.324,2.122-2.037c0.188-0.202,0.505-0.21,0.706-0.023c0.201,0.189,0.212,0.505,0.023,0.707 c-0.693,0.739-1.433,1.449-2.197,2.11C68.863,72.028,68.747,72.068,68.631,72.068z"
              ></path>
              <path
                fill="#1f212b"
                d="M72.494,68.002c-0.107,0-0.216-0.035-0.308-0.105c-0.218-0.17-0.257-0.484-0.087-0.702 c1.649-2.118,2.982-4.452,3.963-6.938c0.101-0.258,0.392-0.382,0.648-0.282c0.257,0.102,0.383,0.392,0.281,0.648 c-1.015,2.575-2.396,4.993-4.104,7.186C72.79,67.936,72.643,68.002,72.494,68.002z"
              ></path>
              <path
                fill="#1f212b"
                d="M58.5,77.6c-0.276,0-0.5-0.224-0.5-0.5v-9.445c0-2.431-1.456-4.668-3.708-5.701 c-0.214-0.098-0.331-0.332-0.28-0.561C54.062,61.164,54.265,61,54.5,61h2.449c6.621,0,12.008-5.366,12.008-11.961 c0-3.064-1.166-5.987-3.282-8.229c-0.109-0.115-0.157-0.275-0.129-0.432c0.333-1.854,0.39-4.725-0.409-7.37 c-3.682,0.162-6.795,2.725-7.987,3.848C57.057,36.943,56.925,37,56.798,37H43.993c-0.127,0-0.249-0.048-0.342-0.135l-0.092-0.087 c-3.078-2.927-5.829-3.686-7.697-3.77c-0.662,2.162-0.941,4.762-0.712,6.729c0.019,0.16-0.042,0.319-0.161,0.428 c-2.506,2.275-3.943,5.51-3.943,8.875C31.046,55.635,36.433,61,43.053,61H45.5c0.235,0,0.438,0.164,0.488,0.394 c0.051,0.229-0.066,0.463-0.28,0.561c-1.974,0.904-3.397,2.676-3.715,4.625C41.954,66.822,41.745,67,41.5,67 c-2.333,0-5.191-0.271-6.598-2.38c-2.311-3.467-3.28-3.467-4.403-3.467c-0.14,0-0.385,0.023-0.448,0.178 c-0.086,0.206,0.031,0.756,0.702,1.428c1.287,1.287,1.311,1.335,2.554,3.82C34.409,68.785,37.319,70,41.5,70 c0.276,0,0.5,0.224,0.5,0.5v6.6c0,0.276-0.224,0.5-0.5,0.5S41,77.376,41,77.1v-6.105c-5.797-0.131-7.866-2.525-8.588-3.969 c-1.194-2.387-1.194-2.387-2.366-3.56c-0.869-0.869-1.213-1.81-0.919-2.518c0.209-0.505,0.709-0.795,1.372-0.795 c1.588,0,2.81,0.272,5.235,3.912c1.069,1.604,3.359,1.9,5.356,1.932c0.362-1.545,1.309-2.965,2.63-3.997h-0.668 c-7.172,0-13.007-5.813-13.007-12.959c0-3.562,1.485-6.988,4.084-9.442c-0.209-2.203,0.128-4.956,0.896-7.257 C35.094,32.138,35.285,32,35.5,32c2.036,0,5.192,0.696,8.692,4h12.409c1.427-1.311,4.847-4,8.898-4 c0.215,0,0.406,0.138,0.475,0.342c0.935,2.802,0.928,5.901,0.598,7.965c2.185,2.404,3.385,5.495,3.385,8.732 C69.957,56.186,64.122,62,56.949,62h-0.693C57.963,63.368,59,65.442,59,67.655V77.1C59,77.376,58.776,77.6,58.5,77.6z"
              ></path>
              <path
                fill="#1f212b"
                d="M34.238,45.97c-0.063,0-0.127-0.012-0.188-0.037c-0.256-0.104-0.379-0.396-0.274-0.651 c0.476-1.167,1.167-2.226,2.057-3.148c0.192-0.198,0.509-0.204,0.707-0.013c0.199,0.192,0.205,0.508,0.014,0.707 c-0.802,0.831-1.425,1.783-1.852,2.831C34.622,45.853,34.436,45.97,34.238,45.97z"
              ></path>
              <path
                fill="#1f212b"
                d="M33.66,51.021c-0.241,0-0.454-0.176-0.493-0.422c-0.08-0.51-0.121-1.034-0.121-1.558 c0-0.533,0.042-1.067,0.124-1.59c0.044-0.273,0.305-0.459,0.572-0.416c0.272,0.043,0.459,0.299,0.416,0.572 c-0.074,0.471-0.112,0.953-0.112,1.434c0,0.472,0.037,0.943,0.109,1.402c0.043,0.273-0.144,0.529-0.416,0.572 C33.713,51.019,33.687,51.021,33.66,51.021z"
              ></path>
              <path
                fill="#1f212b"
                d="M41.457,58.914c-0.028,0-0.057-0.002-0.085-0.007c-3.442-0.585-6.372-2.975-7.646-6.238 c-0.101-0.257,0.026-0.547,0.284-0.647c0.256-0.101,0.547,0.027,0.647,0.284c1.146,2.938,3.783,5.089,6.882,5.615 c0.271,0.046,0.455,0.305,0.409,0.577C41.907,58.741,41.696,58.914,41.457,58.914z"
              ></path>
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/shohanur27/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="50"
              viewBox="0 0 48 48"
            >
              <path
                fill="#0288D1"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
              ></path>
              <path
                fill="#FFF"
                d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
              ></path>
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
}
