import React from 'react';
import '../index.css';

function Dropdown({ title, options, func }) {
    return (
        <div className='select'>
            <select defaultValue="0" onChange={func} name="format" id="format">
                <option value="0" disabled>
                    {title}
                </option>
                {options.map((item, index) => (
                    <option key={index} value={item}>
                        {item.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown