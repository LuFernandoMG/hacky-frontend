'use client'
import { useState } from 'react';

interface TagsProps {
    maxTags: number;
    bubbleColor: string;
}

const Tags: React.FC<TagsProps> = ({ maxTags, bubbleColor }) => {
    const [tags, setTags] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue.trim() !== '' && tags.length < maxTags) {
            setTags([...tags, inputValue.trim()]);
            setInputValue('');
        }
    };

    const handleRemoveTag = (index: number) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add a tag and press Enter"
            />
            <div style={{ marginTop: '10px' }}>
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        onClick={() => handleRemoveTag(index)}
                        style={{
                            display: 'inline-block',
                            padding: '5px 10px',
                            margin: '5px',
                            backgroundColor: bubbleColor,
                            borderRadius: '15px',
                            cursor: 'pointer',
                            color: '#fff',
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Tags;