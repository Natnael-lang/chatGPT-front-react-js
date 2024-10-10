import "../CSS/Gpt.css";
import React, { useState } from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ChatGpt = () => {
    const lightMode = <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

    <g clip-path="url(#a)" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10">
    
    <path d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05" stroke-linecap="round"/>
    
    <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#000000" fill-opacity=".16"/>
    
    <path d="M12 19v4M12 1v4" stroke-linecap="round"/>
    
    </g>
    
    <defs>
    
    <clipPath id="a">
    
    <path fill="#ffffff" d="M0 0h24v24H0z"/>
    
    </clipPath>
    
    </defs>
    
    </svg>
    const nightMode =<svg width="30px" height="30px" viewBox="0 0 48 48" id="a" xmlns="http://www.w3.org/2000/svg"><defs><style>fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;</style></defs><path class="b" d="M31.75,6.479c6.7339,3.8881,10.3177,11.5721,8.969,19.23-1.3496,7.6616-7.3484,13.6604-15.01,15.01-7.6579,1.3487-15.3419-2.2351-19.23-8.969"/><path class="b" d="M32.02,6.75c4.1858,7.2511,2.98,16.4095-2.94,22.33-5.9205,5.92-15.0789,7.1258-22.33,2.94"/><path class="b" d="M10,8v4"/><path class="b" d="M8,10h4"/><path class="b" d="M12,18v3"/><path class="b" d="M10.5,19.5h3"/><path class="b" d="M30.5,14v3"/><path class="b" d="M29,15.5h3"/><path class="b" d="M38.5,5.5v3"/><path class="b" d="M37,7h3"/><path class="b" d="M7.5,41h3"/><path class="b" d="M9,39.5v3"/><path class="b" d="M39.5,36h3"/><path class="b" d="M41,34.5l.02,3"/></svg>

    const [isDark, setIsDark] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleToggle = () => {
        setIsDark(prev => !prev);
    };

    const handleInputChange = (event) => {
        const { value } = event.target;
        setInputValue(value);
        event.target.style.height = "auto"; // Reset height
        event.target.style.height = `${event.target.scrollHeight}px`; // Set new height
    };

    return (
        <div className="chat-container" style={isDark ? { backgroundColor: "ThreeDDarkShadow", color: "white" } : { backgroundColor: "white", color: "black" }}>
            <header className="chat-header">
                <button>{nightMode}</button>
                <button onClick={handleToggle}>{!isDark ? lightMode : nightMode}</button>
            </header>
            <footer className="chat-footer">
                <textarea
                    className="search-input"
                    type="text"
                    placeholder="Talk to Assistant"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </footer>
            <div className="chat-body">
                The Impact of Technology on Education
                {/* Content */}
            </div>
            <div className="chat-message">hbkjknkljlm;l,';/,;'.';,;lkmnj</div>
        </div>
    );
};

export default ChatGpt;