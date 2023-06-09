import React from "react";

export const PlusIcon = ({
    width = "16",
    height = "17",
    fill = "#313037",
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 7.18115H9V1.18115C9 0.629152 8.552 0.181152 8 0.181152C7.448 0.181152 7 0.629152 7 1.18115V7.18115H1C0.448 7.18115 0 7.62915 0 8.18115C0 8.73315 0.448 9.18115 1 9.18115H7V15.1812C7 15.7342 7.448 16.1812 8 16.1812C8.552 16.1812 9 15.7342 9 15.1812V9.18115H15C15.553 9.18115 16 8.73315 16 8.18115C16 7.62915 15.553 7.18115 15 7.18115Z" fill="#313037"/>
</svg>
    )
};

