import React from "react";

const Table = ({headers, data}) => {
    return (
        <table className="w-full border-collapse border border-border">
            <thead>
            <tr className="bg-muted">
                {headers.map((header, idx) => (
                    <th key={idx} className="p-2 border">
                        {header}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIdx) => (
                <tr key={rowIdx} className="text-center border border-border">
                    {Object.values(row).map((cell, cellIdx) => (
                        <td key={cellIdx} className="p-2 border border-border">
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
