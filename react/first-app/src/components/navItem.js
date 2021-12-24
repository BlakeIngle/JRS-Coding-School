import React from "react";

export default function NavItem({ link, linkName }) {
    return (
        <a href={link}>{linkName}</a>
    )
}