import React from 'react';
import logo_icon from '../images/logo.svg';

export default function Header() {

    return (
        <div id="header">
            <div id="logo_icon">
                <img className="logo_icon" src={logo_icon} alt="Carte Blanche" />
                {/* Icon attribution to https://commons.wikimedia.org/wiki/File:Simpleicons_Places_map-black-folded-paper-shape.svg */}
            </div>
            <div id="logo_text">Carta Blanche <span>Demo</span></div>
        </div>
    );
}