import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
        <svg
          viewBox="0 0 9500 4500"
          xmlns="http://www.w3.org/2000/svg"
          fill="url(#ttb)"
          className="loader-logo"
          width="70"
          height="70"
        >
          <title>Webzio Loader</title>
          <defs>
            <linearGradient id="ttb" y2="1">
              <stop offset="100%" stopOpacity="1" stopColor="#2D151F">
                <animate
                  attributeName="offset"
                  values="0;1;1;0"
                  repeatCount="indefinite"
                  dur="4s"
                />
              </stop>
              <stop offset="100%" stopOpacity="1" stopColor="#F4F3DC">
                <animate
                  attributeName="offset"
                  values="0;1;1;0"
                  repeatCount="indefinite"
                  dur="4s"
                />
              </stop>
            </linearGradient>
          </defs>

          <g transform="scale(1,-1) translate(0,-4500)">
            <path
              fill="url(#ttb)"
              d="M0 4527 l0 -2282 1110 -1110 1110 -1110 1093 1093 1092 1092 65 0 65 0 1095 -1095 c725 -725 1102 -1095 1115 -1095 13 0 394 374 1125 1105 608 608 1111 1105 1117 1105 10 0 13 463 13 2290 l0 2290 -1145 0 -1145 0 0 -1136 0 -1136 -1079 -1079 c-594 -593 -1092 -1083 -1106 -1089 -14 -5 -45 -10 -68 -10 l-42 0 -1085 1083 c-596 595 -1087 1084 -1090 1085 -3 2 -3 516 -1 1143 l4 1139 -1121 0 -1122 0 0 -2283z"
            />
          </g>
        </svg>

        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;
