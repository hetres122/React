import React from "react";

interface Props {
    name: string;
}

const Header: React.FC<Props> = ({ name }) => {
    return (
        <div className="h-24 border-b-4 flex items-center">
            <h3 className="text-4xl pl-8 text-gray-700">{name}</h3>
        </div>
    );
};

export default Header;