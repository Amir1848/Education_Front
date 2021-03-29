import React from 'react';

const GroupCell = ({ id, name, description, parentGroup }) => {
    return (
        <tr>
            <td className="py-1">
                {name}
            </td>
            <td>
                {description}
            </td>
            <td>
                {parentGroup == null ? "بدون سرگروه" : parentGroup}
            </td>
            <td>
                buttons
            </td>
        </tr>
    );
}


export default GroupCell;