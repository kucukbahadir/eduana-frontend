import React from "react";

const Table = ({headers, data}) => {
    return (
        <table className="w-full border-collapse border border-gray-200">
            <thead>
            <tr className="bg-gray-400">
                {headers.map((header, idx) => (
                    <th key={idx} className="p-2 border">
                        {header}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIdx) => (
                <tr key={rowIdx} className="text-center border border-black">
                    {Object.values(row).map((cell, cellIdx) => (
                        <td key={cellIdx} className="p-2 border border-black">
                            {cell}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
