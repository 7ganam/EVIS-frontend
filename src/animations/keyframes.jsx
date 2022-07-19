import { keyframes } from "@mui/styled-engine";
export const slideDown = keyframes`
    from {transform: translateY(-200%)}
    to {transform: translateY(0)}
`;
export const slideUp = keyframes`
    0% { top: 120% }
    100% { top: 100% }
`;
export const circle = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;
